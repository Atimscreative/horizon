import Logo from "@/assets/horizon-logo.svg";
import { HambergerMenu } from "iconsax-react";
import UserImg from "@/assets/jsmastery.png";
import { useState } from "react";
import MobileDashboardSidebar from "./MobileDashboardSidebar";
import { X } from "lucide-react";

export default function MobileDashboardNav() {
  const [showNav, setShowNav] = useState<boolean>(false);
  return (
    <>
      <header className="py-4 z-[999] bg-white sticky top-0 left-0 w-full lg:hidden border-b border-gray-200">
        <div className="container mx-auto px-4 flex justify-between gap-3">
          <div className="flex items-center gap-3">
            <span
              onClick={() => setShowNav((prev) => !prev)}
              className="inline-flex cursor-pointer items-center justify-center w-9 h-9 bg-gradient-to-r to-main2 from-main rounded-[8px]"
            >
              {!showNav ? (
                <HambergerMenu size="24" color="#fff" />
              ) : (
                <X size="24" color="#fff" />
              )}
            </span>
            <img src={Logo} alt="Horizon Logo" />
          </div>

          <div className="inline-flex items-center gap-3">
            <img
              src={UserImg}
              alt="user avatar"
              className="w-12 h-12 rounded-full"
            />
            <div className="sm:flex flex-col hidden">
              <p className="font-semibold text-sm text-label">Adrian Hajdin</p>
              <p className="text-body-light text-sm">adrian@jsmastery.pro</p>
            </div>
          </div>
        </div>
      </header>

      <MobileDashboardSidebar open={showNav} setOpen={setShowNav} />
    </>
  );
}
