import styled from "styled-components";

export enum MainAxisAlignment {
  start = "flex-start",
  end = "flex-end",
  center = "center",
  spaceBetween = "space-between",
  spaceAround = "space-around",
}

export enum CrossAxisAlignment {
  start = "flex-start",
  end = "flex-end",
  center = "center",
  spaceBetween = "space-between",
  spaceAround = "space-around",
  stretch = "stretch",
}

interface FlexProps extends Dimension {
  inline?: boolean;
  reverse?: boolean;
  mainAxisAlignment?: MainAxisAlignment;
  crossAxisAlignment?: CrossAxisAlignment;
}

const Flex = styled.div<FlexProps>`
  width: ${(p) => p.size || p.width};
  height: ${(p) => p.size || p.height};
  display: ${(p) => (p.inline ? "inline-flex" : "flex")};
  justify-content: ${(p) => p.mainAxisAlignment};
  align-items: ${(p) => p.crossAxisAlignment};
`;

export const Column = styled(Flex)`
  flex-direction: ${(p) => (p.reverse ? "column-reverse" : "column")};
`;

export const Row = styled(Flex)`
  flex-direction: ${(p) => (p.reverse ? "row-reverse" : "row")};
`;
