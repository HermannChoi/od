"use client";
import { navbarStyles } from "@/app/styles/commonStyles/navbarStyles";
/** @jsxImportSource @emotion/react */

import Link from "next/link";

const Title = () => {
  return (
    <Link href={"/"} css={navbarStyles.title}>
      OD
    </Link>
  );
};

export default Title;
