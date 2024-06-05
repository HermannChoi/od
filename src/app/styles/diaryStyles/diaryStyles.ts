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
  commentsContainer: [
    homePageStyles.commonContentLayout,
    css`
      display: flex;
      flex-direction: row;
      gap: 10px;
    `,
  ],
};
