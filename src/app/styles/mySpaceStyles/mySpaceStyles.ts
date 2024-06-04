import { css } from "@emotion/react";
import {
  commonColors,
  flexCenterX2,
  flexColumnCenterX2,
  mainStyle,
} from "../commonStyles/commonStyles";
import { Answers } from "@/app/stores/writeStore/useWriteStore";

export const mySpaceStyles = {
  MSmainStyle: [
    mainStyle,
    css`
      display: flex;
      flex-direction: column;
      row-gap: 5px;
    `,
  ],
  topSection: [
    css`
      display: flex;
      justify-content: space-between;
      align-items: bottom;
    `,
  ],
  userNameSpan: [
    css`
      font-size: 2rem;
      font-weight: bold;
    `,
  ],
  select: [
    css`
      width: 250px;
      height: 30px;
      border: 1px solid #ffffff80;
      background-color: transparent;
      &:hover,
      &:focus {
        border-color: #ffffff;
      }
    `,
  ],
  viewButton: [
    flexCenterX2,
    css`
      width: 30px;
      height: 30px;
      border: 1px solid #ffffff80;
      background-color: transparent;
      &:hover {
        border-color: #ffffff;
      }
    `,
  ],
  infoSection: [
    css`
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 10px;
      border: 1px solid #ffffff80;
      border-radius: 5px;
    `,
  ],
  eachDiaryGrid: {
    layout: (diary: Answers) => {
      return [
        css`
          position: relative;
          display: flex;
          flex-direction: column;
          row-gap: 5px;
          width: 200px;
          height: max-content;
          padding: 5px;
          border: 2px solid ${diary.color}80;
          border-radius: 10px;
          background-color: #00000010;
          transition: border, background-color 0.2s;
          &:hover,
          &:focus {
            background-color: #00000044;
            border-color: ${diary.color};
          }
        `,
      ];
    },
    deleteBtn: [
      flexCenterX2,
      css`
        position: absolute;
        top: 5px;
        right: 5px;
        width: 20px;
        height: 20px;
        border: none;
        border-radius: 50%;
        background-color: transparent;
        &:hover {
          background-color: ${commonColors.delete};
        }
      `,
    ],
    content: [
      css`
        font-size: 0.8rem;
      `,
    ],
  },
  eachDiaryLine: {
    layout: (diary: Answers) => {
      return [
        css`
          position: relative;
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          height: max-content;
          padding: 5px;
          border: 2px solid ${diary.color}80;
          border-radius: 10px;
          background-color: #00000010;
          transition: border, background-color 0.2s;
          &:hover,
          &:focus {
            background-color: #00000044;
            border-color: ${diary.color};
          }
        `,
      ];
    },

    starSection: [
      css`
        width: max-content;
        gap: 3px;
      `,
    ],
  },
  deleteModal: {
    section: [
      flexCenterX2,
      css`
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 10px;
        background-color: ${commonColors.background};
        z-index: 10;
      `,
    ],
    modal: [
      flexColumnCenterX2,
      css`
        position: relative;
        row-gap: 5px;
        width: 300px;
        height: max-content;
        padding: 10px;
        border: 1px solid #ffffff;
        border-radius: 10px;
        background-color: ${commonColors.delete};
      `,
    ],
    close: [
      flexCenterX2,
      css`
        position: absolute;
        top: 3px;
        right: 3px;
        width: 20px;
        height: 20px;
        border: 1px solid transparent;
        border-radius: 50%;
        background-color: transparent;
        font-size: 1rem;
        &:hover {
          border-color: #ffffff;
        }
      `,
    ],
    date: [
      css`
        padding: 2px 4px;
        border: 2px solid ${commonColors.representative};
        border-radius: 5px;
        margin-right: 5px;
        background-color: ${commonColors.background};
      `,
    ],
  },
};
