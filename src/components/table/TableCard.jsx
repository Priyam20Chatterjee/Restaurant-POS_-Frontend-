import { useDispatch } from "react-redux"
import { useNavigate } from "react-router"
import { getRandomBG } from "../../utils"
import { updateTableNo } from "../../redux/slice/customerSlice";

// import React from 'react'
const TableCard = ({tableNum, key, status, seats, initials}) => {

       const dispatch = useDispatch();
       const navigate = useNavigate();
       const handleClick = (tableNum) => {
              dispatch(updateTableNo({tableNo: tableNum}))
              if(status === "Available"){
                     navigate(`/menu`);
              }              
       } 

       return(
              <div onClick={()=> handleClick(tableNum)} key={key} className="w-[300px] bg-zinc-900 p-4 hover:bg-zinc-600 cursor-pointer rounded-lg mb-4">
                     <div className="flex items-center justify-between">
                       <h1 className="text-white text-xl font-semibold">{tableNum}</h1>
                       <p className={`${status === "Booked"? "text-[#02CA3A] bg-[#02CA3A] bg-opacity-20": "text-[#f6b100]  bg-[#f6b100] bg-opacity-20"} rounded-lg px-2 py-1 font-semibold`}>{status}</p>
                     </div>
                     <div className="flex items-center justify-center mt-5 mb-7">
                            <h1 className={`${getRandomBG()} text-white rounded-full p-5 text-xl`}>{initials}</h1>
                     </div>
                     <p className="text-zinc-400 text-xs">Seats: <span className="text-white">{seats}</span></p>
              </div>
       )
}

export default TableCard 

