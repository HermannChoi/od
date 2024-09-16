import { css } from "@emotion/react";
import { flexColumnCenter } from "../commonStyles/commonStyles";

export const writePageStyles = {
  postOrDiaryBtn: [
    css`
      width: 150px;
      height: 50px;
      padding: 10px;
      border: 1px solid #ffffff80;
      border-radius: 10px;
      margin-bottom: 30px;
      background-color: transparent;
      transition: 0.2s;
      &:hover {
        font-size: 1rem;
      }
    `,
  ],
  questions: {
    layout: [
      flexColumnCenter,
      css`
        row-gap: 20px;
        width: 100%;
        max-width: 500px;
      `,
    ],
    qustion: [
      css`
        font-size: 1.5rem;
      `,
    ],
    contentSection: [
      css`
        display: flex;
        justify-content: space-between;
        width: 100%;
      `,
    ],
  },
  askColor: {
    button: (color: string) => {
      return [
        css`
          width: 40px;
          height: 40px;
          border: 1px solid #ffffff;
          border-radius: 50%;
          background-color: ${color}80;
          transition: 0.2s;
          &:hover,
          &:focus {
            transform: scale(1.1);
            background-color: ${color};
          }
        `,
      ];
    },
  },
  askDiary: {
    textarea: [
      css`
        width: 100%;
        min-height: 40px;
        max-height: 125px;
        padding: 10px;
        border: 1px solid #ffffff80;
        border-radius: 10px;
        background-color: transparent;
        font-size: 1rem;
        resize: vertical;
        &:hover,
        &:focus {
          border-color: #ffffff;
        }
      `,
    ],
    textLength: [
      css`
        width: 100%;
        font-size: 0.8rem;
        text-align: right;
      `,
    ],
  },
  askStar: {
    star: (i: number, star: number, size: number) => {
      return [
        css`
          width: ${size}px;
          height: ${size}px;
          border: 1px solid #ffffff;
          border-radius: 40%;
          background-color: ${i < star ? "#e8e800" : "#ffffff"};
        `,
      ];
    },
    number: (star: number) => {
      return [
        css`
          font-size: ${0.8 + star / 10}rem;
          font-weight: bold;
          text-align: center;
          text-shadow: 0 0 10px black;
          transition: all 0.2s;
        `,
      ];
    },
  },
};
