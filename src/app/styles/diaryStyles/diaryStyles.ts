import { css } from "@emotion/react";
import { homePageStyles } from "../homePageStyles/homePageStyles";

export const diaryStyles = {
  starContainer: [
    css`
      display: flex;
      justify-content: end;
      gap: 3px;
      width: 150px;
    `,
  ],
  heartBtn: [
    css`
      border: none;
      border-radius: 50%;
      background-color: transparent;
    `,
  ],
  comment: {
    container: [
      homePageStyles.commonContentLayout,
      css`
        display: flex;
        flex-direction: row;
        gap: 10px;
        background-color: transparent;
      `,
    ],
    replyBtn: [
      css`
        width: fit-content;
        padding: 3px 6px;
        border: none;
        border-radius: 5px;
        margin-top: 3px;
        background-color: transparent;
        &:hover {
          background-color: #00000044;
        }
      `,
    ],
  },
};
