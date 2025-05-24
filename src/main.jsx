import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import App from "./App.jsx"
import "./index.css"

// import react-router
import { createBrowserRouter, redirect, RouterProvider } from "react-router-dom"

// React Components
import NotFound from "./NotFound.jsx"
import Home from "./Home.jsx"
import Create from "./Create.jsx"
import BlogDetails from "./BlogDetails.jsx"
import { account, COLLECTION_ID, DATABASE_ID, databases } from "./appwrite/config.js"
import Register from "./Register.jsx"
import Login from "./Login.jsx"
import { ID, Query, Permission, Role } from "appwrite"

const router = createBrowserRouter([
    {
        path: "/",
        loader: async () => {
            try {
                const response = await account.get()
                return { user: response, error: null }
            } catch (error) {
                return { user: null, error: error.message }
            }
        },
        action: async () => {
            try {
                await account.deleteSession("current")

                return null
            } catch (error) {
                return error.message
            }
        },
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />,
                loader: async () => {
                    try {
                        const data = await databases.listDocuments(DATABASE_ID, COLLECTION_ID, [Query.orderDesc("$createdAt")])
                        console.log(data);

                        return { data, error: null }
                    } catch (error) {
                        return { data: null, error: error.message }
                    }
                }
            },
            {
                path: "/create",
                element: <Create />,
                action: async ({ request }) => {
                    const form = await request.formData();
                    const title = form.get("title");
                    const body = form.get("body");
                    try {
                        const { $id, name } = await account.get()

                        const data = { title, body, author: name };
                        console.log($id, name)

                        await databases.createDocument(
                            DATABASE_ID,
                            COLLECTION_ID,
                            ID.unique(),
                            data,
                            [
                                Permission.read(Role.any()), // Anyone can read
                                Permission.update(Role.user($id)), // Only this user can update
                                Permission.delete(Role.user($id)), // Only this user can delete
                            ],
                        );

                        return redirect("/");
                    } catch (error) {
                        return error.message;
                    }
                }
            },
            {
                path: "/blogs/:id",
                element: <BlogDetails />,
            },
            {
                path: "/register",
                element: <Register />,
                action: async ({ request }) => {
                    try {
                        const form = await request.formData()
                        const email = form.get("email");
                        const password = form.get("password");
                        const username = form.get("username");

                        await account.create(ID.unique(), email, password, username)
                        return redirect("/login")
                    } catch (error) {
                        return error.message
                    }
                }
            },
            {
                path: "/login",
                element: <Login />,
                action: async ({ request }) => {
                    const form = await request.formData();
                    const email = form.get("email");
                    const password = form.get("password");

                    try {
                        await account.createEmailPasswordSession(email, password);
                        return redirect("/");
                    } catch (error) {
                        return error.message;
                    }
                },
            },
            {
                path: "*",
                element: <NotFound />,
            },
        ],
    },
])

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
)
