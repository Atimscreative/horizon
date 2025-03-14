import React from "react";
import Logo from "@/assets/horizon-logo.svg";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";

export default function Homepage() {
  const navigate = useNavigate();
  return (
    <section className="h-screen bg-zinc-100">
      <div className="container mx-auto px-4 flex justify-center h-full items-center">
        <div className="flex items-center flex-col max-w-3xl">
          <img src={Logo} alt="Horizon " className="w-[200px] mb-4" />

          <div>
            <h1 className="text-center text-transparent bg-gradient-to-b from-main to-secondary bg-clip-text font-bold text-4xl">
              Welcome to Horizon Banking Platform
            </h1>
            <p className="text-center text-body leading-normal mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium quia minima ut ab deleniti excepturi nulla hic
              corrupti explicabo vel neque facere consequuntur ipsa, eligendi,
              porro illo accusantium sed incidunt?
            </p>

            <div className="flex justify-center items-center gap-3 mt-6">
              <Button
                variant="outline"
                onClick={() => navigate("/login")}
                className="cursor-pointer"
              >
                Login
              </Button>
              <Button
                onClick={() => navigate("/register")}
                className="cursor-pointer"
              >
                Register
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
