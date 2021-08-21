import { css } from "styled-components";

export const absoluteCenter = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const flexCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const hideScrollBar = css`
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;
