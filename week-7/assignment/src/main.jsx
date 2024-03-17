import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  BrowserRouter,
  Route,
  Routes,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import One from "./components/one/One.jsx";

let router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/one",
    element: <One />,
  },
  {
    path: "/two",
    element: <App />,
  },
  {
    path: "/three",
    element: <App />,
  },
  {
    path: "/four",
    element: <App />,
  },
  {
    path: "/five",
    element: <App />,
  },
  {
    path: "/six",
    element: <App />,
  },
  {
    path: "/seven",
    element: <App />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
