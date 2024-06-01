/* eslint-disable react-hooks/exhaustive-deps */
"use client";
/** @jsxImportSource @emotion/react */

import { homePageStyles } from "@/app/styles/homePageStyles/homePageStyles";
import { useRouter } from "next/navigation";
import { navbarMenu } from "@/app/constants/navbarMenu";
import useNavbarStore from "@/app/stores/navbarStore/useNavbarStore";
import Title from "./Title";
import { useCookies } from "react-cookie";
import { useEffect, useState } from "react";

const Navbar = () => {
  const router = useRouter();
  const [cookies] = useCookies(["token"]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const { whichMenu, setWhichMenu } = useNavbarStore();

  useEffect(() => {
    if (cookies.token) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <nav css={homePageStyles.navbar.outline}>
      <Title />
      <section css={[`height: 100%;`]}>
        {navbarMenu.map((menu) => {
          return (
            <button
              key={menu.key}
              onClick={() => {
                router.push(`${menu.href}`);
                setWhichMenu(menu.key);
              }}
              css={homePageStyles.navbar.menuButton(menu.key, whichMenu)}
            >
              {menu.name}
            </button>
          );
        })}
      </section>
      <section css={homePageStyles.navbar.signInUpSection}>
        {isLoggedIn ? (
          <button css={homePageStyles.navbar.signInUpButton}>로그아웃</button>
        ) : (
          <>
            <button
              onClick={() => router.push("/pages/signIn")}
              css={homePageStyles.navbar.signInUpButton}
            >
              로그인
            </button>
            <button
              onClick={() => router.push("/pages/signUp")}
              css={homePageStyles.navbar.signInUpButton}
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
