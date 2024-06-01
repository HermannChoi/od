"use client";
/** @jsxImportSource @emotion/react */

import { homePageStyles } from "@/app/styles/homePageStyles/homePageStyles";
import { css } from "@emotion/react";
import { useRouter } from "next/navigation";
import { navbarMenu } from "@/app/constants/navbarMenu";
import useNavbarStore from "@/app/stores/navbarStore/useNavbarStore";

const Navbar = () => {
  const router = useRouter();

  const { whichMenu, setWhichMenu } = useNavbarStore();

  return (
    <nav
      css={[
        css`
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          height: 60px;
          padding: 0px 20px;
          border-bottom: 0.5px solid #ffffff66;
        `,
      ]}
    >
      <h1
        onClick={() => {
          router.push("/");
          setWhichMenu("");
        }}
        css={[
          css`
            font-size: 1rem;
            cursor: pointer;
            transition: 0.2s;
            &:hover {
              text-shadow: 0 0 10px black;
            }
          `,
        ]}
      >
        JunsuYunseok TP
      </h1>
      <section
        css={[
          css`
            height: 100%;
          `,
        ]}
      >
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
        <button css={homePageStyles.navbar.signoutButton}>로그인</button>
        <button css={homePageStyles.navbar.signoutButton}>회원가입</button>
      </section>
    </nav>
  );
};

export default Navbar;
