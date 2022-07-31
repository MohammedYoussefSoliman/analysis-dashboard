import styled from "@emotion/styled";
import { Flex } from "components/Grids";
import devices from "theme/sizes";

const Wrapper = styled(Flex)`
  .card {
    max-width: 380px;
    ${devices.lg} {
      max-width: unset;
    }
  }
`;

export default Wrapper;
