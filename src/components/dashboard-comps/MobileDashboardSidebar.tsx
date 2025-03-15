import { navMenus } from "./DashboardSidebar";
import { Link } from "react-router";
import { cn } from "@/lib/utils";

export default function MobileDashboardSidebar() {
  return (
    <aside>
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
    </aside>
  );
}
