"use client";
/** @jsxImportSource @emotion/react */

import { mySpaceStyles } from "@/app/styles/mySpaceStyles/mySpaceStyles";
import { signInUpStyles } from "@/app/styles/signInUpStyles/signInUpStyles";
import { Dispatch, SetStateAction, SyntheticEvent } from "react";

interface DeleteModal {
  setIsDeleteBtnClicked: Dispatch<SetStateAction<boolean>>;
}

const DeleteModal: React.FC<DeleteModal> = ({ setIsDeleteBtnClicked }) => {
  const handleClose = (e: SyntheticEvent) => {
    setIsDeleteBtnClicked(false);
  };

  return (
    <section
      onClick={(e) => handleClose(e)}
      css={mySpaceStyles.deleteModal.section}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        css={mySpaceStyles.deleteModal.modal}
      >
        <button
          onClick={() => setIsDeleteBtnClicked(false)}
          css={mySpaceStyles.deleteModal.close}
        >
          ﹣
        </button>
        <p
          css={[
            mySpaceStyles.eachDiaryGrid.content(),
            `margin-top: 10px; text-align: center;`,
          ]}
        >
          <span css={mySpaceStyles.deleteModal.date}>2024.06.04</span>에 작성된
          일기를 삭제하시겠습니까?
        </p>
        <button onClick={(e) => handleClose(e)} css={signInUpStyles.button}>
          삭제
        </button>
      </div>
    </section>
  );
};

export default DeleteModal;
