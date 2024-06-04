"use client";
/** @jsxImportSource @emotion/react */

import useWriteStore from "@/app/stores/writeStore/useWriteStore";
import { signInUpStyles } from "@/app/styles/signInUpStyles/signInUpStyles";
import { writePageStyles } from "@/app/styles/writePageStyles/writePageStyles";
import { useParams, useRouter } from "next/navigation";
import { stars } from "@/app/constants/\bwriteConstants";

const AskStars = () => {
  const { id } = useParams();
  const router = useRouter();

  const { answers, setAnswers, resetAnswers } = useWriteStore();

  const handleClick = () => {
    router.push(`${Number(id) + 1}`);
    setTimeout(() => {
      resetAnswers();
      router.push("/pages/mySpace");
    }, 2000);
  };

  return (
    <div css={writePageStyles.questions.layout}>
      <p css={writePageStyles.questions.qustion}>
        오늘 하루의 점수를 매겨주세요.
      </p>
      <section css={[writePageStyles.questions.contentSection]}>
        {stars.map((_, i) => {
          return (
            <button
              key={i}
              onClick={() => setAnswers("star", i + 1)}
              css={writePageStyles.askStar.star(i, answers.star, 40)}
            ></button>
          );
        })}
      </section>
      <p css={writePageStyles.askStar.number(answers.star)}>{answers.star}/5</p>
      <button
        disabled={answers.star === 0 && true}
        onClick={() => handleClick()}
        css={[
          signInUpStyles.button,
          answers.star === 0 && signInUpStyles.disabled,
        ]}
      >
        작성 완료
      </button>
    </div>
  );
};

export default AskStars;
