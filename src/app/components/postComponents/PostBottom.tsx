"use client";
/** @jsxImportSource @emotion/react */

import { homePageStyles } from "@/app/styles/homePageStyles/homePageStyles";
import React from "react";
import Heart from "../commonComponents/Heart";
import Image from "next/image";
import Chat from "@/app/assets/svg/chat.svg";
import View from "@/app/assets/svg/visibility.svg";
import Share from "@/app/assets/svg/share.svg";
import { diaryStyles } from "@/app/styles/diaryStyles/diaryStyles";

const PostBottom = () => {
  return (
    <div css={homePageStyles.middleSection.posts.bottom}>
      <div css={homePageStyles.middleSection.posts.bottomEach}>
        <Image src={Chat} alt="chat" />
        <span>1200</span>
      </div>
      <div css={homePageStyles.middleSection.posts.bottomEach}>
        <button
          // onClick={() => setIsHearted(!isHearted)}
          css={diaryStyles.heartBtn}
        >
          <Heart isHearted={true} />
        </button>
        <span>2200</span>
      </div>
      <div css={homePageStyles.middleSection.posts.bottomEach}>
        <Image src={View} alt="view" />
        <span>23200</span>
      </div>
      <div css={homePageStyles.middleSection.posts.bottomEach}>
        <button css={diaryStyles.heartBtn}>
          <Image src={Share} alt="share" />
        </button>
        <span>528</span>
      </div>
    </div>
  );
};

export default PostBottom;
