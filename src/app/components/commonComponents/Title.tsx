"use client";
/** @jsxImportSource @emotion/react */

import useNavbarStore from "@/app/stores/navbarStore/useNavbarStore";
import { homePageStyles } from "@/app/styles/homePageStyles/homePageStyles";
import { useRouter } from "next/navigation";

const Title = () => {
  const router = useRouter();

  const { setWhichMenu } = useNavbarStore();
  return (
    <h1
      onClick={() => {
        router.push("/");
        setWhichMenu("");
      }}
      css={homePageStyles.navbar.title}
    >
      OD
    </h1>
  );
};

export default Title;
