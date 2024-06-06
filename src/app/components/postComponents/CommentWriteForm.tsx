"use client";
/** @jsxImportSource @emotion/react */

import { flexCenterX2 } from "@/app/styles/commonStyles/commonStyles";
import { homePageStyles } from "@/app/styles/homePageStyles/homePageStyles";
import { signInUpStyles } from "@/app/styles/signInUpStyles/signInUpStyles";
import { writePageStyles } from "@/app/styles/writePageStyles/writePageStyles";
import React from "react";

const CommentWriteForm = () => {
  return (
    <form css={[flexCenterX2, `gap: 10px;`]}>
      <div css={flexCenterX2}>
        <div css={homePageStyles.middleSection.posts.profile(35)}>F</div>
      </div>
      <input
        placeholder="댓글 작성..."
        css={[writePageStyles.askDiary.textarea, `height: 20px;`]}
      />
      <button
        css={[
          signInUpStyles.button,
          `width: 70px; height: 40px; margin-top: 0px;`,
        ]}
      >
        작성
      </button>
    </form>
  );
};

export default CommentWriteForm;
