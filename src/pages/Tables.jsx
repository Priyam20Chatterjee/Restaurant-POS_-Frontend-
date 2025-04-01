// import React from 'react'
import { useState } from "react" 
import {BackButton} from "../components/shared/BackButton"
import BottomNav from "../components/shared/BottomNav"
import TableCard from "../components/table/TableCard"
import {tables} from "../constants/index"
const Tables = () => {
  
  const[status, setStatus] = useState("all")

  return (
    <section className="bg-zinc-800 h-[calc(100vh-5rem)]">
      <div className="flex items-center justify-between px-10 py-4">
        <div className="flex items-center gap-4">
          <BackButton/>
          <h1 className="text-white text-2xl tracking-wider font-bold">Tables</h1>
        </div>

        <div className="flex items-center justify-around gap-4 text-[#ababab]">
          <button className={`text-lg px-4 py-2 rounded-lg font-semibold ${status === "all" && "bg-[#383838]"}`} onClick={()=>setStatus("all")}>All</button>
          <button className={`text-lg px-4 py-2 rounded-lg font-semibold ${status === "booked" && "bg-[#383838]"}`} onClick={()=>setStatus("booked")}>Booked</button>
        </div>
      </div>

      <div className="px-16 py-4 flex flex-wrap gap-5 items-center justify-center overflow-y-scroll h-[calc(100vh-15rem)] no-scrollbar">
          {
            tables.map((table)=>{
              return (
                <TableCard tableNum={table.name} id={table.id} status={table.status} initials={table.initial} seats={table.seats} key={table.id}/>
              )
            })
           }
      </div> 
      
      <BottomNav />
    </section>
  )
}
 
export default Tables
