"use client";
/** @jsxImportSource @emotion/react */

import { layoutStyle } from "@/app/styles/commonStyles";
import { useEffect } from "react";
import Navbar from "@/app/components/homePageComponents/Navbar";
import useNavbarStore from "@/app/stores/navbarStore/useNavbarStore";
import { navbarMenu } from "@/app/constants/navbarMenu";

const WritePage = () => {
  const { setWhichMenu } = useNavbarStore();

  useEffect(() => {
    setWhichMenu(navbarMenu[0].key);
  }, []);
  return (
    <div css={layoutStyle}>
      <Navbar />
    </div>
  );
};

export default WritePage;
