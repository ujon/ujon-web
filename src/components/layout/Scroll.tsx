import styled from "styled-components";

interface ScrollProps {
  direction?: Axis;
}
const handleDriection = (direction?: Axis) => {
  switch (direction) {
    case "none":
      return "overflow: hidden";
    case "horizontal":
      return `
            overflow-x: auto;
            overflow-y: hidden;
        `;
    case "vertical":
      return `
            overflow-x: hidden;
            overflow-y: auto;
        `;
    default:
      return "overflow: auto";
  }
};

export const ScrollView = styled.div<ScrollProps>`
  width: 100%;
  height: 100%;
  ${(p) => handleDriection(p.direction)}
`;
