import React, { useState, useContext, useEffect } from "react";
import ReactCardFlip from "react-card-flip";
import MyTimer from "../hook/Timer";
import { Context } from "../hook/Context";
import SingleTodo from "./SingleTodo";

export default function Todo() {
  const {
    timers,
    tasks,
    handleCreate,
    flips,
    handleClick,
    placeholders,
    countsDb,
  } = useContext(Context);
  const [task, setTask] = tasks;
  const [timere, setTimere] = timers;
  const [flip, setFlip] = flips;
  const [placeholder, setPlaceholder] = placeholders;
  const [countDb, setCountsDb] = countsDb;

  // const time = new Date();
  // time.setSeconds(time.getSeconds() + 10);
  let time;

  return (
    <div className={`flex`}>
      <ReactCardFlip
        isFlipped={flip}
        flipDirection="vertical"
        className={`${countDb ? "border-0" : "border-1"}`}
      >
        <div
          className={`grow w-[60vw] flex mr-8 ${
            countDb > 0 ? "justify-end" : "justify-center"
          }`}
        >
          <div onClick={handleClick}>
            <div className="flex justify-center place-items-center rounded-full h-[48vh] w-[23vw] bg-nice">
              <h1 className="text-center text-4xl font-bold ">
                POMO
              </h1>
            </div>
          </div>
        </div>
        <div
          className={`create-task grow w-[60vw] flex ${
            countDb > 0 ? "justify-end" : "justify-center"
          } mr-8}`}
        >
          {timere && (
            <form
              onSubmit={handleCreate}
              className="flex flex-col justify-center place-items-center rounded-full h-[48vh] w-[23vw] bg-nice"
            >
              <input
                className="text-center text-2xl font-bold w-[15vw] p-1.4 rounded"
                placeholder={placeholder}
                onChange={(e) => setTask(e.target.value)}
                value={task}
              />
              <button type="submit" className="rounded p-1.5 border mt-2 w-[8vw] bg-button hover:bg-tahiti-300">Create</button>
            </form>
          )}
          {!timere && (
            <div className="flex">
              <div
                className={`flex place-items-center justify-center rounded-full h-[48vh] w-[23vw] bg-nice`}
              >
                <MyTimer className="" expiryTimestamp={time} />
              </div>
            </div>
          )}
        </div>
      </ReactCardFlip>
      {countDb > 0 && (
        <div className="grow w-[35vw] flex justify-center">
          <div className="flex justify-start overflow-y-scroll w-[30vw] h-[70vh] mr-8 border-2">
            <SingleTodo />
          </div>
        </div>
      )}
    </div>
  );
}
