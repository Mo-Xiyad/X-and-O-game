import React,{useState,useEffect} from "react";
import { useNavigate } from "react-router";
import { useRecoilState, useSetRecoilState } from "recoil";
import { socketClient } from "../../App";
import { gameState } from "../../atoms/gameState";
import { modalState } from "../../atoms/modalState";
import { nameState } from "../../atoms/nameState";
import { symbolState } from "../../atoms/symbolState";
import { Symbol } from "../Game/Board";

const Enter = () => {
 const [name, setName] = useRecoilState(nameState);
 const [symbol, setSymbol] = useRecoilState(symbolState);

 const navigate = useNavigate();

 const handleSubmit = (e: React.FormEvent) => {
   e.preventDefault();
   if (name) {
     navigate("/play");
     socketClient.emit("loggedIn", { name, symbol });
   }
 };

 const [game, setGameState] = useRecoilState(gameState);

 const setModal = useSetRecoilState(modalState);

 useEffect(() => {
   if (game === "PLAYING") {
     setGameState("ENTERING");
     setModal((modal) => ({ ...modal, display: false }));
     socketClient.emit("leave");
   }
 }, [game]);

  return (
    <div
      id="enter"
      className="h-screen w-screen bg-primary flex justify-center items-center"
      data-aos="zoom-out-up"
    >
      <div>
        <div className="flex justify-center mb-20">
          <h1 className="text-3xl text-white font-extrabold antialiased font-mono">
            {" "}
            Tic Tac Toe Game
          </h1>
        </div>
        <div className="w-full max-w-xs">
          <form
            className="bg-gray-400 shadow-md rounded px-8 pt-6 pb-8 mb-4"
            onSubmit={handleSubmit}
          >
            <div className="mb-4 ">
              <label className="block text-dark text-md font-bold flex items-center justify-center mb-5 antialiased font-mono">
                Player Name
              </label>
              <input
                className="mb-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline antialiased font-mono"
                id="username"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
              />
            </div>
                <legend className="text-dark text-sm font-bold flex items-center justify-center mb-4 antialiased font-mono">Choose a Symbol</legend>
            <div className="flex justify-around pb-5">
            <div className="relative">
              <input
                id="player-symbol-option-1"
                type="radio"
                className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                value="O" 
                checked={symbol === "O"}
                onChange={e => setSymbol(e.target.value as Symbol)}
              />
              <label
                htmlFor="player-symbol-option-1"
                className="inline-block ml-2 text-2xl font-bold text-gray-900 dark:text-gray-300"
              >
                <img data-symbol="O" src="/assets/O.png" className="absolute w-[50px] top-[-9%]" alt="" />
              </label>
            </div>
            <div className="relative">

                <input
                  id="player-symbol-option-2"
                  type="radio"
                  className=" w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                  value="X" 
                  checked={symbol === "X"}
                  onChange={e => setSymbol(e.target.value as Symbol)}
                />
                <label
                  htmlFor="player-symbol-option-"
                  className=" inline-block ml-2 text-2xl font-bold text-gray-900 dark:text-gray-300"
                >
                  <img data-symbol="X" src="/assets/X.png" className="absolute w-[50px] top-[-9%]" alt="" />
                </label>
            </div>
            </div>


            <div className="flex items-center justify-center">
              <button
                className={
                  !name
                    ? "cursor-not-allowed text-white font-bold py-2 px-4 rounded bg-secondary"
                    : "bg-secondary hover:bg-rose-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline antialiased font-mono"
                }
                type="submit"
              >
                Play
              </button>
            </div>
          </form>
          <p className="text-center text-gray-500 text-xs">
            ©2022 Created by Zied.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Enter;
