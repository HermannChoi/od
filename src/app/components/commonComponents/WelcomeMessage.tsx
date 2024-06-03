"use client";
/** @jsxImportSource @emotion/react */

import { messageStyle } from "@/app/styles/commonStyles/commonStyles";
import { useCookies } from "react-cookie";

const WelcomeMessage = () => {
  const [cookies] = useCookies(["nickname"]);

  return (
    <div css={messageStyle.layout}>
      <span css={messageStyle.text}>어서와요, {cookies.nickname}님</span>
    </div>
  );
};

export default WelcomeMessage;
