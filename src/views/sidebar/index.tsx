import styled, { HSLA } from "styled-components";
import { Column } from "components/layout";
import { hslColor, deepCopy } from "utils";

import Menu from "./Menu";

const Container = styled.div`
  width: min-content;
  height: 100vh;
  padding: 0 20px;
  background-color: ${({ theme }) => {
    const backgroundColor: HSLA = deepCopy(theme.background);
    backgroundColor.lightness -= 5;
    return hslColor(backgroundColor);
  }};
`;

const SideBar = () => {
  return (
    <Container>
      <Column width="100%" height="100%">
        <Menu />
      </Column>
    </Container>
  );
};

export default SideBar;
