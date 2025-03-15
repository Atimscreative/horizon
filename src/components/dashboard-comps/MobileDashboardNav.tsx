import Logo from "@/assets/horizon-logo.svg";
import { HambergerMenu } from "iconsax-react";

export default function MobileDashboardNav() {
  return (
    <header className="py-4 md:hidden border-b border-gray-200 md:hidden">
      <div className="container mx-auto px-4">
        <div className="flex gap-3">
          <span className="inline-flex items-center justify-center w-10 h-10 bg-main rounded-[8px]">
            <HambergerMenu size="24" color="#fff" />
          </span>
          <img src={Logo} alt="Horizon Logo" />
        </div>
      </div>
    </header>
  );
}
