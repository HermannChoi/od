"use client";
/** @jsxImportSource @emotion/react */

import { messageStyle } from "@/app/styles/commonStyles/commonStyles";

export interface CongratsMessage {
  message: string;
}

const CongratsMessage: React.FC<CongratsMessage> = ({ message }) => {
  return (
    <div css={messageStyle.layout}>
      <span css={messageStyle.text}>{message}</span>
    </div>
  );
};

export default CongratsMessage;
