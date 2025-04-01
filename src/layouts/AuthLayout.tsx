import { Outlet, useLocation } from "react-router";
import Img from "@/assets/dashboard.png";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/sonner";

export default function AuthLayout() {
  const location = useLocation();
  console.log(location.pathname, location);

  return (
    <>
      <Toaster richColors position="top-right"  theme="light" />

      <section className="grid grid-cols-1 overflow-x-hidden md:h-screen lg:grid-cols-2">
        <div
          className={cn(
            "flex justify-center overflow-y-auto p-6 lg:p-16",
            location.pathname === "/login" && "items-center",
            location.pathname === "/register" && "items-start",
          )}
        >
          <div>
            <Outlet />
          </div>
        </div>
        <div className="relative hidden bg-[#F3F9FF] p-6 lg:block">
          <img
            src={Img}
            alt="Dashboard"
            className="border-heading absolute top-1/2 left-24 -translate-y-1/2 rounded-2xl border-4 md:max-w-[700px]"
          />
        </div>
      </section>
    </>
  );
}
