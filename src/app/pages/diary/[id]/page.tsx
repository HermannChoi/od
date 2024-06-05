"use client";
/** @jsxImportSource @emotion/react */

import Navbar from "@/app/components/commonComponents/Navbar";
import { homePageStyles } from "@/app/styles/homePageStyles/homePageStyles";
import Image from "next/image";
import Chat from "@/app/assets/svg/chat.svg";
import View from "@/app/assets/svg/visibility.svg";
import {
  flexCenterX2,
  flexColumnCenter,
  flexColumnCenterX2,
  mainStyle,
} from "@/app/styles/commonStyles/commonStyles";
import { css } from "@emotion/react";
import { signInUpStyles } from "@/app/styles/signInUpStyles/signInUpStyles";
import { writePageStyles } from "@/app/styles/writePageStyles/writePageStyles";
import Link from "next/link";
import { stars } from "@/app/constants/\bwriteConstants";
import { diaryStyles } from "@/app/styles/diaryStyles/diaryStyles";
import Heart from "@/app/components/commonComponents/Heart";
import { useState } from "react";

const DiaryPage = () => {
  const [isHearted, setIsHearted] = useState(false);

  return (
    <>
      <Navbar />
      <main css={[flexColumnCenter]}>
        <div css={[mainStyle, flexColumnCenter, `row-gap: 10px; width: 50%;`]}>
          <section css={[homePageStyles.commonContentLayout]}>
            <div css={homePageStyles.middleSection.posts.header}>
              <button css={homePageStyles.middleSection.posts.userLink}>
                <div css={homePageStyles.middleSection.posts.profile(35)}>
                  T
                </div>
                <span>Hermann</span>
              </button>
              <div css={diaryStyles.starContainer}>
                {stars.map((_, i) => {
                  return (
                    <div
                      key={i}
                      css={writePageStyles.askStar.star(i, 3, 25)}
                    ></div>
                  );
                })}
              </div>
            </div>
            <article>
              하늘을 우러러 한 점 부끄럼 없이, 오늘도 나는 가나다라 마바사
              아자차카
            </article>
            <p css={homePageStyles.middleSection.posts.date}>
              2024.06.04 18:02
            </p>
            <div css={homePageStyles.middleSection.posts.bottom}>
              <div css={homePageStyles.middleSection.posts.bottomEach}>
                <Image src={Chat} alt="chat" />
                <span>1200</span>
              </div>
              <div css={homePageStyles.middleSection.posts.bottomEach}>
                <button
                  onClick={() => setIsHearted(!isHearted)}
                  css={diaryStyles.heartBtn}
                >
                  <Heart isHearted={isHearted} />
                </button>
                <span>2200</span>
              </div>
              <div css={homePageStyles.middleSection.posts.bottomEach}>
                <Image src={View} alt="view" />
                <span>23200</span>
              </div>
            </div>
          </section>
          <section css={homePageStyles.commonContentLayout}>
            <form css={[flexCenterX2, `gap: 10px;`]}>
              <div css={flexCenterX2}>
                <div css={homePageStyles.middleSection.posts.profile(35)}>
                  F
                </div>
              </div>
              <input
                placeholder="댓글 작성..."
                css={[writePageStyles.askDiary.textarea, `height: 20px;`]}
              />
              <button
                css={[
                  signInUpStyles.button,
                  `width: 70px; height: 40px; margin-top: 0px;`,
                ]}
              >
                작성
              </button>
            </form>
          </section>
          <section
            css={[diaryStyles.commentsContainer, `flex-direction: column;`]}
          >
            <div
              css={[
                diaryStyles.commentsContainer,
                flexCenterX2,
                `justify-content: space-around;`,
              ]}
            >
              <div>
                <Link
                  href={"/"}
                  css={homePageStyles.middleSection.posts.profile(35)}
                >
                  J
                </Link>
              </div>
              <div css={[`display: flex;flex-direction: column;`]}>
                <strong>Alex</strong>
                <p css={[css``]}>
                  asdfasdfasfsdf asdflj asfhfa sfjisaoidfjoasjdf asijf oasjf
                  doias fiasjf oiasjp
                </p>
              </div>
              <div css={[flexColumnCenterX2]}>
                <Heart isHearted={isHearted} />
                <p>20</p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default DiaryPage;
