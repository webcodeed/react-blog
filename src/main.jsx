import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
import Create from "./Create.jsx";
import Home from "./Home.jsx";
import BlogDetails from "./BlogDetails.jsx";
import NotFound from "./NotFound.jsx";
import {
  account,
  DATABASE_COLLECTION,
  databases,
  DATBASE_ID,
} from "./lib/appwrite.js";
import Login from "./Login.jsx";

import Register from "./Register.jsx";
import { ID, Query, Permission, Role } from "appwrite";

let user;

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: async () => {
      if (user) {
        return { user, error: null };
      }
      try {
        const response = await account.get();
        user = response;
        return { user, error: null };
      } catch (error) {
        return { user: null, error: error.message };
      }
    },
    action: async () => {
      try {
        await account.deleteSession("current");
        user = null;
        return null;
      } catch (error) {
        return error.message;
      }
    },
    children: [
      {
        index: true,
        element: <Home />,
        loader: async () => {
          try {
            const data = await databases.listDocuments(
              DATBASE_ID,
              DATABASE_COLLECTION,
              [Query.orderDesc("$createdAt")],
            );
            return { error: null, data };
          } catch (error) {
            return { error: error.message, data: null };
          }
        },
      },
      {
        path: "/create",
        element: <Create />,
        action: async ({ request }) => {
          const form = await request.formData();
          const title = form.get("title");
          const body = form.get("body");

          try {
            if (!user) {
              throw new Error("Login or Register to create new blogposts");
            }

            const { $id, name } = user;
            const data = { title, body, author: name };

            await databases.createDocument(
              DATBASE_ID,
              DATABASE_COLLECTION,
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
        },
      },
      {
        path: "/blogs/:id",
        element: <BlogDetails />,
        loader: async ({ params }) => {
          const { id } = params;
          try {
            const response = await databases.listDocuments(
              DATBASE_ID,
              DATABASE_COLLECTION,
              [Query.equal("$id", id)],
            );

            if (!response.total) {
              throw new Error(
                "Error 404: Unable to find the page you're looking for",
              );
            }

            return { error: null, data: response.documents[0] };
          } catch (error) {
            return { error: error.message, data: null };
          }
        },
        action: async ({ params }) => {
          const { id } = params;
          try {
            await databases.deleteDocument(DATBASE_ID, DATABASE_COLLECTION, id);

            return redirect("/");
          } catch (error) {
            return error.message;
          }
        },
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
        path: "/register",
        element: <Register />,
        action: async ({ request }) => {
          try {
            const form = await request.formData();
            const email = form.get("email");
            const password = form.get("password");
            const username = form.get("username");

            await account.create(ID.unique(), email, password, username);

            return redirect("/login");
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
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
