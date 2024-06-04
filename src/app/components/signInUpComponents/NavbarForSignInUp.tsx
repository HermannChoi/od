"use client";
/** @jsxImportSource @emotion/react */

import Title from "../mySpaceComponents/Title";
import { navbarStyles } from "@/app/styles/commonStyles/navbarStyles";

const NavbarForSignInUp = () => {
  return (
    <div css={navbarStyles.outline}>
      <Title />
      <p>우리들만의 다이어리 공간</p>
    </div>
  );
};

export default NavbarForSignInUp;
