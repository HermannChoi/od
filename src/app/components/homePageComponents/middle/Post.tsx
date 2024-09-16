"use client";
/** @jsxImportSource @emotion/react */

import { homePageStyles } from "@/app/styles/homePageStyles/homePageStyles";
import Link from "next/link";
import React from "react";
import PostTop from "../../postComponents/PostTop";
import PostBottom from "../../postComponents/PostBottom";

const Post = () => {
  return (
    <Link href={"/pages/post/0"} css={homePageStyles.commonContentLayout}>
      <PostTop />
      <article>
        <p>
          그래, 내가 낮은 곳에 있겠다는 건 너를 위해 나를 온전히 비우겠다는
          뜻이다. 나의 존재마저 너에게 흠뻑 주고 싶다는 뜻이다. 잠겨 죽어도
          좋으니 너는 물처럼 내게 밀려오라.
        </p>
        <p css={homePageStyles.middleSection.posts.date}>2024.06.04 18:02</p>
      </article>
      <PostBottom />
    </Link>
  );
};

export default Post;
