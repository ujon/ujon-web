import React from "react";
import styled from "styled-components";

import LanguageSection from "./Language";
import ThemeSection from "./Theme";

const Container = styled.div`
  padding: 48px;
`;

const SettingView = () => {
  return (
    <Container>
      <LanguageSection />
      <ThemeSection />
    </Container>
  );
};

export default SettingView;
