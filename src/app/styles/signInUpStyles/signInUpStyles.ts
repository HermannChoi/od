import { css } from "@emotion/react";
import { flexCenterX2 } from "../commonStyles/commonStyles";

export const signInUpStyles = {
  form: [
    css`
      display: flex;
      flex-direction: column;
      gap: 10px;
      width: 350px;
    `,
  ],
  input: [
    css`
      width: 100%;
      height: 45px;
      padding: 5px 10px;
      border: 0.5px solid white;
      border-radius: 10px;
      background-color: transparent;
      font-size: 1rem;
      &::placeholder {
        color: #ffffffca;
      }
    `,
  ],
  button: [
    css`
      width: 100%;
      height: 45px;
      padding: 5px 10px;
      border: 0.5px solid white;
      border-radius: 10px;
      margin-top: 10px;
      font-size: 1rem;
      transition: 0.2s;
      cursor: pointer;
      background-color: transparent;
      &:hover,
      &:focus {
        background-color: #00000044;
      }
    `,
  ],
  visibilityButton: [
    flexCenterX2,
    css`
      width: 30px;
      height: 30px;
      padding: 5px;
      border: 1px solid transparent;
      border-radius: 50%;
      background-color: transparent;
      transition: 0.2s;
      cursor: pointer;
      &:hover {
        border-color: white;
      }
    `,
  ],
  errorMessage: [
    css`
      font-size: 0.9rem;
      font-weight: 600;
      text-shadow: 0 0 5px black;
    `,
  ],
  askingSection: [
    css`
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 350px;
    `,
  ],
  link: [
    css`
      &:hover {
        text-decoration: underline;
      }
    `,
  ],
};
