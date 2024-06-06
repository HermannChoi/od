"use client";
/** @jsxImportSource @emotion/react */

import { homePageStyles } from "@/app/styles/homePageStyles/homePageStyles";

const PostTop = () => {
  return (
    <div css={homePageStyles.middleSection.posts.header}>
      <button css={homePageStyles.middleSection.posts.userLink}>
        <div css={homePageStyles.middleSection.posts.profile(35)}>F</div>
        <span>Hermann</span>
      </button>
      <button css={homePageStyles.middleSection.posts.followingBtn}>﹢</button>
    </div>
  );
};

export default PostTop;
