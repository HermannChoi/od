"use client";
/** @jsxImportSource @emotion/react */

import TotalMbtiRate from "../right/TotalMbtiRate";
import FollowingList from "../right/FollowingList";
import { homePageStyles } from "@/app/styles/homePageStyles/homePageStyles";
import { homePageRSectionSt } from "@/app/styles/homePageStyles/homePageRSectionSt";

const RightSection = () => {
  return (
    <section css={[homePageRSectionSt.container]}>
      <TotalMbtiRate />
      <div
        css={[
          homePageStyles.commonContentLayout,
          `flex-direction: row; justify-content: space-between;`,
        ]}
      >
        <p css={[`font-weight: bold;`]}>현 접속자 수 :</p>
        <p>1,293 명</p>
      </div>
      <FollowingList />
    </section>
  );
};

export default RightSection;
