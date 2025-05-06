import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Create from "./Create.jsx";
import Home from "./Home.jsx";
import BlogDetails from "./BlogDetails.jsx";
import NotFound from "./NotFound.jsx";
import { account } from "./lib/appwrite.js";

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
