import Logo from "@/assets/horizon-logo.svg";
import { Link } from "react-router";

export default function Register() {
  return (
    <div className="w-full sm:w-[450px] pb-6">
      <div className="mb-8">
        <img src={Logo} alt="Horizon Logo" className="w-[150px] mb-10" />
        <h1 className="text-heading font-bold text-4xl mb-3">Sign up</h1>
        <p className="text-body">Please enter your details.</p>
      </div>
      <form id="login">
        <div className="grid grid-cols-2 gap-4 mb-4">
          {/* ---------- FIRSTNAME -------- */}
          <div className="">
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-label mb-1.5"
            >
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              autoComplete="off"
              placeholder="ex: John"
              className="mt-1 block w-full h-11 px-3 py-2 border placeholder:text-body-light border-gray-300 rounded-md focus:outline-none focus:ring-main focus:border-main text-sm"
            />
          </div>

          {/* ---------- LASTNAME -------- */}
          <div className="">
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-label mb-1.5"
            >
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              autoComplete="off"
              placeholder="ex: Doe"
              className="mt-1 block w-full h-11 px-3 py-2 border placeholder:text-body-light border-gray-300 rounded-md focus:outline-none focus:ring-main focus:border-main text-sm"
            />
          </div>
        </div>

        {/* ADDRESS */}
        <div className="mb-4">
          <label
            htmlFor="address"
            className="block text-sm font-medium text-label mb-1.5"
          >
            Address
          </label>
          <input
            type="text"
            name="address"
            id="address"
            autoComplete="off"
            placeholder="Enter your specific address"
            className="mt-1 block w-full h-11 px-3 py-2 border placeholder:text-body-light border-gray-300 rounded-md focus:outline-none focus:ring-main focus:border-main text-sm"
          />
        </div>

        {/* STATE & POSTAL */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          {/* ---------- STATE -------- */}
          <div className="">
            <label
              htmlFor="state"
              className="block text-sm font-medium text-label mb-1.5"
            >
              State
            </label>
            <input
              type="text"
              name="state"
              id="state"
              autoComplete="off"
              placeholder="ex: NY"
              className="mt-1 block w-full h-11 px-3 py-2 border placeholder:text-body-light border-gray-300 rounded-md focus:outline-none focus:ring-main focus:border-main text-sm"
            />
          </div>

          {/* ---------- POSTER CODE -------- */}
          <div className="">
            <label
              htmlFor="postalCode"
              className="block text-sm font-medium text-label mb-1.5"
            >
              Postal Code
            </label>
            <input
              type="text"
              name="postalCode"
              id="postalCode"
              autoComplete="off"
              placeholder="ex: 11101"
              className="mt-1 block w-full h-11 px-3 py-2 border placeholder:text-body-light border-gray-300 rounded-md focus:outline-none focus:ring-main focus:border-main text-sm"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          {/* ---------- DATE OF BIRTH -------- */}
          <div className="">
            <label
              htmlFor="dateOfBirth"
              className="block text-sm font-medium text-label mb-1.5"
            >
              Date of Birth
            </label>
            <input
              type="text"
              name="dateOfBirth"
              id="dateOfBirth"
              autoComplete="off"
              placeholder="yyyy-mm-dd"
              className="mt-1 block w-full h-11 px-3 py-2 border placeholder:text-body-light border-gray-300 rounded-md focus:outline-none focus:ring-main focus:border-main text-sm"
            />
          </div>

          {/* ---------- SSN -------- */}
          <div className="">
            <label
              htmlFor="SSN"
              className="block text-sm font-medium text-label mb-1.5"
            >
              SSN
            </label>
            <input
              type="text"
              name="SSN"
              id="SSN"
              autoComplete="off"
              placeholder="ex: 1234"
              className="mt-1 block w-full h-11 px-3 py-2 border placeholder:text-body-light border-gray-300 rounded-md focus:outline-none focus:ring-main focus:border-main text-sm"
            />
          </div>
        </div>

        {/* EMAIL */}
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

        {/* PASSWORD */}
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

        <div className="mt-6">
          <button
            type="submit"
            className="w-full flex h-auto justify-center cursor-pointer py-2.5 px-4 border border-transparent rounded-md font-semibold text-white from-main to-secondary bg-gradient-to-r hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-main"
          >
            Sign up
          </button>

          <p className="text-center mt-8 text-body">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-semibold bg-gradient-to-r from-main to-secondary bg-clip-text text-transparent"
            >
              Sign In
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}
