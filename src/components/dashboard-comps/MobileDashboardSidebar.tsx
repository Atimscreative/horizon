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
        "fixed top-0 z-40 h-screen w-full bg-black/20 pt-20 transition-all duration-300",
        open ? "left-0 opacity-100" : "-left-full opacity-0",
      )}
    >
      <nav className="h-full w-[90%] space-y-4 bg-white px-4 py-10">
        {navMenus.map((menu, index) => (
          <Link
            key={index}
            onClick={() => setOpen(false)}
            to={menu.to}
            className={cn(
              "group text-label hover:text-main flex items-center rounded-[8px] p-3 font-medium",
              location.pathname === menu.to &&
                "from-main to-main2 bg-gradient-to-r text-white",
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
