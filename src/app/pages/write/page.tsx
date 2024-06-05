/* eslint-disable react-hooks/exhaustive-deps */
"use client";
/** @jsxImportSource @emotion/react */

import { useEffect, useState } from "react";
import useNavbarStore from "@/app/stores/navbarStore/useNavbarStore";
import { navbarMenu } from "@/app/constants/navbarMenu";
import Navbar from "@/app/components/commonComponents/Navbar";
import {
  flexColumnCenter,
  flexColumnCenterX2,
  mainStyle,
} from "@/app/styles/commonStyles/commonStyles";
import { signInUpStyles } from "@/app/styles/signInUpStyles/signInUpStyles";
import { useRouter } from "next/navigation";
import { writePageStyles } from "@/app/styles/writePageStyles/writePageStyles";

const WritePage = () => {
  const router = useRouter();

  const [isDiary, setIsDiary] = useState(false);
  const [content, setContent] = useState("");

  const { setWhichMenu } = useNavbarStore();

  const handleClick = () => {
    router.push("/pages/write/0");
  };

  useEffect(() => {
    setWhichMenu(navbarMenu[1].key);
  }, []);

  return (
    <>
      <Navbar />
      <main css={[mainStyle, flexColumnCenterX2]}>
        <div css={[flexColumnCenter, `width: 500px; gap: 5px;`]}>
          <button
            onClick={() => setIsDiary(!isDiary)}
            css={writePageStyles.postOrDiaryBtn}
          >
            {isDiary ? "게시글 작성하기" : "다이어리 작성하기"}
          </button>
          {isDiary ? (
            <>
              <h2>오늘의 다이어리</h2>
              <button onClick={handleClick} css={[signInUpStyles.button]}>
                작성하기
              </button>
            </>
          ) : (
            <>
              <h2>게시글 작성</h2>
              <textarea
                autoFocus
                value={content}
                onChange={(e) => setContent(e.target.value)}
                css={[
                  writePageStyles.askDiary.textarea,
                  `height: 125px; max-height: 300px;`,
                ]}
                maxLength={500}
              ></textarea>
              <p css={writePageStyles.askDiary.textLength}>
                {content.length}/500
              </p>
              <button css={[signInUpStyles.button, `margin-bottom: 40px;`]}>
                업로드
              </button>
            </>
          )}
        </div>
      </main>
    </>
  );
};

export default WritePage;
