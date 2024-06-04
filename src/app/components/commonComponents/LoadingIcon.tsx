"use client";
/** @jsxImportSource @emotion/react */

import { spin } from "@/app/styles/commonStyles/keyframes";
import { css } from "@emotion/react";

const LoadingIcon = () => {
  return (
    <div
      css={[
        css`
          animation: ${spin} 1s linear infinite;
          border: 5px solid #ddd;
          border-bottom: 5px solid #7eb1d3;
          border-radius: 50%;
          width: 30px;
          height: 30px;
        `,
      ]}
    ></div>
  );
};

export default LoadingIcon;
