/* eslint-disable react-hooks/exhaustive-deps */
"use client";
/** @jsxImportSource @emotion/react */

import { useEffect } from "react";
import useNavbarStore from "@/app/stores/navbarStore/useNavbarStore";
import { navbarMenu } from "@/app/constants/navbarMenu";
import Navbar from "@/app/components/commonComponents/Navbar";
import { mainStyle } from "@/app/styles/commonStyles/commonStyles";

const MySpace = () => {
  const { setWhichMenu } = useNavbarStore();

  useEffect(() => {
    setWhichMenu(navbarMenu[2].key);
  }, []);

  return (
    <>
      <Navbar />
      <main css={[mainStyle]}></main>
    </>
  );
};

export default MySpace;
