import DasboardSidebar from "@/components/dashboard-comps/DashboardSidebar";
import MobileDashboardNav from "@/components/dashboard-comps/MobileDashboardNav";
import { Toaster } from "@/components/ui/sonner";
import { Outlet } from "react-router";

export default function DashboardLayout() {
  // const { setUser } = useUser();
  // const navigate = useNavigate();
  // const location = useLocation();

  // useEffect(() => {
  //   async function init() {
  //     try {
  //       const loggedIn = await account.get();
  //       setUser(loggedIn);
  //       console.log(loggedIn, "Error occured, Sign again");

  //       if (!loggedIn) throw new Error("Error occured, Sign again");
  //       console.log(loggedIn);
  //     } catch (err: any) {
  //       setUser(null);
  //       if (err.code === 401) navigate("/login");
  //       console.log(err);
  //     }
  //   }
  //   init();
  // }, [location.pathname, navigate, setUser]);
  return (
    <>
      <Toaster richColors position="top-right" />
      <section className="grid lg:grid-cols-[300px_1fr]">
        <div>
          <MobileDashboardNav />
          <DasboardSidebar />
        </div>
        <div className="h-auto w-full lg:h-screen lg:overflow-y-auto">
          <div>
            <Outlet />
          </div>
        </div>
      </section>
    </>
  );
}
