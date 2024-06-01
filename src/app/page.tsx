"use client";
/** @jsxImportSource @emotion/react */

import { layoutStyle } from "./styles/commonStyles";
import Navbar from "./components/homePageComponents/Navbar";

export default function Home() {
  return (
    <div css={layoutStyle}>
      <Navbar />
    </div>
  );
}
