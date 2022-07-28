import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LoadingScreen from "components/LoadingScreen";
import createRoute from "./createRoutes";
import routes from "./routesConfig";

export default function AppRouts() {
  return (
    <React.Suspense fallback={<LoadingScreen />}>
      <Routes>
        {routes.map((route) => createRoute(route))}
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </React.Suspense>
  );
}
