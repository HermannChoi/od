/* eslint-disable react-hooks/exhaustive-deps */
"use client";
/** @jsxImportSource @emotion/react */

import { useRouter } from "next/navigation";
import { navbarMenu } from "@/app/constants/navbarMenu";
import useNavbarStore from "@/app/stores/navbarStore/useNavbarStore";
import Title from "../mySpaceComponents/Title";
import { useCookies } from "react-cookie";
import { useEffect, useState } from "react";
import { navbarStyles } from "@/app/styles/commonStyles/navbarStyles";

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
    <nav css={navbarStyles.outline}>
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
              css={navbarStyles.menuButton(menu.key, whichMenu)}
            >
              {menu.name}
            </button>
          );
        })}
      </section>
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
