import React from "react";
import { useNavigate } from "react-router-dom";
import { ErrorLottie } from "assets/lotties";
import { Container, Flex } from "components/Grids";
import { Button } from "components/Buttons";
import Typography from "components/Typography";
import Wrapper from "./styles";

export default function Page() {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Container>
        <Flex align="center" gap="50px" justify="center" fullWidth fullHeight>
          <ErrorLottie size={200} />
          <Flex direction="column" gap="21px">
            <Typography.H2 text="unknownError" />
            <Button onClick={() => navigate("/")}>home</Button>
          </Flex>
        </Flex>
      </Container>
    </Wrapper>
  );
}
