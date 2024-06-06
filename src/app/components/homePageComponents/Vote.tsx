"use client";
/** @jsxImportSource @emotion/react */

import { homePageStyles } from "@/app/styles/homePageStyles/homePageStyles";
import Image from "next/image";
import Chat from "@/app/assets/svg/chat.svg";
import VoteImg from "@/app/assets/svg/vote.svg";
import Visibility from "@/app/assets/svg/visibility.svg";

import Link from "next/link";

const Vote = () => {
  return (
    <Link href={"/"} css={homePageStyles.commonContentLayout}>
      <p>
        <span css={[`font-weight: bold;`]}>오늘의 투표 :</span> 애인이 내
        동성친구에게 새우 까주는거
      </p>
      <div css={homePageStyles.middleSection.vote.bar(20)}>가능 (20%)</div>
      <div css={homePageStyles.middleSection.vote.bar(80)}>불가능 (80%)</div>
      <div css={homePageStyles.middleSection.posts.bottom}>
        <div css={homePageStyles.middleSection.posts.bottomEach}>
          <Image src={Chat} alt="chat" />
          <span>1.2k</span>
        </div>
        <div css={homePageStyles.middleSection.posts.bottomEach}>
          <Image src={VoteImg} alt="vote" />
          <span>12.2k</span>
        </div>
        <div css={homePageStyles.middleSection.posts.bottomEach}>
          <Image src={Visibility} alt="view" />
          <span>23.2k</span>
        </div>
      </div>
    </Link>
  );
};

export default Vote;
