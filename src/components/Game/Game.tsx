import React, { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { nameState } from "../../atoms/nameState";
import Board from "./Board";


export default function Game() {
  const name = useRecoilValue(nameState);
  
  return (
    <div id="game" className="text-white bg-primary">
      {/* TOAST */}
      {/* <div
        className="w-[50%] flex justify-center self-center mt-5 p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800"
        role="alert"
      >
        <span className="font-medium">Success alert!</span> Change a few things
        up and try submitting again.
      </div> */}

      <div className="flex justify-center pt-5">
        <h1 className="text-3xl" data-aos="fade-left">
          Welcome
        </h1>
      </div>
      <div className="flex h-[100vh] flex-col">
        <Board />
      </div>
    </div>
  );
}
