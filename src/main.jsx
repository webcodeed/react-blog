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
import { account } from "./lib/appwrite.js";
import Login from "./Login.jsx";

import Register from "./Register.jsx";
import { ID } from "appwrite";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: async () => {
      let user;
      try {
        user = await account.get();

        return { user };
      } catch (error) {
        return { user, error: error.message };
      }
    },
    action: async () => {
      try {
        await account.deleteSession("current");
        return null;
      } catch (error) {
        return error.message;
      }
    },
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/create",
        element: <Create />,
      },
      {
        path: "/blogs/:id",
        element: <BlogDetails />,
      },
      {
        path: "/login",
        element: <Login />,
        // loader: authLoader,
        action: async ({ request }) => {
          const form = await request.formData();
          const email = form.get("email");
          const password = form.get("password");

          await account.createEmailPasswordSession(email, password);

          return redirect("/");
        },
      },
      {
        path: "/register",
        element: <Register />,
        // loader: authLoader,
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
