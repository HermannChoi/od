/* eslint-disable react-hooks/exhaustive-deps */
"use client";
/** @jsxImportSource @emotion/react */

import { SyntheticEvent, useEffect, useState } from "react";
import useNavbarStore from "@/app/stores/navbarStore/useNavbarStore";
import { navbarMenu } from "@/app/constants/navbarMenu";
import Navbar from "@/app/components/commonComponents/Navbar";
import { mySpaceStyles } from "@/app/styles/mySpaceStyles/mySpaceStyles";
import { writePageStyles } from "@/app/styles/writePageStyles/writePageStyles";
import { stars } from "@/app/constants/\bwriteConstants";
import Link from "next/link";
import { flexCenterX2 } from "@/app/styles/commonStyles/commonStyles";
import Image from "next/image";
import grid_view from "@/app/assets/svg/grid_view.svg";
import line_view from "@/app/assets/svg/line_view.svg";
import Delete from "@/app/assets/svg/delete.svg";
import { orderOptions } from "@/app/constants/mySpaceConstants";
import DeleteModal from "@/app/components/mySpaceComponents/DeleteModal";

const MySpace = () => {
  const [isGrid, setIsGrid] = useState(true);
  const [isDeleteBtnClicked, setIsDeleteBtnClicked] = useState(false);

  const { setWhichMenu } = useNavbarStore();

  const handleDelete = (e: SyntheticEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDeleteBtnClicked(true);
  };

  useEffect(() => {
    setWhichMenu(navbarMenu[2].key);
  }, []);

  const sample = {
    date: "2024.06.04",
    color: "#7eb1d3",
    content:
      "하늘을 우러러 한 점 부끄럼 없이, 오늘도 나는 가나다라 마바사 아자차카",
    star: 3,
  };

  return (
    <>
      <Navbar />
      {isDeleteBtnClicked && (
        <DeleteModal setIsDeleteBtnClicked={setIsDeleteBtnClicked} />
      )}
      <main css={[mySpaceStyles.MSmainStyle]}>
        <section css={mySpaceStyles.topSection}>
          <p>
            <span css={mySpaceStyles.userNameSpan}>최윤석</span>님의 공간
          </p>
          <div css={[flexCenterX2, `gap: 10px;`]}>
            <select css={mySpaceStyles.select}>
              {orderOptions.map((option, i) => {
                return (
                  <option key={i} value={option}>
                    {option}
                  </option>
                );
              })}
            </select>
            <button
              onClick={() => setIsGrid(!isGrid)}
              css={mySpaceStyles.viewButton}
            >
              <Image src={isGrid ? grid_view : line_view} alt="view" />
            </button>
          </div>
        </section>
        <hr />
        <section css={mySpaceStyles.infoSection}>
          <p css={mySpaceStyles.eachDiaryGrid.content}>작성된 다이어리 : 1개</p>
          <p css={mySpaceStyles.eachDiaryGrid.content}>평균 글자 수 : 37자</p>
          <p css={mySpaceStyles.eachDiaryGrid.content}>평균 평점 : 5점</p>
        </section>
        <section>
          <Link
            href={"/pages/diary/0"}
            css={
              isGrid
                ? mySpaceStyles.eachDiaryGrid.layout(sample)
                : mySpaceStyles.eachDiaryLine.layout(sample)
            }
          >
            <p>{sample.date}</p>
            <p css={mySpaceStyles.eachDiaryGrid.content}>
              {sample.content.length <= 37
                ? sample.content
                : sample.content.slice(0, 37) + "..."}
            </p>
            <hr />
            <div
              css={[
                writePageStyles.questions.contentSection,
                !isGrid && mySpaceStyles.eachDiaryLine.starSection,
              ]}
            >
              {stars.map((_, i) => {
                return (
                  <div
                    key={i}
                    css={writePageStyles.askStar.star(i, sample.star, 25)}
                  ></div>
                );
              })}
            </div>
            <button
              onClick={(e) => handleDelete(e)}
              css={[
                mySpaceStyles.eachDiaryGrid.deleteBtn,
                !isGrid && `position: static;`,
              ]}
            >
              <Image src={Delete} alt="delete" />
            </button>
          </Link>
        </section>
      </main>
    </>
  );
};

export default MySpace;
