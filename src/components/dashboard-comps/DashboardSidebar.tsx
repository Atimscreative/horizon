import Logo from "@/assets/horizon-logo.svg";
import { cn } from "@/lib/utils";
import { Bell, EllipsisVertical, LogOut, UserCircle } from "lucide-react";
import { Link, useLocation } from "react-router";
import UserImg from "@/assets/jsmastery.png";
import { navMenus } from "@/utils/dashboard";
import { useUser } from "@/hooks/useUser";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

const DasboardSidebar = () => {
  const location = useLocation();
  const { logout } = useUser();
  return (
    <aside className="hidden h-screen w-full flex-col justify-between border-r border-gray-200 bg-white px-6 py-8 pb-5 lg:flex">
      <div>
        <Link to="/dashboard">
          <img src={Logo} alt="Horizon Logo" />
        </Link>

        <div className="mt-6 w-full">
          <input
            type="text"
            id="search"
            aria-label="Search"
            placeholder="Search..."
            className="placeholder:text-body-light focus:ring-main focus:border-main mt-1 block h-11 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none"
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
                "text-label flex items-center rounded-[8px] p-3 font-medium",
                location.pathname === menu.to &&
                  "from-main to-main2 bg-gradient-to-r text-white",
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

      <div className="flex items-center justify-between border-t border-gray-200 pt-4">
        <Popover>
          <PopoverTrigger className="flex w-full cursor-pointer items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src={UserImg}
                alt="user avatar"
                className="h-10 w-10 rounded-full"
              />
              <div className="flex grow flex-col">
                <p className="text-label text-left text-xs font-semibold">
                  Adrian Hajdin
                </p>
                <p className="text-body-light text-left text-xs">
                  adrian@jsmastery.pro
                </p>
              </div>
            </div>
            <EllipsisVertical className="" />
          </PopoverTrigger>
          <PopoverContent side="top" className="w-[250px] p-0">
            <div className="flex items-center gap-3 border-b p-1">
              <img
                src={UserImg}
                alt="user avatar"
                className="h-10 w-10 rounded-full"
              />
              <div className="flex flex-col">
                <p className="text-label text-left text-xs font-semibold">
                  Adrian Hajdin
                </p>
                <p className="text-body-light text-left text-xs">
                  adrian@jsmastery.pro
                </p>
              </div>
            </div>

            <div className="p-1">
              <Link
                to="/dashboard/my-account"
                className="text-label hover:text-main flex cursor-pointer gap-2 rounded-sm p-2 hover:bg-blue-50"
              >
                <UserCircle size={20} />
                <span className="text-sm">Acount</span>
              </Link>
              <div className="text-label hover:text-main flex cursor-pointer gap-2 rounded-sm p-2 hover:bg-blue-50">
                <Bell size={20} />
                <span className="text-sm">Notification</span>
              </div>
            </div>

            <hr />
            <div className="p-1">
              <div
                aria-label="Logout"
                onClick={() => logout()}
                className="text-label hover:text-main flex cursor-pointer gap-2 rounded-sm p-2 hover:bg-blue-50"
              >
                <LogOut size={20} />
                <span className="text-sm">Logout</span>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </aside>
  );
};

export default DasboardSidebar;
