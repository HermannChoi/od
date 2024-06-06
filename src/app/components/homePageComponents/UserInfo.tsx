"use client";
/** @jsxImportSource @emotion/react */

import { flexCenterX2 } from "@/app/styles/commonStyles/commonStyles";
import { homePageStyles } from "@/app/styles/homePageStyles/homePageStyles";
import Link from "next/link";

const UserInfo = () => {
  return (
    <Link
      href={"/pages/mySpace"}
      css={[
        homePageStyles.commonContentLayout,
        `flex-direction: row; justify-content: space-between;`,
      ]}
    >
      <div>
        <p>환영합니다,</p>
        <p>
          <span css={homePageStyles.leftSection.userInfo.name}>
            위대한홍길동
          </span>{" "}
          님
        </p>
        <p>example@email.com</p>
      </div>

      <div css={[flexCenterX2]}>
        <div
          css={[
            homePageStyles.middleSection.posts.profile(50),
            `font-size: 2rem;`,
          ]}
        >
          F
        </div>
      </div>
    </Link>
  );
};

export default UserInfo;
