import React from "react";
import { modalState } from "../../atoms/modalState";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { symbolState } from "../../atoms/symbolState";
import { socketClient } from "../../App";

const AppModal = () => {
  const [modal, setModal] = useRecoilState(modalState);

  const navigate = useNavigate();

  const goToHome = () => {
    navigate(-1);
    setModal((modal) => ({ ...modal, display: false }));
  };

  const symbol = useRecoilValue(symbolState);
  // console.log({ symbol })

  return modal.display ? (
    <div className="fixed bottom-0 w-[100%] bg-primary flex flex-col justify-center items-center">
      <div
        className="w-[90%] flex justify-center self-center mt-5 p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800"
        role="alert"
      >
        <span className="font-medium text-center">{modal.message}</span>
      </div>

      <button
        className={
          "bg-secondary hover:bg-rose-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline antialiased font-mono"
        }
        onClick={goToHome}
      >
        Go back
      </button>
    </div>
  ) : null;
};;

export default  AppModal