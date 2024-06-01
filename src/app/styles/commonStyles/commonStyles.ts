import { css } from "@emotion/react";
import { showUp2, widthHeightZeroTo40 } from "./keyframes";

export const commonColors = {
  representative: "#a2ffe3",
  background: "#00000066",
};

export const flexCenterX2 = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const widthHeightFull = css`
  width: 100%;
  height: 100%;
`;

export const widthHeightVhFull = css`
  width: 100%;
  height: 100vh;
`;

export const flexColumnCenter = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const flexColumnCenterX2 = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const absoluteCenter = css`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const absoluteCenterX2 = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const whiteSpaceNoWrap = css`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const delayShowUpAni = (delay: number) => {
  return [
    css`
      opacity: 0;
      animation: ${showUp2} 0.5s ${delay}s forwards;
    `,
  ];
};

export const layoutStyle = [
  flexColumnCenter,
  css`
    width: 90%;
    min-width: 350px;
    height: 90vh;
    border-radius: 30px;
    background-color: ${commonColors.background};
  `,
];

export const mainStyle = [
  css`
    width: 100%;
    height: calc(100% - 60px);
    padding: 20px 10px;
  `,
];
