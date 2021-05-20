import styled from "styled-components";
import { Mixin } from "styles";

interface ButtonProps extends Dimension {
  padding?: string;
  background?: string;
  radius?: string;
}

export const Button = styled.div<ButtonProps>`
  ${Mixin.button}
  width: ${(p) => p.size || p.width};
  height: ${(p) => p.size || p.height};
  min-width: 64px;
  padding: ${(p) => p.padding || "8px 24px"};
  background: ${(p) => p.background};
  border-radius: ${(p) => p.radius || "8px"};
`;
