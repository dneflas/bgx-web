import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import About from "./pages/About.jsx";
import Team from "./pages/Team.jsx";
import Home from "./pages/Home.jsx";
import DownloadPage from "./pages/DownloadPage.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";

// import "./index.css";

const router = createBrowserRouter([
  {
    path: "/bgx-web/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/bgx-web/",
        element: <Home />,
      },
      // {
      //   path: "/bgx-web/about",
      //   element: <About />,
      // },
      // {
      //   path: "/bgx-web/team",
      //   element: <Team />,
      // },
      // {
      //   path: "/bgx-web/download",
      //   element: <DownloadPage />,
      // },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
