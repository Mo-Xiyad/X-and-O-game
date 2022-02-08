import React from 'react';
import { useRecoilValue } from 'recoil';
import { nameState } from '../../atoms/nameState';

export default function Game() {
  const name = useRecoilValue(nameState)
  return (
    <div id="game" className="text-white">
      <h1 className="text-3xl">Hello {name}</h1>
    </div>
  );
}
