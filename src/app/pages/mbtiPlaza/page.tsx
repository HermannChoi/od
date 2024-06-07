/* eslint-disable react-hooks/exhaustive-deps */
"use client";
/** @jsxImportSource @emotion/react */

import Navbar from "@/app/components/commonComponents/Navbar";
import { mbti } from "@/app/constants/mbtiPlazeConstants";
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
  const [degree, setDegree] = useState<number>(360);
  const [selectedMbti, setSelectedMbti] = useState("I");

  const { setWhichMenu } = useNavbarStore();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedMbti(e.target.value);
    if (e.target.value === "I") {
      return setDegree(360);
    }
    if (e.target.value === "E") {
      return setDegree(300);
    }
    if (e.target.value === "F") {
      return setDegree(240);
    }
    if (e.target.value === "N") {
      return setDegree(180);
    }
    if (e.target.value === "S") {
      return setDegree(120);
    }
    if (e.target.value === "P") {
      return setDegree(60);
    }
  };

  useEffect(() => {
    setWhichMenu(navbarMenu[3].key);
  }, []);

  useEffect(() => {
    console.log(degree);
    if (degree === 0) {
      return setDegree(360);
    }
    if (degree === 420) {
      return setDegree(60);
    }
    if (degree === 360) {
      return setSelectedMbti("I");
    }
    if (degree === 300) {
      return setSelectedMbti("E");
    }
    if (degree === 240) {
      return setSelectedMbti("F");
    }
    if (degree === 180) {
      return setSelectedMbti("N");
    }
    if (degree === 120) {
      return setSelectedMbti("S");
    }
    if (degree === 60) {
      return setSelectedMbti("P");
    }
  }, [degree]);

  return (
    <>
      <Navbar />
      <main css={[mainStyle, flexColumnCenterX2]}>
        <section css={mbtiPlazaStyles.firstSection}>
          <button
            onClick={() =>
              setDegree((prev) => (prev = prev + 360 / mbti.length))
            }
            css={signInUpStyles.button}
          >
            ◀ 왼쪽
          </button>
          <select
            onChange={(e) => handleChange(e)}
            value={selectedMbti}
            css={mbtiPlazaStyles.select}
          >
            {mbti.map((mbti, i) => {
              return (
                <option key={i} value={mbti.title}>
                  {mbti.title}
                </option>
              );
            })}
          </select>
          <button
            onClick={() =>
              setDegree((prev) => (prev = prev - 360 / mbti.length))
            }
            css={signInUpStyles.button}
          >
            오른쪽 ▶
          </button>
        </section>
        <section css={mbtiPlazaStyles.secondSection(degree)}>
          {mbti.map((mbti, i) => {
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
