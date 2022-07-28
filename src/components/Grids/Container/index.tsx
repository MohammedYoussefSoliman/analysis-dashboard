import React from "react";
import Wrapper from "./styles";
import { ConfigWidth } from "./types";

interface ContainerPropType {
  width?: ConfigWidth;
  children: React.ReactNode;
}

export default function Container({
  width = "wide",
  children,
}: ContainerPropType) {
  return <Wrapper width={width}>{children}</Wrapper>;
}
