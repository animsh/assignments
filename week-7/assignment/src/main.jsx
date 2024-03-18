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
import Two from "./components/two/Two.jsx";
import Four from "./components/four/Four.jsx";

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
    element: <Two />,
  },
  {
    path: "/three",
    element: <App />,
  },
  {
    path: "/four",
    element: <Four />,
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
