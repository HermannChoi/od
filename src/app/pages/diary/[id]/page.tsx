"use client";
/** @jsxImportSource @emotion/react */

import Navbar from "@/app/components/commonComponents/Navbar";
import { homePageStyles } from "@/app/styles/homePageStyles/homePageStyles";
import {
  flexColumnCenter,
  mainStyle,
} from "@/app/styles/commonStyles/commonStyles";
import { writePageStyles } from "@/app/styles/writePageStyles/writePageStyles";
import { stars } from "@/app/constants/\bwriteConstants";
import { diaryStyles } from "@/app/styles/diaryStyles/diaryStyles";
import { useState } from "react";
import PostArticle from "@/app/components/postComponents/PostArticle";
import CommentWriteForm from "@/app/components/postComponents/CommentWriteForm";
import Comment from "@/app/components/postComponents/Comment";
import DiaryBottom from "@/app/components/diaryComponents/DiaryBottom";

const DiaryPage = () => {
  const [isHearted, setIsHearted] = useState(false);

  return (
    <>
      <Navbar />
      <main css={[flexColumnCenter]}>
        <div
          css={[
            mainStyle,
            flexColumnCenter,
            `row-gap: 10px; max-width: 700px;`,
          ]}
        >
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
            <PostArticle />
            <DiaryBottom />
          </section>
          <section css={homePageStyles.commonContentLayout}>
            <CommentWriteForm />
          </section>
          <section css={[homePageStyles.commonContentLayout]}>
            <Comment />
          </section>
        </div>
      </main>
    </>
  );
};

export default DiaryPage;
