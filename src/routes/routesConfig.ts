import React from "react";
import { RouterType } from "./types";

const routes: RouterType[] = [
  {
    path: "/",
    element: React.lazy(() => import("app/dashboard")),
  },
  {
    path: "/404",
    element: React.lazy(() => import("app/not-found")),
  },
];

export default routes;
