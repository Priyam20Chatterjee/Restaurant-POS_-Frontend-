import { FaSearch } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import logo from "../../assets/images/logo.png";

const Header = () => {
  return (
    <header className="flex justify-between items-center py-5 px-8 bg-[#1a1a1a] ">
      <div className="flex items-center gap-2">
        <img src={logo} className="h-8 w-9 " alt="restaurant logo" />
        <h1 className="text-lg font-semibold text-[#f5f5f5]">Restro</h1>
      </div>

      <div className="flex items-center gap-4 bg-[#6D6A6A] px-5 py-2 rounded-[20px] w-[500px]">
        <FaSearch className="text-[#f5f5f5]" />
        <input
          type="text"
          placeholder="Search your food items here..."
          className="bg-[#6D6A6A] text-[#f5f5f5] outline-none"
        />
      </div>

      <div className="flex items-center gap-5">
        <div className="cursor-pointer">
          <FaBell className="text-[#f5f5f5] text-3xl" />
        </div>

        <div className="flex items-center gap-3 cursor-pointer">
          <FaUserCircle className="text-[#f5f5f5] text-4xl" />
          <div className="flex flex-col items-start">
            <h1 className="text-md text-[#f5f5f5]">Priyam Chatterjee</h1>
            <p className="text-xs text-[#ababab]">Admin</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
