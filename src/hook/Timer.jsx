import React, { useContext } from "react";
import { useTimer } from "react-timer-hook";
import { Context } from "./Context";

export default function MyTimer({ expiryTimestamp }) {
  const {
    handleExpired,
    timerTime,
    breakTimerDiffs,
    startted,
    timerModa,
    timepomos,
  } = useContext(Context);
  const [timeTimer] = timerTime;
  const [breakTimerDiff] = breakTimerDiffs;
  const [starts, setStarts] = startted;
  const [timerForModa, settimerForModa] = timerModa;
  const [timepomo, setTimepomo] = timepomos;
  const { seconds, minutes, isRunning, start, pause, resume, restart } =
    useTimer({
      expiryTimestamp,
      onExpire: handleExpired,
      autoStart: false,
    });

  // const timePomo = 15;
  if (breakTimerDiff) {
    settimerForModa(10);
  } else {
    settimerForModa(20);
  }

  const time = new Date();
  time.setSeconds(time.getSeconds() + (timeTimer ? timerForModa : timepomo));

  const handleStart = async (time) => {
    setStarts(true);
    console.log("Start");
    pause;
    restart(time);
  };

  return (
    <div style={{ textAlign: "center" }} className="gap-1 flex flex-col justify-center items-center">
      <div style={{ fontSize: "70px" }}>
        {!starts && (
          <div>
            <span>0</span>:<span>0</span>
          </div>
        )}
        {starts && (
          <div>
            <span>{minutes}</span>:<span>{seconds}</span>
          </div>
        )}
      </div>
      <p className="border-2 bg-white w-[10vw] text-l rounded">
        {isRunning ? "Running" : "Not running"}
      </p>
      <button
        className="border-2 bg-silver rounded-xl w-[8vw] text-l"
        onClick={() => handleStart(time)}
      >
        Start
      </button>
      <button className="border-2 bg-silver rounded-xl w-[8vw] text-l" onClick={pause}>
        Pause
      </button>
      <button className="border-2 bg-silver rounded-xl w-[8vw] text-l" onClick={resume}>
        Resume
      </button>
      <button
        className="border-2 bg-silver rounded-xl w-[8vw] text-l"
        onClick={() => {
          pause;
          restart(time);
        }}
      >
        Restart
      </button>
    </div>
  );
}
