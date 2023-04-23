import React from "react";
import ReactDOM from "react-dom/client";
import Provider from "./context/Provider.tsx";

import "./style/globalcss.css";

import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
