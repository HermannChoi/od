"use client";
/** @jsxImportSource @emotion/react */

import WelcomeMessage from "@/app/components/commonComponents/WelcomeMessage";
import NavbarForSignInUp from "@/app/components/signInUpComponents/NavbarForSignInUp";
import {
  flexColumnCenter,
  mainStyle,
} from "@/app/styles/commonStyles/commonStyles";
import { signInUpStyles } from "@/app/styles/signInUpStyles/signInUpStyles";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { SyntheticEvent, useState } from "react";
import Google from "@/app/assets/svg/google.svg";

const SignInPage = () => {
  const router = useRouter();

  const [signInInfo, setSignInInfo] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleChangeSignInInfo = (sort: string, value: string) => {
    setSignInInfo((prev) => ({ ...prev, [sort]: value }));
  };

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    if (signInInfo.email === "") return setErrorMessage("이메일을 적어주세요.");
    if (signInInfo.password === "")
      return setErrorMessage("비밀번호를 적어주세요.");
    console.log("loggedIn");
    setIsLoggedIn(true);
    setTimeout(() => {
      router.push("/");
    }, 2000);
  };

  return (
    <>
      {isLoggedIn && <WelcomeMessage />}
      <NavbarForSignInUp />
      <main css={[mainStyle, flexColumnCenter, `gap: 50px;`]}>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit} css={signInUpStyles.form}>
          <input
            autoFocus
            type="email"
            placeholder="email"
            value={signInInfo.email}
            onChange={(e) => handleChangeSignInInfo("email", e.target.value)}
            css={signInUpStyles.input}
          />

          <input
            type="password"
            placeholder="password"
            value={signInInfo.password}
            onChange={(e) => handleChangeSignInInfo("password", e.target.value)}
            css={signInUpStyles.input}
          />

          {errorMessage && <p>{errorMessage}</p>}
          <button css={signInUpStyles.button}>로그인</button>
        </form>
        <div css={signInUpStyles.form}>
          <button css={signInUpStyles.button}>
            <Image src={Google} alt="google" />
            <span css={[`padding-left: 10px;`]}>구글 계정으로 로그인하기</span>
          </button>
        </div>
        <div css={signInUpStyles.askingSection}>
          <span css={[`font-size: 0.9rem;`]}>아이디가 없으신가요?</span>
          <Link href={"/pages/signUp"} css={signInUpStyles.link}>
            회원가입
          </Link>
        </div>
      </main>
    </>
  );
};

export default SignInPage;
