"use client";
/** @jsxImportSource @emotion/react */

import { homePageStyles } from "@/app/styles/homePageStyles/homePageStyles";
import Link from "next/link";

const LinkTestMbti = () => {
  return (
    <div
      css={[
        homePageStyles.commonContentLayout,
        `flex-direction: row; justify-content: space-between; align-items: center;`,
      ]}
    >
      <p css={[`font-weight: bold;`]}>본인의 MBTI가 궁금하다면?</p>
      <Link
        target="_blank"
        rel="noopener noreferrer"
        href={
          "https://www.16personalities.com/ko/%EB%AC%B4%EB%A3%8C-%EC%84%B1%EA%B2%A9-%EC%9C%A0%ED%98%95-%EA%B2%80%EC%82%AC"
        }
        css={[`&:hover {text-decoration: underline;}`]}
      >
        검사하러 가기
      </Link>
    </div>
  );
};

export default LinkTestMbti;
