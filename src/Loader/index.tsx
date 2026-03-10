import { PropagateLoader } from "react-spinners";

import { Container } from "./styles";
import { variables } from "../utils/variables";

const Loader = () => {
  return (
    <Container>
      <PropagateLoader color={variables.secondColor} />
    </Container>
  );
};

export default Loader;
