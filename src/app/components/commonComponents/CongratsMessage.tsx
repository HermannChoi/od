"use client";
/** @jsxImportSource @emotion/react */

import { messageStyle } from "@/app/styles/commonStyles/commonStyles";

const CongratsMessage = () => {
  return (
    <div css={messageStyle.layout}>
      <span css={messageStyle.text}>작성을 완료했어요!</span>
    </div>
  );
};

export default CongratsMessage;
