import React from 'react';

const Enter = ()=> {
  return (
    <div
      id="enter"
      className="h-screen w-screen bg-primary flex justify-center items-center"
    >
      {/* <h1> Tic Tac Toe Game</h1> */}
      <div className="w-full max-w-xs">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4 ">
            <label
              className="block text-gray-700 text-md font-bold flex items-center justify-center mb-5"
              htmlFor="username"
            >
              Player Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Name"
            />
          </div>

          <div className="flex items-center justify-center">
            <button
              className="bg-secondary hover:bg-rose-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Play
            </button>
          </div>
        </form>
        <p className="text-center text-gray-500 text-xs">
          ©2022 Ziyad.
        </p>
      </div>
    </div>
  );
}

export default Enter