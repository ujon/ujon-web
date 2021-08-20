import styled from "styled-components";

interface TextButtonProps {
  color?: string;
  hoverColor?: string;
  textAlign?: textAlign;
}

const TextButton = styled.button<TextButtonProps>`
  background: none;
  border: none;
  cursor: pointer;
  white-space: nowrap;
  user-select: none;
  text-align: ${(p) => p.textAlign};
  color: ${(p) => p.color};
  :hover {
    color: ${(p) => p.hoverColor};
  }
`;

export const TextButton1 = styled(TextButton)`
  font-size: 28px;
  font-weight: 500;
`;

export const TextButton2 = styled(TextButton)`
  font-size: 20px;
  font-weight: 700;
`;
