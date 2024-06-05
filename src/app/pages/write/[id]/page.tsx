/* eslint-disable react-hooks/exhaustive-deps */
"use client";
/** @jsxImportSource @emotion/react */

import NavbarForSignInUp from "@/app/components/signInUpComponents/NavbarForSignInUp";
import AskColor from "@/app/components/writeComponents/questions/AskColor";
import AskContent from "@/app/components/writeComponents/questions/AskContent";
import AskStars from "@/app/components/writeComponents/questions/AskStars";
import {
  flexColumnCenterX2,
  mainStyle,
} from "@/app/styles/commonStyles/commonStyles";
import { useParams } from "next/navigation";
import CongratsMessage from "@/app/components/commonComponents/CongratsMessage";

const WriteDetailPage = () => {
  const { id } = useParams();
  return (
    <>
      {id === "3" && <CongratsMessage message={"오늘도 수고하셨어요."} />}
      <NavbarForSignInUp />
      <main css={[mainStyle, flexColumnCenterX2]}>
        {id === "0" ? (
          <AskColor />
        ) : id === "1" ? (
          <AskContent />
        ) : (
          id === "2" && <AskStars />
        )}
      </main>
    </>
  );
};

export default WriteDetailPage;
