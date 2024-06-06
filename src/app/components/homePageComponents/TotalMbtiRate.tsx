"use client";
/** @jsxImportSource @emotion/react */

import { homePageStyles } from "@/app/styles/homePageStyles/homePageStyles";

const TotalMbtiRate = () => {
  return (
    <div css={homePageStyles.commonContentLayout}>
      <p css={[`font-weight: bold;`]}>상위 MBTI 분표율</p>
      <div css={homePageStyles.middleSection.vote.bar(28)}>ENTP (28%)</div>
      <div css={homePageStyles.middleSection.vote.bar(22)}>ISTP (22%)</div>
      <div css={homePageStyles.middleSection.vote.bar(15)}>ESTJ (15%)</div>
      <div css={homePageStyles.middleSection.vote.bar(8)}>INTP (8%)</div>
    </div>
  );
};

export default TotalMbtiRate;
