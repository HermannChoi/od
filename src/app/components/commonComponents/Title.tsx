"use client";
/** @jsxImportSource @emotion/react */

import { homePageStyles } from "@/app/styles/homePageStyles/homePageStyles";
import Link from "next/link";

const Title = () => {
  return (
    <Link href={"/"} css={homePageStyles.navbar.title}>
      OD
    </Link>
  );
};

export default Title;
