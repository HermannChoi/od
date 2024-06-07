/* eslint-disable react-hooks/exhaustive-deps */
"use client";
/** @jsxImportSource @emotion/react */

import Navbar from "@/app/components/commonComponents/Navbar";
import { iefn } from "@/app/constants/mbtiPlazeConstants";
import { navbarMenu } from "@/app/constants/navbarMenu";
import useNavbarStore from "@/app/stores/navbarStore/useNavbarStore";
import {
  flexColumnCenterX2,
  mainStyle,
} from "@/app/styles/commonStyles/commonStyles";
import { mbtiPlazaStyles } from "@/app/styles/mbtiPlazaStyles/mbtiPlazaStyles";
import { signInUpStyles } from "@/app/styles/signInUpStyles/signInUpStyles";
import Link from "next/link";
import { useEffect, useState } from "react";

const MbtiPlazePage = () => {
  const [degree, setDegree] = useState<number>(0);

  const { setWhichMenu } = useNavbarStore();

  useEffect(() => {
    setWhichMenu(navbarMenu[3].key);
  }, []);

  return (
    <>
      <Navbar />
      <main css={[mainStyle, flexColumnCenterX2]}>
        <section css={mbtiPlazaStyles.firstSection}>
          <button
            onClick={() => setDegree((prev) => (prev = prev + 90))}
            css={signInUpStyles.button}
          >
            ◀ 왼쪽
          </button>
          <button
            onClick={() => setDegree((prev) => prev - 90)}
            css={signInUpStyles.button}
          >
            오른쪽 ▶
          </button>
        </section>
        <section css={mbtiPlazaStyles.secondSection(degree)}>
          {iefn.map((mbti, i) => {
            return (
              <Link
                href={`/pages/mbtiPlaza/${mbti.title}`}
                key={mbti.title}
                css={mbtiPlazaStyles.button(i)}
              >
                <strong css={mbtiPlazaStyles.buttonStrong}>{mbti.title}</strong>
                <p css={mbtiPlazaStyles.buttonP}>{mbti.subtitle}</p>
              </Link>
            );
          })}
        </section>
      </main>
    </>
  );
};

export default MbtiPlazePage;
