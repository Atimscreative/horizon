import Logo from "@/assets/horizon-logo.svg";
import { cn } from "@/lib/utils";
import { Home, IdCard, LogOut } from "lucide-react";
import { Link } from "react-router";
import UserImg from "@/assets/jsmastery.png";

const DasboardSidebar = () => {
  return (
    <aside className="w-full hidden md:flex flex-col justify-between px-6 py-8 bg-white border-r border-gray-200 h-screen">
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
        <nav className="mt-8">
          {navMenus.map((menu, index) => (
            <Link
              key={index}
              to={menu.to}
              className={cn(
                "flex items-center group font-semibold duration-300 pr-3.5 py-4 text-label rounded-md hover:bg-gradient-to-r hover:from-main hover:to-secondary hover:text-white hover:pl-3.5"
                // "bg-gradient-to-r from-main to-secondary text-white pl-3.5"
              )}
            >
              {menu.icon}
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
          <div>
            <p className="font-semibold text-label">Adrian Hajdin</p>
            <p className="text-body-light">adrian@jsmastery.pro</p>
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

export const navMenus = [
  {
    name: "Dashboard",
    to: "/dashboard",
    icon: (
      <Home className="text-body-light duration-300 group-hover:text-white" />
    ),
  },
  {
    name: "My Banks",
    to: "/dashboard/my-banks",
    icon: (
      <Home className="text-body-light duration-300 group-hover:text-white" />
    ),
  },
  {
    name: "Transaction History",
    to: "/dashboard/transaction-history",
    icon: (
      <Home className="text-body-light duration-300 group-hover:text-white" />
    ),
  },
  {
    name: "Payment Transfer",
    to: "/dashboard/payment-transfer",
    icon: (
      <Home className="text-body-light duration-300 group-hover:text-white" />
    ),
  },
  {
    name: "Connect Bank",
    to: "/dashboard/connect-bank",
    icon: (
      <IdCard className="text-body-light duration-300 group-hover:text-white" />
    ),
  },
];
