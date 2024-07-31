import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import RouterWithFallback from "./app/router/RouterWithFallback.tsx";
import { Provider } from "react-redux";
import { store } from "./app/store/store.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <Provider store={store}>
    <RouterWithFallback />;
  </Provider>
  // </React.StrictMode>
);
