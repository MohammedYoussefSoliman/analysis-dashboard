import Spinner from "components/Loader";
import Wrapper from "./styles";

export default function LoadingScreen() {
  return (
    <Wrapper>
      <Spinner />
    </Wrapper>
  );
}
