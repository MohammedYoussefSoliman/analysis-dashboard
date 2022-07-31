import React from "react";
import { Flex } from "components/Grids";
import Typography from "components/Typography";
import Wrapper from "./styles";
import ActionBar from "./Actions";

export default function Header() {
  return (
    <Wrapper as="header" align="center" justify="center" fullWidth>
      <Flex mh={20} align="center" justify="space-between" fullWidth>
        <Typography.H6 capitalizeFirstLetter text="analyticalDashboard" />
        <ActionBar />
      </Flex>
    </Wrapper>
  );
}
