"use client";
/** @jsxImportSource @emotion/react */

import { homePageStyles } from "@/app/styles/homePageStyles/homePageStyles";

const UserMbti = () => {
  return (
    <div
      css={[
        homePageStyles.commonContentLayout,
        `flex-direction: row; justify-content: space-between;`,
      ]}
    >
      <p css={[`font-weight: bold;`]}>MBTI :</p>
      <span css={homePageStyles.leftSection.userInfo.mbti}>INFJ</span>
    </div>
  );
};

export default UserMbti;
