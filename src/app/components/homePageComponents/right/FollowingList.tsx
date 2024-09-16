"use client";
/** @jsxImportSource @emotion/react */

import { homePageStyles } from "@/app/styles/homePageStyles/homePageStyles";
import Link from "next/link";

const FollowingList = () => {
  return (
    <div css={homePageStyles.commonContentLayout}>
      <strong>팔로잉</strong>
      <Link href={"/"} css={homePageStyles.middleSection.posts.userLink}>
        <div css={homePageStyles.middleSection.posts.profile(35)}>F</div>
        <span>위대한홍길동</span>
      </Link>
      <Link href={"/"} css={homePageStyles.middleSection.posts.userLink}>
        <div css={homePageStyles.middleSection.posts.profile(35)}>N</div>
        <span>세종대왕</span>
      </Link>
      <Link href={"/"} css={homePageStyles.middleSection.posts.userLink}>
        <div css={homePageStyles.middleSection.posts.profile(35)}>I</div>
        <span>대상혁</span>
      </Link>
      <Link href={"/"} css={homePageStyles.middleSection.posts.userLink}>
        <div css={homePageStyles.middleSection.posts.profile(35)}>T</div>
        <span>Hermann</span>
      </Link>
    </div>
  );
};

export default FollowingList;
