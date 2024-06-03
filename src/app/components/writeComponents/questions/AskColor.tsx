"use client";
/** @jsxImportSource @emotion/react */

import { colorOptions } from "@/app/constants/colorOptions";
import useWriteStore from "@/app/stores/writeStore/useWriteStore";
import { writePageStyles } from "@/app/styles/writePageStyles/writePageStyles";
import { useParams, useRouter } from "next/navigation";

const AskColor = () => {
  const { id } = useParams();
  const router = useRouter();
  const { answers, setAnswers } = useWriteStore();

  const handleClick = (color: string) => {
    setAnswers("color", color);
    router.push(`${Number(id) + 1}`);
  };

  return (
    <div css={writePageStyles.questions.layout}>
      <p css={writePageStyles.questions.qustion}>
        당신의 오늘은 어떤 색깔인가요?
      </p>
      <section css={writePageStyles.questions.contentSection}>
        {colorOptions.map((color, i) => {
          return (
            <button
              key={i}
              onClick={() => handleClick(color)}
              css={writePageStyles.askColor.button(color)}
            ></button>
          );
        })}
      </section>
    </div>
  );
};

export default AskColor;
