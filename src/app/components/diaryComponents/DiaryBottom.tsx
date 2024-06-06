"use client";
/** @jsxImportSource @emotion/react */

import { diaryStyles } from "@/app/styles/diaryStyles/diaryStyles";
import { homePageStyles } from "@/app/styles/homePageStyles/homePageStyles";
import React from "react";
import Heart from "../commonComponents/Heart";
import Image from "next/image";
import View from "@/app/assets/svg/visibility.svg";

const DiaryBottom = () => {
  return (
    <div css={homePageStyles.middleSection.posts.bottom}>
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
    </div>
  );
};

export default DiaryBottom;
