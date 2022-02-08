import React from "react";
import { modalState } from "../../atoms/modalState";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { symbolState } from "../../atoms/symbolState";

const AppModal= () =>{
  const [modal, setModal] = useRecoilState(modalState);

  const navigate = useNavigate();

  const goToHome = () => {
    navigate(-1);
    setModal((modal) => ({ ...modal, display: false }));
  };

  const symbol = useRecoilValue(symbolState);
  // console.log({ symbol })

return modal.display ? (
  <div
    className="fixed top-0 left-0 w-[100%] h-[100%] bg-primary flex flex-col justify-center items-center"
  >
    <h2 className="text-white text-2xl text-center relative top-[1em] m-auto">
      {modal.message}
    </h2>

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
}

export default  AppModal