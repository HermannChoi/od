"use client";
/** @jsxImportSource @emotion/react */

import { homePageStyles } from "@/app/styles/homePageStyles/homePageStyles";
import Vote from "../middle/Vote";
import Link from "next/link";
import PostTop from "../../postComponents/PostTop";
import PostBottom from "../../postComponents/PostBottom";
import Post from "../middle/Post";

const MiddleSection = () => {
  return (
    <section css={[homePageStyles.section, `flex: 2.5`]}>
      <Vote />
      <hr css={[`width: 100%;`]} />
      <Post />
    </section>
  );
};

export default MiddleSection;
