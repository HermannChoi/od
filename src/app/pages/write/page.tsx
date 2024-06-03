/* eslint-disable react-hooks/exhaustive-deps */
"use client";
/** @jsxImportSource @emotion/react */

import { useEffect } from "react";
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

const WritePage = () => {
  const router = useRouter();

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
        <div css={[flexColumnCenter, `width: 350px; gap: 20px;`]}>
          <h2>오늘의 다이어리</h2>
          <button onClick={handleClick} css={[signInUpStyles.button]}>
            작성하기
          </button>
        </div>
      </main>
    </>
  );
};

export default WritePage;
