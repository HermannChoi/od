import { css } from "@emotion/react";
import {
  flexCenterX2,
  flexColumnCenter,
  mainStyle,
} from "../commonStyles/commonStyles";

export const homePageStyles = {
  main: [
    mainStyle,
    css`
      display: flex;
      gap: 10px;
    `,
  ],
  section: [
    flexColumnCenter,
    css`
      row-gap: 10px;
      flex: 0.6;
      height: 100%;
    `,
  ],
  commonContentLayout: [
    css`
      display: flex;
      flex-direction: column;
      row-gap: 10px;
      width: 100%;
      height: max-content;
      padding: 10px;
      border: none;
      border-radius: 10px;
      background-color: #00000044;
    `,
  ],
  leftSection: {
    userInfo: {
      name: [
        css`
          font-size: 1.5rem;
          font-weight: bold;
        `,
      ],
      mbti: [
        css`
          padding: 3px 8px;
          border: 1px solid #ffffff;
          font-weight: bold;
        `,
      ],
    },
  },
  middleSection: {
    vote: {
      bar: [
        css`
          display: flex;
          justify-content: start;
          align-items: center;
          width: 100%;
          height: 30px;
          padding: 10px;
          border: none;
          border-radius: 10px;
          background-color: #00000010;
          cursor: pointer;
          &:hover {
            background-color: #00000020;
          }
        `,
      ],
    },
    posts: {
      header: [
        css`
          display: flex;
          justify-content: space-between;
          align-items: center;
        `,
      ],
      userLink: [
        css`
          display: flex;
          align-items: center;
          gap: 10px;
        `,
      ],
      profile: (size: number) => {
        return [
          flexCenterX2,
          css`
            width: ${size}px;
            height: ${size}px;
            border: none;
            border-radius: 50%;
            background-color: #ffffff;
            color: #000000;
            font-size: 1.3rem;
            font-weight: bold;
            font-family: math;
          `,
        ];
      },
      requestFriendBtn: [
        flexCenterX2,
        css`
          width: 35px;
          height: 35px;
          border: none;
          background-color: transparent;
          font-size: 25px;
        `,
      ],
      date: [
        css`
          font-size: 0.8rem;
          color: #ffffffcc;
        `,
      ],
      bottom: [
        css`
          display: flex;
          justify-content: space-between;
          align-items: center;
        `,
      ],
      bottomEach: [
        css`
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 5px;
        `,
      ],
    },
  },
};
