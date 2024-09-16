"use client";
/** @jsxImportSource @emotion/react */

import { navbarMenu } from "@/app/constants/navbarMenu";
import useNavbarStore from "@/app/stores/navbarStore/useNavbarStore";
import { navbarStyles } from "@/app/styles/commonStyles/navbarStyles";
import { useRouter } from "next/navigation";

const NavbarMain = () => {
  const router = useRouter();

  const { whichMenu, setWhichMenu } = useNavbarStore();

  return (
    <section css={navbarStyles.navbarMainContainer}>
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
  );
};

export default NavbarMain;
