import styled from "styled-components";

import Intro from "./Intro";
import TechStackCylinder from "./TechStackCylinder";

const Container = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: 50% 50%;
  grid-auto-rows: 100vh;
`;

const TechStackView = () => {
  return (
    <Container>
      <Intro />
      <TechStackCylinder />
    </Container>
  );
};

export default TechStackView;
