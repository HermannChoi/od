/* eslint-disable react-hooks/exhaustive-deps */
"use client";
/** @jsxImportSource @emotion/react */

import { useEffect, useState } from "react";
import useNavbarStore from "@/app/stores/navbarStore/useNavbarStore";
import { navbarMenu } from "@/app/constants/navbarMenu";
import Navbar from "@/app/components/commonComponents/Navbar";
import { mySpaceStyles } from "@/app/styles/mySpaceStyles/mySpaceStyles";
import { flexCenterX2 } from "@/app/styles/commonStyles/commonStyles";
import Image from "next/image";
import grid_view from "@/app/assets/svg/grid_view.svg";
import line_view from "@/app/assets/svg/line_view.svg";
import DeleteModal from "@/app/components/mySpaceComponents/DeleteModal";
import useMySpaceStore from "@/app/stores/mySpaceStore/useMySpaceStore";
import DiarySection from "@/app/components/mySpaceComponents/DiarySection";
import { filterOptions } from "@/app/constants/mySpaceConstants";

const MySpace = () => {
  const [isDeleteBtnClicked, setIsDeleteBtnClicked] = useState(false);

  const { setWhichMenu } = useNavbarStore();
  const { isGrid, setIsGrid, filter, setFilter } = useMySpaceStore();

  useEffect(() => {
    setWhichMenu(navbarMenu[2].key);
  }, []);

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
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              css={mySpaceStyles.select}
            >
              {filterOptions.map((option, i) => {
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
        {filter === "다이어리" ? <DiarySection /> : <></>}
      </main>
    </>
  );
};

export default MySpace;
