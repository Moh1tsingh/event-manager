"use client"
import React from 'react'
// import Confetti from "react-confetti";
function Success() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      {/* {window ? <Confetti width={window.innerWidth} height={window.innerHeight} numberOfPieces={300} recycle={false} className="w-full h-full" /> : null} */}
      
      <h1 className=" text-4xl text-green-500 font-semibold">
        You're RSVP was successfull!
      </h1>
    </div>
  );
}

export default Success