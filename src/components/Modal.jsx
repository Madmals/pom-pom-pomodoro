import React from 'react'
import image from '../assets/first-break.jpg'
import image2 from '../assets/long-break.jpg'
import { useContext } from 'react';
import { Context } from '../hook/Context';

export default function Modal() {
const {breakso}= useContext(Context)
const [breaks]=breakso

  return (
    <div className='container w-[50vw] h-[70vh] bg-tahiti relative flex justify-center items-center border-8'>
       {!breaks && <img src={image} alt="aint no break" className='w-[50vw] h-[70vh] object-fit' />
       } 
       {breaks && <img src={image2} alt="aint no long break" className='w-[50vw] h-[70vh] object-fit' />
       }
    </div>
  );
}
