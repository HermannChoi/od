"use client";
/** @jsxImportSource @emotion/react */

import { flexCenterX2 } from "@/app/styles/commonStyles/commonStyles";
import { fadeIn, showDown } from "@/app/styles/commonStyles/keyframes";
import { css } from "@emotion/react";
import { useCookies } from "react-cookie";

const WelcomeMessage = () => {
  const [cookies] = useCookies(["nickname"]);

  return (
    <div
      css={[
        flexCenterX2,
        css`
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 30px;
          background-color: rebeccapurple;
          animation: ${fadeIn} 1s forwards;
        `,
      ]}
    >
      <span
        css={[
          css`
            font-size: 3rem;
            font-weight: bold;
            animation: ${showDown} 0.5s 1.5s forwards;
          `,
        ]}
      >
        어서와요, {cookies.nickname}님
      </span>
    </div>
  );
};

export default WelcomeMessage;
