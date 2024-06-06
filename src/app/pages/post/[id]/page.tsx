"use client";
/** @jsxImportSource @emotion/react */

import Navbar from "@/app/components/commonComponents/Navbar";
import { homePageStyles } from "@/app/styles/homePageStyles/homePageStyles";
import {
  flexColumnCenter,
  mainStyle,
} from "@/app/styles/commonStyles/commonStyles";
import PostBottom from "@/app/components/postComponents/PostBottom";
import PostTop from "@/app/components/postComponents/PostTop";
import Comment from "@/app/components/postComponents/Comment";
import CommentWriteForm from "@/app/components/postComponents/CommentWriteForm";
import PostArticle from "@/app/components/postComponents/PostArticle";

const PostPage = () => {
  return (
    <>
      <Navbar />
      <main css={[flexColumnCenter]}>
        <div css={[mainStyle, flexColumnCenter, `row-gap: 10px; width: 50%;`]}>
          <section css={[homePageStyles.commonContentLayout]}>
            <PostTop />
            <PostArticle />
            <PostBottom />
          </section>
          <section css={homePageStyles.commonContentLayout}>
            <CommentWriteForm />
          </section>
          <section
            css={[
              homePageStyles.commonContentLayout,
              `flex-direction: column;`,
            ]}
          >
            <Comment />
          </section>
        </div>
      </main>
    </>
  );
};

export default PostPage;
