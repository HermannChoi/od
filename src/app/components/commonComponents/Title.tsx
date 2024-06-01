"use client";
/** @jsxImportSource @emotion/react */

import { homePageStyles } from "@/app/styles/homePageStyles/homePageStyles";
import { useRouter } from "next/navigation";

const Title = () => {
  const router = useRouter();

  return (
    <h1
      onClick={() => {
        router.push("/");
      }}
      css={homePageStyles.navbar.title}
    >
      OD
    </h1>
  );
};

export default Title;
