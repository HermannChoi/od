import { css } from "@emotion/react";

export const homePageStyles = {
  navbar: {
    menuButton: (key: string, whichMenu: string) => {
      return [
        css`
          height: 100%;
          padding: 0 20px;
          border: none;
          background-color: ${key === whichMenu ? `#00000044` : `transparent`};
          font-size: 1rem;
          transition: 0.2s;
          ${key === whichMenu && `border-bottom: 1px solid white;`}
          &:hover {
            background-color: #00000066;
          }
        `,
      ];
    },
    signoutButton: [
      css`
        width: max-content;
        padding: 8px 15px;
        border-radius: 20px;
        background-color: transparent;
        transition: 0.2s;
        &:hover {
          background-color: #00000020;
          font-weight: bold;
        }
      `,
    ],
  },
};
