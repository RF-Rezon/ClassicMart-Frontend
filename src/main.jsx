import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import AuthProvider from "./Context/AuthContext.jsx";
import WaitHandler from "./Handler/WaitHandler.jsx";
import { router } from "./Routes/Router.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <WaitHandler>
        <RouterProvider router={router} />
      </WaitHandler>
    </AuthProvider>
  </React.StrictMode>
);
