import React from 'react';
import { useRecoilValue } from 'recoil';
import { nameState } from '../../atoms/nameState';
import Board from './Board';

export default function Game() {
  const name = useRecoilValue(nameState)
  return (
    <div id="game" className="text-white bg-primary h-[100vh] flex flex-col">
      <div className="flex justify-center pt-10">
        <h1 className="text-3xl">Welcome</h1>
      </div>
      <Board />
    </div>
  );
}
