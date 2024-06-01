"use client";
/** @jsxImportSource @emotion/react */

import { layoutStyle } from "@/app/styles/commonStyles";
import { useEffect } from "react";
import Navbar from "@/app/components/homePageComponents/Navbar";
import useNavbarStore from "@/app/stores/navbarStore/useNavbarStore";
import { navbarMenu } from "@/app/constants/navbarMenu";
const MySpace = () => {
  const { setWhichMenu } = useNavbarStore();

  useEffect(() => {
    setWhichMenu(navbarMenu[1].key);
  }, []);
  return (
    <div css={layoutStyle}>
      <Navbar />
    </div>
  );
};

export default MySpace;
