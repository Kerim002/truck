import { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";

const RouterWithFallback = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <RouterProvider router={router} />
  </Suspense>
);

export default RouterWithFallback;
