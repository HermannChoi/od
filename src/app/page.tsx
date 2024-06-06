/* eslint-disable react-hooks/exhaustive-deps */
"use client";
/** @jsxImportSource @emotion/react */

import { coverPageStyle } from "./styles/commonStyles/commonStyles";
import Navbar from "./components/commonComponents/Navbar";
import useNavbarStore from "./stores/navbarStore/useNavbarStore";
import { useEffect } from "react";
import { navbarMenu } from "./constants/navbarMenu";
import { homePageStyles } from "./styles/homePageStyles/homePageStyles";
import Link from "next/link";
import PostBottom from "./components/postComponents/PostBottom";
import PostTop from "./components/postComponents/PostTop";
import UserInfo from "./components/homePageComponents/UserInfo";
import UserMbti from "./components/homePageComponents/UserMbti";
import LinkTestMbti from "./components/homePageComponents/LinkTestMbti";
import TotalMbtiRate from "./components/homePageComponents/TotalMbtiRate";
import FollowingList from "./components/homePageComponents/FollowingList";
import Vote from "./components/homePageComponents/Vote";

export default function Home() {
  const { setWhichMenu } = useNavbarStore();

  useEffect(() => {
    setWhichMenu(navbarMenu[0].key);
  }, []);

  return (
    <>
      <div css={coverPageStyle} />
      <Navbar />
      <main css={[homePageStyles.main]}>
        <section css={[homePageStyles.section]}>
          <UserInfo />
          <UserMbti />
          <LinkTestMbti />
        </section>
        <section css={[homePageStyles.section, `flex: 2.5`]}>
          <Vote />
          <hr css={[`width: 100%;`]} />
          <Link href={"/pages/post/0"} css={homePageStyles.commonContentLayout}>
            <PostTop />
            <article>
              <p>
                그래, 내가 낮은 곳에 있겠다는 건 너를 위해 나를 온전히
                비우겠다는 뜻이다. 나의 존재마저 너에게 흠뻑 주고 싶다는 뜻이다.
                잠겨 죽어도 좋으니 너는 물처럼 내게 밀려오라.
              </p>
              <p css={homePageStyles.middleSection.posts.date}>
                2024.06.04 18:02
              </p>
            </article>
            <PostBottom />
          </Link>
        </section>
        <section css={[homePageStyles.section]}>
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
      </main>
    </>
  );
}
