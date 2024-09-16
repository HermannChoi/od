"use client";
/** @jsxImportSource @emotion/react */

import UserInfo from "../left/UserInfo";
import UserMbti from "../left/UserMbti";
import LinkTestMbti from "../left/LinkTestMbti";
import { homePageLSectionSt } from "@/app/styles/homePageStyles/homePageLSectionSt";

const LeftSection = () => {
  return (
    <section css={[homePageLSectionSt.container]}>
      <UserInfo />
      <UserMbti />
      <LinkTestMbti />
    </section>
  );
};

export default LeftSection;
