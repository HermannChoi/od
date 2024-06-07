"use client";
/** @jsxImportSource @emotion/react */

import Navbar from "@/app/components/commonComponents/Navbar";
import { mainStyle } from "@/app/styles/commonStyles/commonStyles";
import { useParams } from "next/navigation";

const PlazaDeatilPage = () => {
  const { slug } = useParams();
  return (
    <>
      <Navbar />
      <main css={mainStyle}>
        <h1>{slug}의 공간</h1>
      </main>
    </>
  );
};

export default PlazaDeatilPage;
