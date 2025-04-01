// import React from 'react'
import { useState } from "react";
import BottomNav from "../components/shared/BottomNav";
import OrderCard from "../components/orders/OrderCard";
import { BackButton } from "../components/shared/BackButton";

const Orders = () => {

  const[status, setStatus] = useState("all")

  return (
    <section className="bg-zinc-800 h-[calc(100vh-5rem)] overflow-hidden">
      <div className="flex items-center justify-between px-10 py-4">
        <div className="flex items-center gap-4">
          <BackButton/>
          <h1 className="text-white text-2xl tracking-wider font-bold">Orders</h1>
        </div>
        <div className="flex items-center justify-around gap-4 text-[#ababab]">
          <button className={`text-lg px-4 py-2 rounded-lg font-semibold ${status === "all" && "bg-[#383838]"}`} onClick={()=>setStatus("all")}>All</button>
          <button className={`text-lg px-4 py-2 rounded-lg font-semibold ${status === "progress" && "bg-[#383838]"}`} onClick={()=>setStatus("progress")}>In-Progress</button>
          <button className={`text-lg px-4 py-2 rounded-lg font-semibold ${status === "ready" && "bg-[#383838]"}`} onClick={()=>setStatus("ready")}>Ready</button>
          <button className={`text-lg px-4 py-2 rounded-lg font-semibold ${status === "completed" && "bg-[#383838]"}`} onClick={()=>setStatus("completed")}>Completed</button>
        </div>
      </div>

      <div className="mt-2 flex flex-wrap gap-10 items-center justify-center overflow-y-scroll h-[calc(100vh-15rem)] no-scrollbar">
        < OrderCard />
        < OrderCard />
        < OrderCard />
        < OrderCard />
        < OrderCard />
        < OrderCard />
        < OrderCard />
        < OrderCard />
        < OrderCard />
        < OrderCard />
        < OrderCard />
        < OrderCard />
        < OrderCard />
        < OrderCard />
        < OrderCard />
      </div>

      < BottomNav/>
    </section  >
  ) 
}

export default Orders; 