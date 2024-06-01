"use client";
import WelcomeMessage from "@/app/components/commonComponents/WelcomeMessage";
/** @jsxImportSource @emotion/react */

import NavbarForSignInUp from "@/app/components/signInUpComponents/NavbarForSignInUp";
import {
  flexColumnCenter,
  layoutStyle,
  mainStyle,
} from "@/app/styles/commonStyles/commonStyles";
import { signInUpStyles } from "@/app/styles/signInUpStyles/signInUpStyles";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { SyntheticEvent, useState } from "react";

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
    setIsLoggedIn(true);
    setTimeout(() => {
      router.push("/");
    }, 2000);
  };

  return (
    <div css={[layoutStyle]}>
      {isLoggedIn && <WelcomeMessage />}
      <NavbarForSignInUp />
      <main css={[mainStyle, flexColumnCenter, `gap: 50px;`]}>
        <h1 css={[`margin-top: 100px;`]}>Sign In</h1>
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
          <input type="submit" value={"로그인"} css={signInUpStyles.button} />
        </form>
        <div css={signInUpStyles.askingSection}>
          <span css={[`font-size: 0.9rem;`]}>아이디가 없으신가요?</span>
          <Link href={"/pages/signUp"} css={signInUpStyles.link}>
            회원가입
          </Link>
        </div>
      </main>
    </div>
  );
};

export default SignInPage;
