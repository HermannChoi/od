/* eslint-disable react-hooks/exhaustive-deps */
"use client";
/** @jsxImportSource @emotion/react */

import Navbar from "./components/commonComponents/Navbar";
import useNavbarStore from "./stores/navbarStore/useNavbarStore";
import { useEffect } from "react";
import { navbarMenu } from "./constants/navbarMenu";
import { homePageStyles } from "./styles/homePageStyles/homePageStyles";
import RightSection from "./components/homePageComponents/sections/RightSection";
import LeftSection from "./components/homePageComponents/sections/LeftSection";
import MiddleSection from "./components/homePageComponents/sections/MiddleSection";

export default function Home() {
  const { setWhichMenu } = useNavbarStore();

  useEffect(() => {
    setWhichMenu(navbarMenu[0].key);
  }, []);

  return (
    <>
      <Navbar />
      <main css={[homePageStyles.main]}>
        <LeftSection />
        <MiddleSection />
        <RightSection />
      </main>
    </>
  );
}
