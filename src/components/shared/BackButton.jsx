// import React from 'react' 
import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from "react-router";


export const BackButton = () => {

       const navigate = useNavigate();

  return (
    <div className="bg-blue-800 p-[10px] rounded-full cursor-pointer">
       <IoArrowBack onClick={()=> navigate(-1)} className="text-2xl font-bold text-white"/>
    </div>
  )
}
