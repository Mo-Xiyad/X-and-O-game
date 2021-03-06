import React, { useState, useEffect } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { nameState } from "../../atoms/nameState";
import { symbolState } from "../../atoms/symbolState";
import { modalState } from "../../atoms/modalState";
import { socketClient } from "../../App";

export type Symbol = "O" | "X" | null;

interface Opponent {
  name: string;
  socketId: string;
}


export default function Board() {
      const [matrix, setMatrix] = useState<[Symbol, Symbol, Symbol][]>([
        //00    01    02
        [null, null, null],
        //10    11    12
        [null, null, null],
        //20    21    22
        [null, null, null],
      ]);

      const name = useRecoilValue(nameState);
      
      const setModal = useSetRecoilState(modalState);
      const modal = useRecoilValue(modalState);

      const [opponent, setOpponent] = useState<Opponent | null>(null);

      const [symbol, setSymbol] = useRecoilState(symbolState);

      const handleMatrixUpdate = (x: number, y: number) => {
        if (!!matrix[y][x]) return;

        const newMatrix = [...matrix];
        newMatrix[y][x] = symbol;
        setMatrix(newMatrix);

        // console.log({ opponent })
        if (!opponent) {
          // should never happen
          throw new Error("OPPONENT CAN'T BE NULL");
        }

        socketClient.emit("matrixUpdate", { matrix: newMatrix, opponent });
      };

      useEffect(() => {
        socketClient.on("connect", () => {
          console.log("connected...");
          console.log(name);
          socketClient.emit("loggedIn", { name, symbol });
        });

        socketClient.on("waitingForOpponent", () => {
          setModal({
            message: "Waiting for another player...",
            display: true,
          });
        });

        socketClient.on("gameStarted", ({ opponent, symbol }) => {
          setSymbol(symbol);
          setOpponent(opponent);

          if (symbol === "X") {
            setModal({
              message: "Waiting for your opponent move...",
              display: true,
            });
          } else {
              setModal({
                message: "You are starting...",
                display: true,
              });
          }
        });

        socketClient.on("waitingForMove", () => {
          setModal({
            message: "Waiting for your opponent...",
            display: true,
          });
        });

        socketClient.on("yourTurn", ({ matrix }) => {
        setModal({
          message: "Your turn...",
          display: true,
        });

          setMatrix(matrix);
        });
      }, [setModal]);

      useEffect(() => {
        const gameOver = ({
          winner,
          matrix,
        }: {
          winner: Symbol;
          matrix: [Symbol, Symbol, Symbol][];
        }) => {
          const draw = winner === null;
          const won = winner === symbol;

          setMatrix(matrix);

          setModal({
            message: draw ? "Draw!" : won ? "You won!" : "You lost!",
            display: true,
          });
        };
        socketClient.on("gameOver", gameOver);

        return () => {
          socketClient.off("gameOver", gameOver);
        };
      }, [symbol]);


  return (
    <>
      <header className="pt-[2em] flex justify-between mx-[4ch]">
        <h4 className="text-white" data-aos="zoom-in-up">
          {name}
        </h4>
        <h4 className="text-white" data-aos="zoom-in-up">
          {opponent?.name}
        </h4>
      </header>
      <div
        className={
          modal.message === "Waiting for your opponent..." ||
          modal.message === "Waiting for another player..." ||
          modal.message === "Waiting for your opponent move..."
            ? "bg-primary items-center m-auto blur-sm"
            : "bg-primary items-center m-auto"
        }
      >
        {matrix.map((row, y) => (
          <div
            className="board-row flex border-b-4 last-of-type:border-b-0"
            key={`row_${y}`}
          >
            {row.map((symbol, x) => (
              <div
                className={
                  modal.message === "Waiting for your opponent..." ||
                  modal.message === "Waiting for another player..." ||
                  modal.message === "Waiting for your opponent move..."
                    ? "last-of-type:border-l-0 board-cell w-[25vmin] h-[25vmin] cursor-not-allowed border-solid border-x-4 border-white grid place-items-center first-of-type:border-l-0 odd:border-r-0"
                    : "last-of-type:border-l-0 board-cell w-[25vmin] h-[25vmin] cursor-pointer border-solid border-x-4 border-white grid place-items-center first-of-type:border-l-0 odd:border-r-0"
                }
                key={`cell_${x}`}
                onClick={() => handleMatrixUpdate(x, y)}
              >
                {symbol && (
                  <img
                  alt={symbol}
                    src={`/assets/${symbol}.png`}
                    className="w-[50px] h-[50px]"
                    data-symbol={symbol}
                  />
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}
