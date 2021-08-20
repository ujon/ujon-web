import styled from "styled-components";

interface TextProps {
  size?: string;
  weight?: string;
  color?: string;
  hoverColor?: string;
  lineHeight?: string;
  whiteSpace?: string;
  wordBreak?: string;
  margin?: string;
}

export const H2 = styled.h2<TextProps>`
  font-size: 4rem;
  font-weight: bold;
  line-height: normal;
  margin: 0 0 20px 0;

  color: ${(p) => p.color};
  :hover {
    color: ${(p) => p.hoverColor};
  }
`;

const Text = styled.p<TextProps>`
  color: ${(p) => p.color};

  :hover {
    color: ${(p) => p.hoverColor};
  }
`;

export const Body = styled(Text)`
  size: 1rem;
  font-weight: normal;
  line-height: 1.5;
`;
