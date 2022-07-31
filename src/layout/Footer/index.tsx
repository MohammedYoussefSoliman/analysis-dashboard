import React from "react";
import Typography from "components/Typography";
import Wrapper from "./styles";

export default function Footer() {
  return (
    <Wrapper as="footer" align="center" justify="center" fullWidth>
      <Typography.Small text="copyrights" />
    </Wrapper>
  );
}
