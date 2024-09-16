"use client";
/** @jsxImportSource @emotion/react */

import NavbarForSignInUp from "@/app/components/signInUpComponents/NavbarForSignInUp";
import {
  flexCenterX2,
  flexColumnCenter,
  mainStyle,
} from "@/app/styles/commonStyles/commonStyles";
import { signInUpStyles } from "@/app/styles/signInUpStyles/signInUpStyles";
import Link from "next/link";
import Image from "next/image";
import visibility from "@/app/assets/svg/visibility.svg";
import visibility_off from "@/app/assets/svg/visibility_off.svg";
import { SyntheticEvent, useState } from "react";

const SignUpPage = () => {
  const [isPwVisible, setIsPwVisible] = useState(false);
  const [signUpInfo, setSignUpInfo] = useState({
    nickname: "",
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const handleChangeSignUpInfo = (sort: string, value: string) => {
    setSignUpInfo((prev) => ({ ...prev, [sort]: value }));
  };

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    if (signUpInfo.nickname === "")
      return setErrorMessage("닉네임을 적어주세요.");
    if (signUpInfo.email === "") return setErrorMessage("이메일을 적어주세요.");
    if (signUpInfo.password === "")
      return setErrorMessage("비밀번호를 적어주세요.");
    if (signUpInfo.password.length < 9)
      return setErrorMessage("비밀번호를 9자리 이상 적어주세요.");
  };

  return (
    <>
      <NavbarForSignInUp />
      <main css={[mainStyle, flexColumnCenter, `gap: 50px;`]}>
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit} css={signInUpStyles.form}>
          <input
            autoFocus
            type="text"
            placeholder="nickname : 최대 5 글자"
            maxLength={5}
            value={signUpInfo.nickname}
            onChange={(e) => handleChangeSignUpInfo("nickname", e.target.value)}
            css={signInUpStyles.input}
          />
          <input
            type="email"
            placeholder="email"
            value={signUpInfo.email}
            onChange={(e) => handleChangeSignUpInfo("email", e.target.value)}
            css={signInUpStyles.input}
          />
          <div
            css={[
              signInUpStyles.input,
              flexCenterX2,
              `justify-content: space-between;`,
            ]}
          >
            <input
              type={isPwVisible ? "text" : "password"}
              css={[signInUpStyles.input, `padding: 0; border: none;`]}
              placeholder="password"
              value={signUpInfo.password}
              onChange={(e) =>
                handleChangeSignUpInfo("password", e.target.value)
              }
            />
            <picture
              css={signInUpStyles.visibilityButton}
              onClick={(e) => {
                e.preventDefault();
                setIsPwVisible(!isPwVisible);
              }}
            >
              <Image
                src={isPwVisible ? visibility_off : visibility}
                alt="visibility"
              />
            </picture>
          </div>
          {errorMessage && (
            <p css={signInUpStyles.errorMessage}>{errorMessage}</p>
          )}
          <button css={signInUpStyles.button}>회원가입</button>
        </form>
        <div css={signInUpStyles.askingSection}>
          <span css={[`font-size: 0.9rem;`]}>아이디가 이미 있으신가요?</span>
          <Link href={"/pages/signIn"} css={signInUpStyles.link}>
            로그인
          </Link>
        </div>
      </main>
    </>
  );
};

export default SignUpPage;
