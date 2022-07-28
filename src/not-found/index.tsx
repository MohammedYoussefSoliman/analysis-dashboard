import { useNavigate } from "react-router-dom";
import { Flex } from "components/Grids";
import { Button } from "components/Buttons";
import { NotFound as NotFoundLottie } from "assets/lotties";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <Flex
      gap="40px"
      direction="column"
      align="center"
      justify="center"
      fullWidth
      height="80vh"
    >
      <NotFoundLottie />
      <Button onClick={() => navigate("/")}>home</Button>
    </Flex>
  );
}
