"use client";
/** @jsxImportSource @emotion/react */

import { homePageStyles } from "@/app/styles/homePageStyles/homePageStyles";
import Title from "../commonComponents/Title";

const NavbarForSignInUp = () => {
  return (
    <div css={homePageStyles.navbar.outline}>
      <Title />
      <p>우리들만의 다이어리 공간</p>
    </div>
  );
};

export default NavbarForSignInUp;
