"use client";

import { homePageStyles } from "@/app/styles/homePageStyles/homePageStyles";
import Title from "../commonComponents/Title";

/** @jsxImportSource @emotion/react */

const NavbarForSignInUp = () => {
  return (
    <div css={homePageStyles.navbar.outline}>
      <Title />
    </div>
  );
};

export default NavbarForSignInUp;
