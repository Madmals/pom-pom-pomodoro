import { createContext, useState, useEffect } from "react";
import { db } from "../db/db";
import { useTimer } from "react-timer-hook";

export const Context = createContext();

export default function TodoProvider({ children, expiryTimestamp }) {
  const [task, setTask] = useState("");
  const [timere, setTimere] = useState(true);
  const [flip, setFlip] = useState();
  const [placeholder, setPlaceholder] = useState("Your task");
  const [finish, setFinish] = useState(0);
  const [id, setId] = useState(1);
  const [countDb, setCountDb] = useState(0);
  const [timeTimer, setTimeTimer] = useState(false);
  const [modal, setModal] = useState(false);
  const [breaks, setBreaks] = useState(false);
  const [breakTimerDiff, setbreakTimerDiff] = useState(true);
  const [starts, setStarts] = useState(false);
  const [timerForModa, settimerForModa] = useState(0);
  const [timepomo, setTimepomo] = useState(30);
  const [breakTake,setBrakeTake] = useState(0)
  const { pause } = useTimer({ expiryTimestamp });



  const handleCreate = async (e) => {
    try {
      e.preventDefault();
      setTimepomo(30)
      task.length > 0 ? setTimere(false) : setPlaceholder("Put task 1st");
      setFinish(0);
      await db.tasks.add({
        task,
        finish,
        breakTake,
      });
      const lastDbObj = await db.tasks.orderBy("id").last();
      const lastData = lastDbObj.id;
      setId(lastData);
    } catch (error) {
      throw new Error(error);
    }
  };

  const handleClick = () => {
    setFlip(!flip);
  };

  const handleClickCreateNewTask = async () => {
      setTimepomo(30)
    setFlip(true);
    setTimere(true);
    setTimeTimer(false);
  };

  const handleClickEachTask = () => {
      setTimepomo(30)
    setFlip(true);
    setTimere(false);
    setTimeTimer(false);
  };

  const handleExpired = async () => {
    console.log("Expired");
    console.log(id);

    if (timepomo == 30) {
      const finishDb = await db.tasks.get(id);
      const finishOne = finishDb.finish + 1;
      await db.tasks.update(id, { finish: finishOne }).then(function (updated) {
        if (updated) console.log("updated finish");
        else console.log("Nothing was updated");
      });
    }

    if ((timerForModa == 10 && !modal && timepomo != 30) || (timerForModa == 20 && !modal && timepomo != 30)) {
      console.log("break in progress");
      const finishDb = await db.tasks.get(id);
      const finishOneBrake = finishDb.breakTake + 1;
      await db.tasks.update(id, { breakTake: finishOneBrake }).then(function (updated) {
        if (updated) console.log("updated break");
        else console.log("Nothing was updated");
      });
    }
  };

  const handleTakeAbreak = async () => {
    if (countDb > 0) {
      console.log("short");
      setTimepomo(0)
      setFlip(true);
      setTimere(false);
      setTimeTimer(true);
      setbreakTimerDiff(true);
      pause;
    } else {
      if (modal) {
        setBreaks(false);
        console.log(breaks);
        setModal(true);
        setModal(false);
      } else {
        setBreaks(false);
        console.log(breaks);
        setModal(true);
      }
    }
  };

  const handleLongBreak = async () => {
    if (countDb > 0) {
      setTimepomo(0)
      console.log("long");
      setFlip(true);
      setTimere(false);
      setTimeTimer(true);
      setbreakTimerDiff(false);
      console.log(pause);
      pause;
    } else {
      if (modal) {
        setBreaks(true);
        setModal(true);
        setModal(false);
      } else {
        setBreaks(true);
        setModal(true);
      }
    }
  };

  const closeAllModal = () => {
    setModal(false);
  };

  useEffect(() => {
    return async () => {
      const checkDb = await db.tasks.count();
      setCountDb(checkDb);
    };
  }, [!timere]);



  return (
    <Context.Provider
      value={{
        tasks: [task, setTask],
        timers: [timere, setTimere],
        handleCreate,
        handleClick,
        flips: [flip, setFlip],
        placeholders: [placeholder, setPlaceholder],
        finishs: [finish, setFinish],
        ids: [id, setId],
        countsDb: [countDb, setCountDb],
        handleClickCreateNewTask,
        handleClickEachTask,
        handleExpired,
        timerTime: [timeTimer, setTimeTimer],
        handleTakeAbreak,
        modals: [modal, setModal],
        breakso: [breaks, setBreaks],
        handleLongBreak,
        breakTimerDiffs: [breakTimerDiff, setbreakTimerDiff],
        startted: [starts, setStarts],
        closeAllModal,
        timerModa: [timerForModa, settimerForModa],
        timepomos: [timepomo, setTimepomo],
      }}
    >
      {children}
    </Context.Provider>
  );
}
