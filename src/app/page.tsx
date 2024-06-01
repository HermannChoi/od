"use client";
/** @jsxImportSource @emotion/react */

import { layoutStyle } from "./styles/commonStyles/commonStyles";
import Navbar from "./components/commonComponents/Navbar";

export default function Home() {
  return (
    <div css={layoutStyle}>
      <Navbar />
    </div>
  );
}
