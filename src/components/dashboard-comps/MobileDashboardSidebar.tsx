import { Link, useLocation } from "react-router";
import { cn } from "@/lib/utils";
import { navMenus } from "@/utils/dashboard";

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

export default function MobileDashboardSidebar({ open, setOpen }: Props) {
  const location = useLocation();
  console.log(open, "nav");

  return (
    <aside
      className={cn(
        "fixed w-full duration-300 top-0 h-screen pt-20 transition-all bg-black/20",
        open ? "left-0 opacity-100 " : "-left-full opacity-0"
      )}
    >
      <nav className="px-4 w-[90%] py-10 space-y-4 bg-white h-full">
        {navMenus.map((menu, index) => (
          <Link
            key={index}
            onClick={() => setOpen(false)}
            to={menu.to}
            className={cn(
              "flex items-center group rounded-[8px] text-label p-3 font-medium hover:text-main",
              location.pathname === menu.to &&
                "bg-gradient-to-r from-main to-main2 text-white"
            )}
          >
            <span>
              <menu.icon
                variant="Outline"
                size={20}
                className="group-hover:stroke-main"
                color={location.pathname === menu.to ? "#fff" : "#344054"}
              />
            </span>
            <span className="ml-4">{menu.name}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}
