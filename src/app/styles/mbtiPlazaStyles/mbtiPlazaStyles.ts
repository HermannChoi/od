import { css } from "@emotion/react";
import {
  flexCenterX2,
  flexColumnCenterX2,
  widthHeightFull,
} from "../commonStyles/commonStyles";

export const mbtiPlazaStyles = {
  firstSection: [
    flexCenterX2,
    css`
      gap: 20px;
      width: 50%;
    `,
  ],
  secondSection: (degree: number) => {
    return [
      flexCenterX2,
      widthHeightFull,
      css`
        gap: 10px;
        padding: 10px;
        transform-style: preserve-3d;
        transform: perspective(800px) rotateY(${degree}deg);
        transition: 0.5s;
      `,
    ];
  },
  button: (i: number) => {
    return [
      flexColumnCenterX2,
      css`
        position: absolute;
        width: 100px;
        height: 100px;
        border: 1px solid white;
        background-color: #000000cc;
        font-family: math;
        font-size: 1rem;
        transform: rotateY(${i * 90}deg) translateZ(400px);
        transition: 0.2s;
        &:hover {
          border-radius: 10px;
          background-color: #000000;
          font-weight: bold;
        }
      `,
    ];
  },
  buttonStrong: [
    css`
      font-size: 1.5rem;
      font-family: math;
    `,
  ],
  buttonP: [
    css`
      color: #fcfcfc;
      font-size: 0.7rem;
    `,
  ],
};
