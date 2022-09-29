import React from 'react'
import { NavLink, Link } from "react-router-dom";
import { navButton } from "../utils/constants"; 

function type() {
  return (
    <div class="bg-white rounded-lg w-[95%] justify-self-center mt-20">
        <h1 className="text-gray-900 mx-20 px-20 py-20 my-20 text-9xl">Documents Page</h1>
        <NavLink to="test/" className={({ isActive }) =>{console.log(isActive); return `${navButton.shared1} ${navButton[isActive]}`}}>
              <p class="text-black font-bold self-center ">Type của bạn</p>
          </NavLink>

    </div>
  )
}

export default type