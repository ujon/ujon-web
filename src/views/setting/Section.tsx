import React, { FC } from "react";
import styled from "styled-components";
import { Text } from "components/html";

const Container = styled.div`
  margin-bottom: 50px;
`;

interface SectionProps {
  title: string;
}

const Section: FC<SectionProps> = ({ title, children }) => {
  return (
    <Container>
      <Text.H2>{title}</Text.H2>
      {children}
    </Container>
  );
};

export default Section;
