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
      <header className="absolute top-0 left-0 z-[999] w-full border-b border-gray-200 bg-white py-4 lg:hidden">
        <div className="container mx-auto flex justify-between gap-3 px-4">
          <div className="flex items-center gap-3">
            <span
              onClick={() => setShowNav((prev) => !prev)}
              className="to-main2 from-main inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-[8px] bg-gradient-to-r"
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
              className="h-12 w-12 rounded-full"
            />
            <div className="hidden flex-col sm:flex">
              <p className="text-label text-sm font-semibold">Adrian Hajdin</p>
              <p className="text-body-light text-sm">adrian@jsmastery.pro</p>
            </div>
          </div>
        </div>
      </header>

      <MobileDashboardSidebar open={showNav} setOpen={setShowNav} />
    </>
  );
}
