import React from "react";
import { RouterType } from "./types";

const routes: RouterType[] = [
  {
    path: "/",
    element: React.lazy(() => import("app/dashboard")),
  },
  {
    path: "/school/:slug",
    element: React.lazy(() => import("app/school")),
  },
  {
    path: "/404",
    element: React.lazy(() => import("app/not-found")),
  },
  {
    path: "/error",
    element: React.lazy(() => import("app/error-page")),
  },
];

export default routes;
