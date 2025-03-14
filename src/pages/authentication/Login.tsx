import Logo from "@/assets/horizon-logo.svg";
import { Link } from "react-router";

export default function Login() {
  return (
    <div className="w-full sm:w-[450px]">
      <div className="mb-8">
        <img src={Logo} alt="Horizon Logo" className="w-[150px] mb-10" />
        <h1 className="text-heading font-bold text-4xl mb-3">Log in</h1>
        <p className="text-body">Welcome back! Please enter your details.</p>
      </div>
      <form id="login">
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-label mb-1.5"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            autoComplete="off"
            placeholder="Enter your email"
            className="mt-1 block w-full h-11 px-3 py-2 border placeholder:text-body-light border-gray-300 rounded-md focus:outline-none focus:ring-main focus:border-main text-sm"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-label mb-1.5"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            autoComplete="current-password"
            placeholder="Enter your password"
            className="mt-1 block w-full h-11 px-3 py-2 border placeholder:text-body-light border-gray-300 rounded-md focus:outline-none focus:ring-main focus:border-main text-sm"
          />
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="h-4 w-4 text-main focus:ring-main border-gray-300 rounded"
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
              className="font-semibold bg-gradient-to-r from-main to-secondary bg-clip-text text-transparent"
            >
              Forgot your password?
            </Link>
          </div>
        </div>

        <div className="mt-6">
          <button
            type="submit"
            className="w-full flex h-auto justify-center cursor-pointer py-2.5 px-4 border border-transparent rounded-md font-semibold text-white from-main to-secondary bg-gradient-to-r hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-main"
          >
            Login
          </button>

          <p className="text-center mt-8 text-body">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="font-semibold bg-gradient-to-r from-main to-secondary bg-clip-text text-transparent"
            >
              Sign up
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}
