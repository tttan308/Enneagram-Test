<<<<<<< HEAD
import React from "react";

function Navigation() {
  return (
    <div class="grid justify-items-center overflow-hidden grid-cols-3 grid-rows-1 gap-2 h-14 bg-purple-300">
      <span class="self-center">aaa</span>
      <span class="self-center">...</span>
      <span class="self-center">...</span>
    </div>
  );
}

export default Navigation;
=======
import React from 'react'

function Navigation() {
    return (
        <div class="fixed top-0 inset-x-0 h-16 bg-pink-300">
            
            <div class="grid h-full overflow-hidden grid-cols-3 grid-rows-1 gap-x-1 gap-y-1 justify-items-center">
                <div class="box h-10 rounded-lg self-center bg-blue-300 w-[20%] text-center"></div>

                <div class="box h-10 rounded-lg self-center bg-blue-300 w-full text-center">
                    <div class="grid h-full overflow-hidden grid-cols-3 grid-rows-1 gap-x-1 gap-y-1 justify-items-center justify-content-center">
                        <div class="box h-10 rounded-lg self-center bg-green-300 w-[70%] text-center"></div>
                        <div class="box h-10 rounded-lg self-center bg-green-300 w-[70%] text-center"></div>
                        <div class="box h-10 rounded-lg self-center bg-green-300 w-[70%] text-center"></div>
                    </div>
                </div>
                
                <div class="box h-10 rounded-lg self-center bg-blue-300 w-[20%] text-center"></div>
            </div>

        </div>
    )
}

export default Navigation
>>>>>>> c9bf44d558e002ac333cf7206e94c47b29475c31
