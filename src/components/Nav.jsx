import React,{useContext} from 'react'
import {Context} from '../hook/Context'

export default function Nav() {

const {handleClickCreateNewTask,handleTakeAbreak,handleLongBreak} = useContext(Context)

  return (
    <div className='bg-tahiti-100 p-2 rounded border-2 text-sm'>
      <button onClick={handleClickCreateNewTask} className="border-l p-2 hover:bg-tahiti-500 rounded">Create Task</button>
      <button onClick={handleTakeAbreak} className="border-l p-2 hover:bg-tahiti-500 rounded">Slow Break</button>
      <button onClick={handleLongBreak} className="border-l p-2 border-r hover:bg-tahiti-500 rounded">Long Break</button>
    </div>
  )
} 

