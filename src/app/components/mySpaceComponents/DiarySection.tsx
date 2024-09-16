"use client";
/** @jsxImportSource @emotion/react */

import { stars } from "@/app/constants/\bwriteConstants";
import useMySpaceStore from "@/app/stores/mySpaceStore/useMySpaceStore";
import { mySpaceStyles } from "@/app/styles/mySpaceStyles/mySpaceStyles";
import { writePageStyles } from "@/app/styles/writePageStyles/writePageStyles";
import Image from "next/image";
import Delete from "@/app/assets/svg/delete.svg";
import Link from "next/link";
import { SyntheticEvent, useState } from "react";

const DiarySection = () => {
  const [isDeleteBtnClicked, setIsDeleteBtnClicked] = useState(false);

  const { isGrid, setIsGrid } = useMySpaceStore();

  const handleDelete = (e: SyntheticEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDeleteBtnClicked(true);
  };

  const sample = {
    date: "2024.06.04",
    color: "#7eb1d3",
    content:
      "하늘을 우러러 한 점 부끄럼 없이, 오늘도 나는 가나다라 마바사 아자차카",
    star: 3,
  };

  return (
    <section>
      <Link
        href={"/pages/diary/0"}
        css={
          isGrid
            ? mySpaceStyles.eachDiaryGrid.layout(sample)
            : mySpaceStyles.eachDiaryLine.layout(sample)
        }
      >
        <p css={mySpaceStyles.eachDiaryGrid.date(isGrid)}>{sample.date}</p>
        <p css={mySpaceStyles.eachDiaryGrid.content(isGrid)}>
          {sample.content.length <= 37
            ? sample.content
            : sample.content.slice(0, 37) + "..."}
        </p>
        {isGrid && <hr />}
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
  );
};

export default DiarySection;
