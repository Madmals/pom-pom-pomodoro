import React from "react";
import Todo from "./Todo";
import Nav from "./Nav";
import { useContext, useState } from "react";
import { Context } from "../hook/Context";
import Modal from "./Modal";
import { useEffect } from "react";

export default function Home() {
  const { modals,closeAllModal } = useContext(Context);
  const [modal] = modals;

  useEffect(()=>{
    document.querySelector('.test').addEventListener("click", ()=>{
      closeAllModal()
    })
  })

  return (
    <div className="test flex flex-col gap-2 place-items-center h-[100vh] w-full bg-testing-background justify-center">
      <Nav/>
      {!modal && <Todo />}
      {modal && <Modal/>}
    </div>
  );
}
