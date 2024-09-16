import { css } from "@emotion/react";
import { homePageStyles } from "./homePageStyles";

export const homePageRSectionSt = {
  container: [
    homePageStyles.section,
    css`
      @media (max-width: 930px) {
        display: none;
      }
    `,
  ],
};
