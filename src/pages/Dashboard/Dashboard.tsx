import { FaRegSun, FaUsers } from "react-icons/fa";
import { FaAppStore } from "react-icons/fa6";
import { BiSolidUserDetail } from "react-icons/bi";
import DashboardLayout from "../../layouts/DashboardLayout";
export default function AdminDashboard() {
  return (
    <DashboardLayout>
      <div className="pt-[25px] px-[25px] dark:bg-dark bg-light">
        <div className="flex items-center justify-between">
          <h1 className=" text-[28px] leading-[34px] font-normal cursor-pointer dark:text-light text-dark">
            Dashboard
          </h1>
        </div>
        {/* card earning */}
        <div className="grid grid-cols-4 gap-[30px] mt-[25px] pb-[15px] ">
          {/* card item */}
          <div className="h-[100px] rounded-[8px]  flex items-center justify-between px-[30px] cursor-pointer hover:shadow-sm transform hover:scale-[103%] transition duration-300 ease-in-out  border-l-[4px]  border-indigo-500 dark:border-b dark:border-indigo-400  dark:shadow-indigo-300 dark:bg-dark bg-light">
            <div>
              <h2 className="text-indigo-500 text-[11px] leading-[17px] font-bold dark:text-light">
                APPS
              </h2>
              <h1 className="text-[20px] leading-[24px]  mt-5px font-bold text-dark dark:text-light">
                10
              </h1>
            </div>
            <FaAppStore fontSize={28} className="text-indigo-500" />
          </div>
          <div className="h-[100px] rounded-[8px]  flex items-center justify-between px-[30px] cursor-pointer hover:shadow-sm transform hover:scale-[103%] transition duration-300 ease-in-out border-green-500  border-l-[4px] dark:border-b dark:border-green-400  dark:shadow-green-300 dark:bg-dark bg-light">
            <div>
              <h2 className="text-green-500 text-[11px] leading-[17px] font-bold dark:text-light">
                USERS
              </h2>
              <h1 className="text-[20px] leading-[24px]  mt-5px font-bold text-dark dark:text-light">
                10
              </h1>
            </div>
            <FaUsers fontSize={28} className="text-green-500" />
          </div>
          <div className="h-[100px] rounded-[8px]  flex items-center justify-between px-[30px] cursor-pointer hover:shadow-sm transform hover:scale-[103%] transition duration-300 ease-in-out border-yellow-500  border-l-[4px] dark:border-b dark:border-yellow-400  dark:shadow-yellow-300 dark:bg-dark bg-light">
            <div>
              <h2 className="text-yellow-500 text-[11px] leading-[17px] font-bold dark:text-light">
                ROLES
              </h2>
              <h1 className="text-[20px] leading-[24px]  mt-5px font-bold text-dark dark:text-light">
                3
              </h1>
            </div>
            <BiSolidUserDetail fontSize={28} className="text-yellow-500" />
          </div>
          <div className="h-[100px] rounded-[8px]  flex items-center justify-between px-[30px] cursor-pointer hover:shadow-sm transform hover:scale-[103%] transition duration-300 ease-in-out border-red-500  border-l-[4px] dark:border-b dark:border-red-400  dark:shadow-red-300 dark:bg-dark bg-light">
            <div>
              <h2 className="text-red-500 text-[11px] leading-[17px] font-bold dark:text-light">
                PERMISSIONS
              </h2>
              <h1 className="text-[20px] leading-[24px]  mt-5px font-bold text-dark dark:text-light">
                30
              </h1>
            </div>
            <FaRegSun fontSize={28} className="text-red-500" />
          </div>
          {/* end card item */}
        </div>
        {/* end carts */}
      </div>
    </DashboardLayout>
  );
}
