import Logo from "@/assets/horizon-logo.svg";
import { cn } from "@/lib/utils";
import { LogOut } from "lucide-react";
import { Link, useLocation } from "react-router";
import UserImg from "@/assets/jsmastery.png";
import { navMenus } from "@/utils/dashboard";

const DasboardSidebar = () => {
  const location = useLocation();
  return (
    <aside className="w-full hidden lg:flex flex-col justify-between px-6 py-8 bg-white border-r border-gray-200 h-screen">
      <div>
        <Link to="/dashboard">
          <img src={Logo} alt="Horizon Logo" />
        </Link>

        <div className="w-full mt-6">
          <input
            type="text"
            id="search"
            aria-label="Search"
            placeholder="Search..."
            className="mt-1 block w-full h-11 px-3 py-2 border placeholder:text-body-light border-gray-300 rounded-md focus:outline-none focus:ring-main focus:border-main text-sm"
          />
          <span></span>
        </div>

        {/* MENUS */}
        <nav className="mt-8 space-y-3">
          {navMenus.map((menu, index) => (
            <Link
              key={index}
              to={menu.to}
              className={cn(
                "flex items-center  rounded-[8px] text-label p-3 font-medium",
                location.pathname === menu.to &&
                  "bg-gradient-to-r from-main to-main2 text-white"
              )}
            >
              <span>
                <menu.icon
                  variant="Outline"
                  size={20}
                  color={location.pathname === menu.to ? "#fff" : "#344054"}
                />
              </span>
              <span className="ml-4">{menu.name}</span>
            </Link>
          ))}
        </nav>
      </div>

      <div className="border-t flex justify-between items-center border-gray-200 py-4">
        <div className="inline-flex items-center gap-3">
          <img
            src={UserImg}
            alt="user avatar"
            className="w-12 h-12 rounded-full"
          />
          <div className="flex flex-col">
            <p className="font-semibold text-sm text-label">Adrian Hajdin</p>
            <p className="text-body-light text-sm">adrian@jsmastery.pro</p>
          </div>
        </div>
        <span aria-label="Logout" className="cursor-pointer text-body-light">
          <LogOut size={24} />
        </span>
      </div>
    </aside>
  );
};

export default DasboardSidebar;
