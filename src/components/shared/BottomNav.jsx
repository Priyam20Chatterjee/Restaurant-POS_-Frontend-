// import React from 'react'
import { FaHome } from "react-icons/fa";
import { IoMdReorder } from "react-icons/io";
import { MdTableBar } from "react-icons/md";
import { CiCircleMore } from "react-icons/ci";
import { BiSolidDish } from "react-icons/bi";
 

const BottomNav = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-zinc-900 p-2 h-16 flex justify-around">
       <button className="text-white text-2xl bg-zinc-800 w-[200px] rounded-[20px] flex items-center justify-center"><FaHome className="inline mr-2" size={25}/> <p>Home</p></button>
       <button className="text-white text-2xl bg-zinc-800 w-[200px] rounded-[20px] flex items-center justify-center"><IoMdReorder className="inline mr-2" size={25}/> <p>Orders</p></button>
       <button className="text-white text-2xl bg-zinc-800 w-[200px] rounded-[20px] flex items-center justify-center"><MdTableBar className="inline mr-2" size={25}/> <p>Tables</p></button>
       <button className="text-white text-2xl bg-zinc-800 w-[200px] rounded-[20px] flex items-center justify-center"><CiCircleMore className="inline mr-2" size={25}/> <p>More</p></button>

       <button className="bg-[#f6B100] absolute bottom-5 text-white text-2xl rounded-full p-4 items-center">
              <BiSolidDish size={45}/>
       </button>
    </div>
  )
}

export default BottomNav