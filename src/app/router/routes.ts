import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import Error from "../../pages/error/Error";
import Driver from "../../pages/drivers/Driver";

const Login = lazy(() => import("../../pages/login/Login"));
const Layout = lazy(() => import("../../pages/layout/Layout"));
const Locks = lazy(() => import("../../pages/locks/Locks"));
const Drivers = lazy(() => import("../../pages/drivers/Drivers"));
const Home = lazy(() => import("../../pages/home/Home"));
const Report = lazy(() => import("../../pages/report/Report"));

export const router = createBrowserRouter([
  {
    path: "login",
    Component: Login,
  },
  {
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        Component: Home,
        ErrorBoundary: Error,
      },
      {
        path: "drivers",
        Component: Drivers,
      },
      {
        path: "drivers/:id",
        Component: Driver,
      },
      {
        path: "locks",
        Component: Locks,
      },
      {
        path: "report",
        Component: Report,
      },
    ],
  },
]);
