/* eslint-disable react-hooks/exhaustive-deps */
"use client";
/** @jsxImportSource @emotion/react */

import Navbar from "@/app/components/commonComponents/Navbar";
import FollowingList from "@/app/components/homePageComponents/FollowingList";
import TotalMbtiRate from "@/app/components/homePageComponents/TotalMbtiRate";
import UserInfo from "@/app/components/homePageComponents/UserInfo";
import UserMbti from "@/app/components/homePageComponents/UserMbti";
import PostBottom from "@/app/components/postComponents/PostBottom";
import PostTop from "@/app/components/postComponents/PostTop";
import { navbarMenu } from "@/app/constants/navbarMenu";
import useNavbarStore from "@/app/stores/navbarStore/useNavbarStore";
import { homePageStyles } from "@/app/styles/homePageStyles/homePageStyles";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect } from "react";

const PlazaDeatilPage = () => {
  const { slug } = useParams();

  const { setWhichMenu } = useNavbarStore();

  useEffect(() => {
    setWhichMenu(navbarMenu[3].key);
  }, []);

  return (
    <>
      <Navbar />
      <main css={[homePageStyles.main]}>
        <section css={[homePageStyles.section]}>
          <UserInfo />
          <UserMbti />
        </section>
        <section css={[homePageStyles.section, `flex: 2.5`]}>
          <div css={homePageStyles.commonContentLayout}>
            <h1>{slug} 들의 공간</h1>
          </div>
          <hr css={[`width: 100%;`]} />
          <Link href={"/pages/post/0"} css={homePageStyles.commonContentLayout}>
            <PostTop />
            <article>
              <p>This is a post on MBTI Plaza</p>
              <p css={homePageStyles.middleSection.posts.date}>
                2024.06.04 18:02
              </p>
            </article>
            <PostBottom />
          </Link>
        </section>
        <section css={[homePageStyles.section]}>
          <TotalMbtiRate />
          <FollowingList />
        </section>
      </main>
    </>
  );
};

export default PlazaDeatilPage;
