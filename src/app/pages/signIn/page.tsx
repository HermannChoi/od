"use client";
/** @jsxImportSource @emotion/react */

import NavbarForSignInUp from "@/app/components/signInUpComponents/NavbarForSignInUp";
import {
  flexColumnCenter,
  flexColumnCenterX2,
  layoutStyle,
  mainStyle,
} from "@/app/styles/commonStyles/commonStyles";
import { signInUpStyles } from "@/app/styles/signInUpStyles/signInUpStyles";
import { css } from "@emotion/react";

const SignInPage = () => {
  return (
    <div css={[layoutStyle]}>
      <NavbarForSignInUp />
      <main css={[mainStyle, flexColumnCenter, `gap: 50px;`]}>
        <h1 css={[`margin-top: 100px;`]}>Sign In</h1>
        <form
          css={[
            css`
              display: flex;
              flex-direction: column;
              gap: 10px;
              width: 300px;
            `,
          ]}
        >
          <div>
            <label htmlFor="email">email</label>
            <input id="email" type="email" css={signInUpStyles.input} />
          </div>
          <div>
            <label htmlFor="password">password</label>
            <input id="password" type="password" css={signInUpStyles.input} />
          </div>
          <input type="submit" value={"로그인"} css={signInUpStyles.button} />
        </form>
      </main>
    </div>
  );
};

export default SignInPage;
