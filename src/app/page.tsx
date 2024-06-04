/* eslint-disable react-hooks/exhaustive-deps */
"use client";
/** @jsxImportSource @emotion/react */

import {
  coverPageStyle,
  flexCenterX2,
} from "./styles/commonStyles/commonStyles";
import Navbar from "./components/commonComponents/Navbar";
import useNavbarStore from "./stores/navbarStore/useNavbarStore";
import { useEffect } from "react";
import { navbarMenu } from "./constants/navbarMenu";
import { homePageStyles } from "./styles/homePageStyles/homePageStyles";
import { css } from "@emotion/react";
import Link from "next/link";
import Image from "next/image";
import Chat from "@/app/assets/svg/chat.svg";
import Vote from "@/app/assets/svg/vote.svg";
import Heart from "@/app/assets/svg/heart.svg";
import Share from "@/app/assets/svg/share.svg";
import Visibility from "@/app/assets/svg/visibility.svg";

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
          <div
            css={[
              homePageStyles.commonContentLayout,
              `flex-direction: row; justify-content: space-between;`,
            ]}
          >
            <div>
              <p>환영합니다.</p>
              <p>
                <span css={homePageStyles.leftSection.userInfo.name}>
                  위대한홍길동
                </span>{" "}
                님
              </p>
              <p>example@email.com</p>
            </div>

            <div css={[flexCenterX2]}>
              <div css={homePageStyles.middleSection.posts.profile(50)}>F</div>
            </div>
          </div>
          <div
            css={[
              homePageStyles.commonContentLayout,
              `flex-direction: row; justify-content: space-between;`,
            ]}
          >
            <p css={[`font-weight: bold;`]}>MBTI :</p>
            <span css={homePageStyles.leftSection.userInfo.mbti}>INFJ</span>
          </div>
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
        </section>
        <section css={[homePageStyles.section, `flex: 2.5`]}>
          <Link href={"/"} css={homePageStyles.commonContentLayout}>
            <p>
              <span css={[`font-weight: bold;`]}>오늘의 투표 :</span> 애인이 내
              동성친구에게 새우 까주는거
            </p>
            <div css={homePageStyles.middleSection.vote.bar(20)}>
              가능 (20%)
            </div>
            <div css={homePageStyles.middleSection.vote.bar(80)}>
              불가능 (80%)
            </div>
            <div css={homePageStyles.middleSection.posts.bottom}>
              <div css={homePageStyles.middleSection.posts.bottomEach}>
                <Image src={Chat} alt="chat" />
                <span>1.2k</span>
              </div>
              <div css={homePageStyles.middleSection.posts.bottomEach}>
                <Image src={Vote} alt="vote" />
                <span>12.2k</span>
              </div>
              <div css={homePageStyles.middleSection.posts.bottomEach}>
                <Image src={Visibility} alt="view" />
                <span>23.2k</span>
              </div>
            </div>
          </Link>
          <Link href={"/"} css={homePageStyles.commonContentLayout}>
            <div css={homePageStyles.middleSection.posts.header}>
              <button css={homePageStyles.middleSection.posts.userLink}>
                <div css={homePageStyles.middleSection.posts.profile(35)}>
                  F
                </div>
                <span>Hermann</span>
              </button>
              <button css={homePageStyles.middleSection.posts.requestFriendBtn}>
                ﹢
              </button>
            </div>
            <article>
              그래, 내가 낮은 곳에 있겠다는 건 너를 위해 나를 온전히 비우겠다는
              뜻이다. 나의 존재마저 너에게 흠뻑 주고 싶다는 뜻이다. 잠겨 죽어도
              좋으니 너는 물처럼 내게 밀려오라.
            </article>
            <p css={homePageStyles.middleSection.posts.date}>
              2024.06.04 18:02
            </p>
            <div css={homePageStyles.middleSection.posts.bottom}>
              <div css={homePageStyles.middleSection.posts.bottomEach}>
                <Image src={Chat} alt="chat" />
                <span>1.2k</span>
              </div>
              <div css={homePageStyles.middleSection.posts.bottomEach}>
                <Image src={Heart} alt="chat" />
                <span>2.2k</span>
              </div>
              <div css={homePageStyles.middleSection.posts.bottomEach}>
                <Image src={Share} alt="chat" />
                <span>528</span>
              </div>
              <div css={homePageStyles.middleSection.posts.bottomEach}>
                <Image src={Visibility} alt="chat" />
                <span>23.2k</span>
              </div>
            </div>
          </Link>
        </section>
        <section css={[homePageStyles.section]}>
          <div css={homePageStyles.commonContentLayout}>
            <p css={[`font-weight: bold;`]}>상위 MBTI 분표율</p>
            <div css={homePageStyles.middleSection.vote.bar(28)}>
              ENTP (28%)
            </div>
            <div css={homePageStyles.middleSection.vote.bar(22)}>
              ISTP (22%)
            </div>
            <div css={homePageStyles.middleSection.vote.bar(15)}>
              ESTJ (15%)
            </div>
            <div css={homePageStyles.middleSection.vote.bar(8)}>INTP (8%)</div>
          </div>
          <div
            css={[
              homePageStyles.commonContentLayout,
              `flex-direction: row; justify-content: space-between;`,
            ]}
          >
            <p css={[`font-weight: bold;`]}>현 접속자 수 :</p>
            <p>1,293 명</p>
          </div>
          <div css={homePageStyles.commonContentLayout}>
            <strong>친구</strong>
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
        </section>
      </main>
    </>
  );
}
