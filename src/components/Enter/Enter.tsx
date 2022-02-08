import React,{useState,useEffect} from "react";
import { useNavigate } from "react-router";


import { useRecoilState } from "recoil";
import { nameState } from "../../atoms/nameState";

const Enter = () => {
  const [name, setName] = useRecoilState(nameState);
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  if (name) {
    navigate("/play");
  }
};

  useEffect(() =>{
    console.log(name);
    
  })
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
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline antialiased font-mono"
                id="username"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
              />
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
