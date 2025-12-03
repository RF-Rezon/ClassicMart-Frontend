import { SpeedInsights } from "@vercel/speed-insights/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import AuthProvider from "./Context/AuthContext.jsx";
import WaitHandler from "./Handler/WaitHandler.jsx";
import "./index.css";
import { router } from "./Routes/Router.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <WaitHandler>
        <RouterProvider router={router} >
          <SpeedInsights />
        </RouterProvider>
      </WaitHandler>
    </AuthProvider>
  </React.StrictMode>
);
