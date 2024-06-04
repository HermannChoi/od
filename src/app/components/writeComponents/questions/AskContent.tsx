"use client";
/** @jsxImportSource @emotion/react */

import useWriteStore from "@/app/stores/writeStore/useWriteStore";
import { flexColumnCenter } from "@/app/styles/commonStyles/commonStyles";
import { signInUpStyles } from "@/app/styles/signInUpStyles/signInUpStyles";
import { writePageStyles } from "@/app/styles/writePageStyles/writePageStyles";
import { useParams, useRouter } from "next/navigation";

const AskContent = () => {
  const { id } = useParams();
  const router = useRouter();

  const { answers, setAnswers } = useWriteStore();

  return (
    <div css={writePageStyles.questions.layout}>
      <p css={writePageStyles.questions.qustion}>한 줄 일기를 적어주세요.</p>
      <section
        css={[flexColumnCenter, writePageStyles.questions.contentSection]}
      >
        <textarea
          autoFocus
          name="diary"
          maxLength={150}
          value={answers.content}
          onChange={(e) => setAnswers("content", e.target.value)}
          css={[
            writePageStyles.askDiary.textarea,
            `box-shadow: 0 0 10px ${answers.color}`,
          ]}
        ></textarea>
        <p css={writePageStyles.askDiary.textLength}>
          {answers.content.length}/150
        </p>
      </section>
      <button
        disabled={answers.content.length === 0 && true}
        onClick={() => router.push(`${Number(id) + 1}`)}
        css={[
          signInUpStyles.button,
          answers.content.length === 0 && signInUpStyles.disabled,
        ]}
      >
        다음
      </button>
    </div>
  );
};

export default AskContent;
