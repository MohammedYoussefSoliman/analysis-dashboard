import { Route } from "react-router-dom";
import { RouterType } from "./types";

export default function createRoute({ element, path }: RouterType) {
  const Component = element;
  return <Route key={path} path={path} element={<Component />} />;
}
