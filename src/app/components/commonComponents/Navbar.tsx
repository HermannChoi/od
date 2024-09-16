/* eslint-disable react-hooks/exhaustive-deps */
"use client";
/** @jsxImportSource @emotion/react */

import { useRouter } from "next/navigation";
import Title from "../mySpaceComponents/Title";
import { useCookies } from "react-cookie";
import { useEffect, useState } from "react";
import { navbarStyles } from "@/app/styles/commonStyles/navbarStyles";
import NavbarMain from "./NavbarMain";

const Navbar = () => {
  const router = useRouter();

  const [cookies] = useCookies(["token"]);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (cookies.token) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <nav css={navbarStyles.outline}>
      <Title />
      <NavbarMain />
      <section css={navbarStyles.signInUpSection}>
        {isLoggedIn ? (
          <button css={navbarStyles.signInUpButton}>로그아웃</button>
        ) : (
          <>
            <button
              onClick={() => router.push("/pages/signIn")}
              css={navbarStyles.signInUpButton}
            >
              로그인
            </button>
            <button
              onClick={() => router.push("/pages/signUp")}
              css={[navbarStyles.signInUpButton, navbarStyles.SignUpBtnHover]}
            >
              회원가입
            </button>
          </>
        )}
      </section>
    </nav>
  );
};

export default Navbar;
