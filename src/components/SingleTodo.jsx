import React, { useContext } from "react";
import { useLiveQuery } from "dexie-react-hooks";
import { db } from "../db/db";
import { Context } from "../hook/Context";

export default function SingleTodo() {
  const { ids, handleClickEachTask } = useContext(Context);
  const [id, setId] = ids;

  const eachtask = useLiveQuery(() => db.tasks.toArray());

  const handleClickOnTask = async (id) => {
    await setId(id);
    await handleClickEachTask();
  };

  const handleDel = async (id) => {
    db.tasks.where("id").equals(id).delete(id);
    console.log(db.tasks.toArray());
  };

  return (
    <div className="p-2 text-center flex justify-center place-content-center bg-white">
      <div className="">
        {eachtask &&
          eachtask.map((each) => (
            <div className="flex  w-[30vw] justify-content-center items-center">
              <div
                key={each.id}
                onClick={() => handleClickOnTask(each.id)}
                className="w-[25vw] border-r border-b-2 border-l-2 border-t flex justify-center items-center hover:bg-bubble-gum"
              >
                {/* <div className="border-r w-[2vw] py-2 h-[11vh] flex justify-center items-center">
                  {each.id}.
                </div> */}
                <div className="border-r w-[12vw] py-2 h-[11vh] flex justify-start items-center">
                  Name: {each.task}
                </div>
                <div className="border-r w-[5vw] p-2 flex justify-center items-center h-[11vh]">
                  Finish: {each.finish}
                </div>
                <div className="px-2 h-[11vh] flex justify-center items-center">
                  Break: {each.breakTake}
                </div>
              </div>
              <img
                className="hover:bg-red rounded-full w-[2vw] h-[5vh] mx-2"
                onClick={() => handleDel(each.id)}
                alt="svgImg"
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMjQiIGhlaWdodD0iMjQiCnZpZXdCb3g9IjAgMCAyNCAyNCIKc3R5bGU9IiBmaWxsOiMwMDAwMDA7Ij48cGF0aCBkPSJNIDEyIDIgQyA2LjQ4ODk5NzEgMiAyIDYuNDg4OTk3MSAyIDEyIEMgMiAxNy41MTEwMDMgNi40ODg5OTcxIDIyIDEyIDIyIEMgMTcuNTExMDAzIDIyIDIyIDE3LjUxMTAwMyAyMiAxMiBDIDIyIDYuNDg4OTk3MSAxNy41MTEwMDMgMiAxMiAyIHogTSAxMiA0IEMgMTYuNDMwMTIzIDQgMjAgNy41Njk4Nzc0IDIwIDEyIEMgMjAgMTYuNDMwMTIzIDE2LjQzMDEyMyAyMCAxMiAyMCBDIDcuNTY5ODc3NCAyMCA0IDE2LjQzMDEyMyA0IDEyIEMgNCA3LjU2OTg3NzQgNy41Njk4Nzc0IDQgMTIgNCB6IE0gOC43MDcwMzEyIDcuMjkyOTY4OCBMIDcuMjkyOTY4OCA4LjcwNzAzMTIgTCAxMC41ODU5MzggMTIgTCA3LjI5Mjk2ODggMTUuMjkyOTY5IEwgOC43MDcwMzEyIDE2LjcwNzAzMSBMIDEyIDEzLjQxNDA2MiBMIDE1LjI5Mjk2OSAxNi43MDcwMzEgTCAxNi43MDcwMzEgMTUuMjkyOTY5IEwgMTMuNDE0MDYyIDEyIEwgMTYuNzA3MDMxIDguNzA3MDMxMiBMIDE1LjI5Mjk2OSA3LjI5Mjk2ODggTCAxMiAxMC41ODU5MzggTCA4LjcwNzAzMTIgNy4yOTI5Njg4IHoiPjwvcGF0aD48L3N2Zz4="
              />
            </div>
          ))}
      </div>
    </div>
  );
}
