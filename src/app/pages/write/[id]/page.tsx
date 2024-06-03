/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import CongratsMessage from "@/app/components/commonComponents/CongratsMessage";
/** @jsxImportSource @emotion/react */

import NavbarForSignInUp from "@/app/components/signInUpComponents/NavbarForSignInUp";
import AskColor from "@/app/components/writeComponents/questions/AskColor";
import AskDiary from "@/app/components/writeComponents/questions/AskDiary";
import AskStars from "@/app/components/writeComponents/questions/AskStars";
import {
  flexColumnCenterX2,
  mainStyle,
} from "@/app/styles/commonStyles/commonStyles";
import { useParams } from "next/navigation";

const WriteDetailPage = () => {
  const { id } = useParams();
  return (
    <>
      {id === "3" && <CongratsMessage />}
      <NavbarForSignInUp />
      <main css={[mainStyle, flexColumnCenterX2]}>
        {id === "0" ? (
          <AskColor />
        ) : id === "1" ? (
          <AskDiary />
        ) : (
          id === "2" && <AskStars />
        )}
      </main>
    </>
  );
};

export default WriteDetailPage;
