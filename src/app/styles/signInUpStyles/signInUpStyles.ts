import { css } from "@emotion/react";

export const signInUpStyles = {
  input: [
    css`
      width: 100%;
      height: 40px;
      padding: 5px 10px;
      border: 0.5px solid white;
      border-radius: 10px;
      background-color: transparent;
    `,
  ],
  button: [
    css`
      width: 100%;
      height: 45px;
      padding: 5px 10px;
      border: 0.5px solid white;
      border-radius: 10px;
      transition: 0.2s;
      cursor: pointer;
      background-color: transparent;
      &:hover,
      &:focus {
        background-color: #00000044;
      }
    `,
  ],
};
