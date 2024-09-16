import { css } from "@emotion/react";
import { fadeIn, fadeOut, showDown, showUp, showUp2 } from "./keyframes";

export const commonColors = {
  representative: "#7eb1d3",
  background: "#00000066",
  delete: "#FF6666",
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

export const coverPageStyle = [
  css`
    position: absolute;
    width: 100%;
    height: 90vh;
    border-radius: 10px;
    background-color: beige;
    background-color: #00000080;
    animation: ${fadeOut} 0.5s forwards;
  `,
];

export const mainStyle = [
  css`
    width: 100%;
    padding: 20px 10px;
    animation: ${showUp} 0.3s ease-in-out;
    overflow: auto;

    @media (max-width: 750px) {
      padding-bottom: 80px;
    }
  `,
];

export const messageStyle = {
  layout: [
    flexCenterX2,
    ,
    css`
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 10px;
      background-color: beige;
      background-color: #00000080;
      animation: ${fadeIn} 1s forwards;
    `,
  ],
  text: [
    css`
      font-size: 2rem;
      font-weight: bold;
      text-shadow: 0 0 20px black;
      animation: ${showDown} 0.5s 1.5s forwards;
    `,
  ],
};
