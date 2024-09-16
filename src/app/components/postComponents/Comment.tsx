"use client";
/** @jsxImportSource @emotion/react */

import {
  flexCenterX2,
  flexColumnCenterX2,
} from "@/app/styles/commonStyles/commonStyles";
import { diaryStyles } from "@/app/styles/diaryStyles/diaryStyles";
import { homePageStyles } from "@/app/styles/homePageStyles/homePageStyles";
import { css } from "@emotion/react";
import Link from "next/link";
import React from "react";
import Heart from "../commonComponents/Heart";

const Comment = () => {
  return (
    <div
      css={[
        css`
          display: flex;
          gap: 10px;
          width: 100%;
        `,
      ]}
    >
      <div>
        <Link href={"/"} css={homePageStyles.middleSection.posts.profile(35)}>
          J
        </Link>
      </div>
      <div css={[`display: flex; flex-direction: column;`]}>
        <strong>Alex</strong>
        <p css={[css``]}>
          Impressive. I like this part of the poem too. Can you let me know the
          name of the writer pls?
        </p>
        <button css={diaryStyles.comment.replyBtn}>답글달기</button>
      </div>
      <div css={[flexColumnCenterX2]}>
        <button css={diaryStyles.heartBtn}>
          <Heart isHearted={true} />
        </button>
        <p>20</p>
      </div>
    </div>
  );
};

export default Comment;
