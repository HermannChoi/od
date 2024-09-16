import { css } from "@emotion/react";
import { homePageStyles } from "./homePageStyles";

export const homePageLSectionSt = {
  container: [
    homePageStyles.section,
    css`
      @media (max-width: 930px) {
        display: none;
      }
    `,
  ],
  userInfo: {
    container: [
      css`
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: max-content;
        padding: 10px;
        border: none;
        border-radius: 10px;
        background-color: #00000044;
      `,
    ],
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
        border-radius: 5px;
        font-weight: bold;
      `,
    ],
  },
};
