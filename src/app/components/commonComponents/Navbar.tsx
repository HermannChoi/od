"use client";
/** @jsxImportSource @emotion/react */

import { homePageStyles } from "@/app/styles/homePageStyles/homePageStyles";
import { css } from "@emotion/react";
import { useRouter } from "next/navigation";
import { navbarMenu } from "@/app/constants/navbarMenu";
import useNavbarStore from "@/app/stores/navbarStore/useNavbarStore";
import Title from "./Title";

const Navbar = () => {
  const router = useRouter();

  const { whichMenu, setWhichMenu } = useNavbarStore();

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
      <section
        css={[
          css`
            display: flex;
            gap: 10px;
          `,
        ]}
      >
        <button
          onClick={() => router.push("/pages/signIn")}
          css={homePageStyles.navbar.signoutButton}
        >
          로그인
        </button>
        <button css={homePageStyles.navbar.signoutButton}>회원가입</button>
      </section>
    </nav>
  );
};

export default Navbar;
