import DasboardSidebar from "@/components/dashboard-comps/DashboardSidebar";
import MobileDashboardNav from "@/components/dashboard-comps/MobileDashboardNav";
import { Outlet } from "react-router";

export default function DashboardLayout() {
  return (
    <section className="grid md:grid-cols-[300px_1fr]">
      <div>
        <MobileDashboardNav />
        <DasboardSidebar />
      </div>
      <div className="w-full h-auto py-6 px-4">
        <Outlet />
      </div>
    </section>
  );
}
