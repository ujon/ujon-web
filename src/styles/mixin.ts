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

export const button = css`
  display: inline-block;
  box-sizing: border-box;
  text-align: center;
  user-select: none;
`;
