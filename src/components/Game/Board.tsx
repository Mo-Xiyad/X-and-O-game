import React, { useState, useEffect } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { nameState } from "../../atoms/nameState";
import { symbolState } from "../../atoms/symbolState";
import AOS from "aos";

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
  //   const [symbol, setSymbol] = useRecoilState(symbolState);

  const symbol: Symbol = "O";
  const handleMatrixUpdate = (x: number, y: number) => {
    if (!!matrix[y][x]) return;

    const newMatrix = [...matrix];
    newMatrix[y][x] = symbol;
    setMatrix(newMatrix);
  };
    useEffect(() => {
      AOS.init({
        duration: 2000,
      });
    }, []);

  return (
    <>
      <header className="pt-[2em] flex justify-between mx-[4ch]">
        <h4 className="text-white" data-aos="zoom-in-up">
          player one {name}
        </h4>
        <h4 className="text-white" data-aos="zoom-in-up">
          player two
        </h4>
      </header>
      <div id="board" className="bg-primary items-center m-auto">
        {matrix.map((row, y) => (
          <div className="board-row flex" key={`row_${y}`}>
            {row.map((symbol, x) => (
              <div
                className="board-cell w-[25vmin] h-[25vmin] cursor-pointer border-solid border-4 border-white text-2xl grid place-items-center"
                key={`cell_${x}`}
                onClick={() => handleMatrixUpdate(x, y)}
              >
                {symbol && (
                  <img src={`/assets/${symbol}.png`} data-symbol={symbol} />
                )}
                {/* &&
                <img src={`/assets/${symbol}.png`} data-symbol={symbol} /> */}
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}
