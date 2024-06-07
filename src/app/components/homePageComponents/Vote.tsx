"use client";
/** @jsxImportSource @emotion/react */

import { homePageStyles } from "@/app/styles/homePageStyles/homePageStyles";
import Image from "next/image";
import Chat from "@/app/assets/svg/chat.svg";
import VoteImg from "@/app/assets/svg/vote.svg";
import Visibility from "@/app/assets/svg/visibility.svg";
import Link from "next/link";
import { useState } from "react";

const Vote = () => {
  interface Options {
    firstOption: number;
    secondOption: number;
  }
  const [options, setOptions] = useState<Options>({
    firstOption: 0,
    secondOption: 0,
  });

  const handleVote = (option: keyof Options) => {
    setOptions((prev) => ({
      ...prev,
      [option]: prev[option] + 1,
    }));
  };

  const totalVotes = options.firstOption + options.secondOption;
  const firstOptionPercent = ((options.firstOption / totalVotes) * 100).toFixed(
    1
  );
  const secondOptionPercent = (
    (options.secondOption / totalVotes) *
    100
  ).toFixed(1);

  return (
    <Link href={"/"} css={homePageStyles.commonContentLayout}>
      <p>
        <span css={[`font-weight: bold;`]}>오늘의 투표 :</span> 애인이 내
        동성친구에게 새우 까주는거
      </p>
      <button
        onClick={() => handleVote("firstOption")}
        css={homePageStyles.middleSection.vote.bar(Number(firstOptionPercent))}
      >
        가능{totalVotes !== 0 && `(${firstOptionPercent}% )`}
      </button>
      <button
        onClick={() => handleVote("secondOption")}
        css={homePageStyles.middleSection.vote.bar(Number(secondOptionPercent))}
      >
        불가능 {totalVotes !== 0 && `(${secondOptionPercent}% )`}
      </button>
      <div css={homePageStyles.middleSection.posts.bottom}>
        <div css={homePageStyles.middleSection.posts.bottomEach}>
          <Image src={Chat} alt="chat" />
          <span>1.2k</span>
        </div>
        <div css={homePageStyles.middleSection.posts.bottomEach}>
          <Image src={VoteImg} alt="vote" />
          <span>{totalVotes}</span>
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
