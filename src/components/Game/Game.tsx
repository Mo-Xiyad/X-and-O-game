import React, { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { gameState } from "../../atoms/gameState";
import { nameState } from "../../atoms/nameState";
import Board from "./Board";

export default function Game() {
  const [game, setGameState] = useRecoilState(gameState);

  useEffect(() => {
    game === "ENTERING" && setGameState("PLAYING");
  }, [game]);

  return (
    <div id="game" className="text-white bg-primary">
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
