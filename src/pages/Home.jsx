// import React from 'react'
import BottomNav from "../components/shared/BottomNav";
import Greetings from "../components/home/Greetings";
import MiniCard from "../components/home/MiniCard";
import { BsCashCoin } from "react-icons/bs";
import { GrInProgress } from "react-icons/gr";
import RecentOrder from "../components/home/RecentOrder";

const Home = () => {
  return (
    <section className="bg-zinc-800 h-[calc(100vh-5rem)] overflow-hidden flex gap-3 ">
      <div className="flex-[3]">
        <Greetings />

        <div className="flex items-center w-full gap-3 px-8 mt-8">
          <MiniCard title="Total Earnings" icon={< BsCashCoin/>} number={512} footerNum={1.6}/>
          <MiniCard title="Total Earnings" icon={< GrInProgress/>} number={16} footerNum={3.6}/>
        </div>
        <RecentOrder/>
        </div>

      <div className="flex-[2] bg-blue-400"></div>
      <BottomNav />
    </section>
  );
};

export default Home;
