import { Outlet, useLocation } from "react-router";
import Img from "@/assets/dashboard.png";
import { cn } from "@/lib/utils";

export default function AuthLayout() {
  const location = useLocation();
  console.log(location.pathname, location);

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 md:h-screen overflow-x-hidden">
      <div
        className={cn(
          "flex justify-center p-6 lg:p-16 overflow-y-auto",
          location.pathname === "/login" && "items-center",
          location.pathname === "/register" && "items-start"
        )}
      >
        <div>
          <Outlet />
        </div>
      </div>
      <div className="bg-[#F3F9FF] relative hidden lg:block p-6 ">
        <img
          src={Img}
          alt="Dashboard"
          className="border-4 rounded-2xl md:max-w-[700px] absolute top-1/2 -translate-y-1/2 left-24 border-heading"
        />
      </div>
    </section>
  );
}
