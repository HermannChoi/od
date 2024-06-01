/* eslint-disable react-hooks/exhaustive-deps */
"use client";
/** @jsxImportSource @emotion/react */

import { useEffect } from "react";
import useNavbarStore from "@/app/stores/navbarStore/useNavbarStore";
import { navbarMenu } from "@/app/constants/navbarMenu";
import Navbar from "@/app/components/commonComponents/Navbar";
import { layoutStyle } from "@/app/styles/commonStyles/commonStyles";
const MySpace = () => {
  const { setWhichMenu } = useNavbarStore();

  useEffect(() => {
    setWhichMenu(navbarMenu[2].key);
  }, []);

  return (
    <div css={layoutStyle}>
      <Navbar />
    </div>
  );
};

export default MySpace;
