import Logo from "@/assets/horizon-logo.svg";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";

export default function Homepage() {
  const navigate = useNavigate();
  return (
    <section className="h-screen bg-zinc-100">
      <div className="container mx-auto flex h-full items-center justify-center px-4">
        <div className="flex max-w-3xl flex-col items-center">
          <img src={Logo} alt="Horizon " className="mb-4 w-[200px]" />

          <div>
            <h1 className="from-main to-main2 bg-gradient-to-b bg-clip-text text-center text-4xl font-bold text-transparent">
              Welcome to Horizon Banking Platform
            </h1>
            <p className="text-body mt-2 text-center leading-normal">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium quia minima ut ab deleniti excepturi nulla hic
              corrupti explicabo vel neque facere consequuntur ipsa, eligendi,
              porro illo accusantium sed incidunt?
            </p>

            <div className="mt-6 flex items-center justify-center gap-3">
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
