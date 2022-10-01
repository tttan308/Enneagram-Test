import React from "react";
import { useState } from "react";
import { questions } from '../utils/questions' 
 
function Test() {
  questions.sort((a,b)=>(a.order>b.order)?1:-1);
  console.log(questions)
  return (
    <div className="p-[500px] w-[600px] h-[400px] justify-self-center mt-40 px-3 py-1 border-2 rounded-lg bg-[#252d4a]">
      <div className="grid overflow-hidden grid-cols-2 grid-rows-2 gap-2 text-white">
          
      </div>
    </div>
  );
}

export default Test;
