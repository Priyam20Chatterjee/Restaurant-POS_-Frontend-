// import React from 'react'

// eslint-disable-next-line react/prop-types
const MiniCard = ({title, number, icon, footerNum}) => {
    return (
      <div className="bg-zinc-700 py-5 px-5 rounded-lg w-[50%]">
          <div className="flex justify-between items-start">
              <h1 className="text-white text-lg font-semibold tracking-wide">{title}</h1>
              <button className={`${title === "Total Earnings" ? "bg-[#02ca3a]" : "bg-[#f6B100]"} p-3 rounded-lg text-white text-2xl`}>{icon}</button>
          </div>
          <div>
              <h1 className="text-white text-3xl font-bold mt-3">{number}</h1>
              <h1 className="text-white text-lg mt-2"><span className="text-[#02ca3a]">{footerNum}%</span> than Yesterday</h1>
          </div>
      </div>
    );
};

export default MiniCard