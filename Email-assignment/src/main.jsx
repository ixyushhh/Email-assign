import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import List from "./list";

const router = createBrowserRouter([
  {
    path: "/",
    element: <List/>,
  },
  {
    path: "email/:emailId",
    element: <div>email no. 1</div>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
