import Logo from "@/assets/horizon-logo.svg";
import { useUser } from "@/hooks/useUser";
import { Link } from "react-router";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { cn } from "@/lib/utils";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "@/components/ui/button";
import { Loader } from "lucide-react";

const schema = yup.object().shape({
  email: yup.string().email("Enter a valid email").required("Enter your email"),
  password: yup.string().required("Enter your password"),
});

export default function Login() {
  const user = useUser();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleUserLogin = (data: { email: string; password: string }) => {
    console.log(data);
    user?.login(data.email, data.password);
  };
  return (
    <div className="w-full sm:w-[450px]">
      <div className="mb-8">
        <img src={Logo} alt="Horizon Logo" className="mb-10 w-[150px]" />
        <h1 className="text-heading mb-3 text-4xl font-bold">Log in</h1>
        <p className="text-body">Welcome back! Please enter your details.</p>
      </div>
      <form id="login" onSubmit={handleSubmit(handleUserLogin)}>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="text-label mb-1.5 block text-sm font-medium"
          >
            Email
          </label>
          <input
            {...register("email")}
            type="email"
            name="email"
            id="email"
            // autoComplete="off"
            placeholder="Enter your email"
            className={cn(
              "placeholder:text-body-light focus:ring-main focus:border-main mt-1 block h-11 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none",
              errors.email && "border-red-600",
            )}
          />
          {errors.email && (
            <p className="mt-2 text-sm text-red-600">
              {errors.email.message as string}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="password"
            className="text-label mb-1.5 block text-sm font-medium"
          >
            Password
          </label>
          <input
            {...register("password")}
            type="password"
            name="password"
            id="password"
            autoComplete="current-password"
            placeholder="Enter your password"
            className={cn(
              "placeholder:text-body-light focus:ring-main focus:border-main mt-1 block h-11 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none",
              errors.password && "border-red-600",
            )}
          />
          {errors.password && (
            <p className="mt-2 text-sm text-red-600">
              {errors.password.message as string}
            </p>
          )}
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="text-main focus:ring-main h-4 w-4 rounded border-gray-300"
            />
            <label
              htmlFor="remember-me"
              className="ml-2 block text-sm text-gray-900"
            >
              Remember me
            </label>
          </div>

          <div className="text-sm">
            <Link
              to="/forgot-password"
              className="from-main to-main2 bg-gradient-to-r bg-clip-text font-semibold text-transparent"
            >
              Forgot your password?
            </Link>
          </div>
        </div>

        <div className="mt-6">
          <Button
            type="submit"
            disabled={user?.loading}
            className="from-main to-main2 hover:bg-secondary focus:ring-main disabled:bg-main/50 flex h-auto w-full cursor-pointer items-center justify-center gap-2 rounded-md border border-transparent bg-gradient-to-r px-4 py-2.5 font-semibold text-white focus:ring-2 focus:ring-offset-2 focus:outline-none"
          >
            {user?.loading && (
              <Loader className="animate-spin" color="#fff" size="20" />
            )}
            Login
          </Button>

          <p className="text-body mt-8 text-center">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="from-main to-main2 bg-gradient-to-r bg-clip-text font-semibold text-transparent"
            >
              Sign up
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}
