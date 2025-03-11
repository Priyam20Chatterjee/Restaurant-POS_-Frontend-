// import React from 'react'
import BottomNav from "../components/shared/BottomNav";
import Greetings from "../components/home/Greetings";
const Home = () => {
  return (
    <section className="bg-zinc-800 h-[calc(100vh-5rem)] overflow-hidden flex gap-3 ">
      <div className="flex-[3]">
        <Greetings />
      </div>

      <div className="flex-[2] bg-blue-400"></div>
      <BottomNav />
    </section>
  );
};

export default Home;
