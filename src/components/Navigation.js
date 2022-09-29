import React from "react";
import { NavLink, Link } from "react-router-dom";
import { navButton } from "../utils/constants";

function Navigation() {

  return (
    <div class="fixed top-0 inset-x-0 h-16 bg-gradient-to-r from-cyan-500 to-violet-500">
      <div class="grid h-full overflow-hidden grid-cols-4 grid-rows-1 gap-x-1 gap-y-1 justify-items-center">
        <div class="h-10 rounded-lg self-center">
          <p class=" text-white font-bold text-3xl hover:cursor-pointer hover:text-cyan-300">
            <Link to="Enneagram/" class="">
              Enneagram
            </Link>
          </p>
        </div>

        <div class="w-full h-11 rounded-lg self-center col-start-2 col-end-4">
          <div class="grid h-full overflow-hidden grid-cols-4 grid-rows-1 gap-x-1 gap-y-1 justify-items-center justify-content-center">
            <NavLink to="Enneagram/type" className={({ isActive }) =>{return `${navButton.shared} ${navButton[isActive]}`}}>
              <p class="text-white font-bold self-center ">Type của bạn</p>
            </NavLink>
            <NavLink to="Enneagram/documents" className={({ isActive }) =>{return `${navButton.shared} ${navButton[isActive]}`}}>
              <p class="text-white font-bold self-center ">Eneagram là gì?</p>
            </NavLink>
            <NavLink to="Enneagram/information" className={({ isActive }) =>{return `${navButton.shared} ${navButton[isActive]}`}}>
              <p class="text-white font-bold self-center "> Thông tin thêm</p>
            </NavLink>
            <NavLink to="Enneagram/forum" className={({ isActive }) =>{return `${navButton.shared} ${navButton[isActive]}`}}>
              <p class="text-white font-bold self-center ">Diễn đàn</p>
            </NavLink>
            
          </div>
        </div>

        <div class="flex w-[70%] h-10 rounded-lg self-center col-start-4 col-end-5 justify-evenly">
          <div class="grid px-3 py-1 border-2 self-center rounded-lg hover:cursor-pointer  hover:bg-violet-300 hover:text-white">
            <p class="text-white font-bold self-center ">Đăng nhập</p>
          </div>
          <div class="grid px-3 py-1 border-2 self-center rounded-lg bg-white text-violet-600  hover:cursor-pointer hover:bg-violet-300 hover:text-white hover:border-violet-300">
            <p class="font-bold self-center ">Đăng ký </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
