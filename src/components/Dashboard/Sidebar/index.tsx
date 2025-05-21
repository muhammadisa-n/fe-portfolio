import {
  FaCalendarAlt,
  FaChevronLeft,
  FaChevronRight,
  FaRegChartBar,
  FaRegSun,
  FaStickyNote,
  FaTachometerAlt,
  FaWrench,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="bg-blue-500 h-screen px-[25px] dark:bg-blue-950">
      <div className="px-[15px] py-[30px] flex items-center justify-center border-b-[1px] border-[#EDEDED]/[0.3]">
        <h1 className="text-white text-[20px] leading-[24px] font-extrabold cursor-pointer">
          Dashboard
        </h1>
      </div>
      <Link
        to="/"
        className="flex items-center gap-[15px] py-[20px] border-b-[1px] border-[#EDEDED]/[0.3]"
      >
        <FaTachometerAlt color="white" />
        <p className="text-white leading-[20px] font-bold text-[14px]">
          Dashboard
        </p>
      </Link>
      {/* menu 1 */}
      <div className="pt-[15px] border-b-[1px] border-[#EDEDED]/[0.3]">
        <p className="text-white/[0.4] text-[10px] font-extrabold leading-[16px] text-uppercase">
          INTERFACE
        </p>
        {/* menu item 1 */}
        <Link
          to="/"
          className="flex items-center justify-between gap-[10px] py-[15px] cursor-pointer"
        >
          <div className="flex items-center gap-[10px]">
            <FaRegSun color="white" />
            <p className="text-white text-[14px] leading-[20px] font-normal ">
              Components
            </p>
            <FaChevronRight color="white" />
            <p></p>
          </div>
        </Link>
        {/* menu item 2 */}
        <Link
          to="/"
          className="flex items-center justify-between gap-[10px] py-[15px] cursor-pointer"
        >
          <div className="flex items-center gap-[10px]">
            <FaWrench color="white" />
            <p className="text-white text-[14px] leading-[20px] font-normal ">
              Utilities
            </p>
            <FaChevronRight color="white" />
            <p></p>
          </div>
        </Link>
      </div>

      {/* menu 2 */}
      <div className="pt-[15px] border-b-[1px] border-[#EDEDED]/[0.3]">
        <p className="text-white/[0.4] text-[10px] font-extrabold leading-[16px] text-uppercase">
          ADDONS
        </p>
        {/* menu item 1 */}
        <Link
          to="/"
          className="flex items-center justify-between gap-[10px] py-[15px] cursor-pointer"
        >
          <div className="flex items-center gap-[10px]">
            <FaStickyNote color="white" />
            <p className="text-white text-[14px] leading-[20px] font-normal ">
              Pages
            </p>
            <FaChevronRight color="white" />
            <p></p>
          </div>
        </Link>
        {/* menu item 2 */}
        <Link
          to="/"
          className="flex items-center justify-between gap-[10px] py-[15px] cursor-pointer"
        >
          <div className="flex items-center gap-[10px]">
            <FaRegChartBar color="white" />
            <p className="text-white text-[14px] leading-[20px] font-normal ">
              Charts
            </p>
            <FaChevronRight color="white" />
            <p></p>
          </div>
        </Link>
        <Link
          to="/"
          className="flex items-center gap-[10px] py-[15px] cursor-pointer"
        >
          <FaCalendarAlt color="white" />
          <p className="text-white text-[14px] leading-[20px] font-normal ">
            Tables
          </p>
        </Link>
      </div>
      {/* arrow left */}
      <div className="flex items-center justify-center pt-[15px]">
        <div className="h-[40px] w-[40px] bg-[#3C5EC1] rounded-full flex items-center justify-center cursor-pointer ">
          <FaChevronLeft color="white" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
