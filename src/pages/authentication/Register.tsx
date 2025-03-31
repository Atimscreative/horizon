import Logo from "@/assets/horizon-logo.svg";
import { Link } from "react-router";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { cn } from "@/lib/utils";
import { yupResolver } from "@hookform/resolvers/yup";
import { useUser } from "@/hooks/useUser";
import { RegisterFormInputs } from "@/context/user";
import { Eye, EyeClosed, Loader } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const schema = yup.object().shape({
  firstName: yup.string().required("Enter your first name"),
  lastName: yup.string().required("Enter your last name"),
  address: yup.string().required("Enter your address"),
  state: yup.string().required("Enter your state"),
  postalCode: yup.string().required("Enter your postal code"),
  dateOfBirth: yup
    .string()
    .matches(/^\d{4}-\d{2}-\d{2}$/, "Enter a valid date (YYYY-MM-DD)")
    .required("Enter your date of birth"),
  ssn: yup
    .string()
    .matches(/^\d{4}$/, "Enter last 4 digits of SSN")
    .required("Enter your SSN"),
  email: yup.string().email("Enter a valid email").required("Enter your email"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Enter your password"),
});

export default function Register() {
  const user = useUser();
  const [visible, setVisible] = useState<boolean>(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<RegisterFormInputs>({
    resolver: yupResolver(schema),
  });

  const handleUserRegister = (data: any) => {
    console.log(data);
    user?.register(data);
  };

  const toggleVisibility = () => {
    setVisible((prev: boolean) => !prev);
  };

  return (
    <div className="w-full pb-6 sm:w-[450px]">
      <div className="mb-8">
        <img src={Logo} alt="Horizon Logo" className="mb-10 w-[150px]" />
        <h1 className="text-heading mb-3 text-4xl font-bold">Sign up</h1>
        <p className="text-body">Please enter your details.</p>
      </div>
      <form id="register" onSubmit={handleSubmit(handleUserRegister)}>
        <div className="mb-4 grid grid-cols-2 gap-4">
          {/* ---------- FIRSTNAME -------- */}
          <div className="">
            <label
              htmlFor="firstName"
              className="text-label mb-1.5 block text-sm font-medium"
            >
              First Name
            </label>
            <input
              {...register("firstName")}
              type="text"
              name="firstName"
              id="firstName"
              autoComplete="off"
              placeholder="ex: John"
              className="placeholder:text-body-light focus:ring-main focus:border-main mt-1 block h-11 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none"
            />
          </div>

          {/* ---------- LASTNAME -------- */}
          <div className="">
            <label
              htmlFor="lastName"
              className="text-label mb-1.5 block text-sm font-medium"
            >
              Last Name
            </label>
            <input
              {...register("lastName")}
              type="text"
              name="lastName"
              id="lastName"
              autoComplete="off"
              placeholder="ex: Doe"
              className="placeholder:text-body-light focus:ring-main focus:border-main mt-1 block h-11 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none"
            />
          </div>
        </div>

        {/* ADDRESS */}
        <div className="mb-4">
          <label
            htmlFor="address"
            className="text-label mb-1.5 block text-sm font-medium"
          >
            Address
          </label>
          <input
            {...register("address")}
            type="text"
            name="address"
            id="address"
            autoComplete="off"
            placeholder="Enter your specific address"
            className="placeholder:text-body-light focus:ring-main focus:border-main mt-1 block h-11 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none"
          />
        </div>

        {/* STATE & POSTAL */}
        <div className="mb-4 grid grid-cols-2 gap-4">
          {/* ---------- STATE -------- */}
          <div className="">
            <label
              htmlFor="state"
              className="text-label mb-1.5 block text-sm font-medium"
            >
              State
            </label>
            <input
              {...register("state")}
              type="text"
              name="state"
              id="state"
              autoComplete="off"
              placeholder="ex: NY"
              className="placeholder:text-body-light focus:ring-main focus:border-main mt-1 block h-11 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none"
            />
          </div>

          {/* ---------- POSTER CODE -------- */}
          <div className="">
            <label
              htmlFor="postalCode"
              className="text-label mb-1.5 block text-sm font-medium"
            >
              Postal Code
            </label>
            <input
              {...register("postalCode")}
              type="text"
              name="postalCode"
              id="postalCode"
              autoComplete="off"
              placeholder="ex: 11101"
              className="placeholder:text-body-light focus:ring-main focus:border-main mt-1 block h-11 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none"
            />
          </div>
        </div>

        <div className="mb-4 grid grid-cols-2 gap-4">
          {/* ---------- DATE OF BIRTH -------- */}
          <div className="">
            <label
              htmlFor="dateOfBirth"
              className="text-label mb-1.5 block text-sm font-medium"
            >
              Date of Birth
            </label>
            <input
              {...register("dateOfBirth")}
              type="text"
              name="dateOfBirth"
              id="dateOfBirth"
              autoComplete="off"
              placeholder="yyyy-mm-dd"
              className="placeholder:text-body-light focus:ring-main focus:border-main mt-1 block h-11 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none"
            />
          </div>

          {/* ---------- SSN -------- */}
          <div className="">
            <label
              htmlFor="SSN"
              className="text-label mb-1.5 block text-sm font-medium"
            >
              SSN
            </label>
            <input
              {...register("ssn")}
              type="text"
              name="ssn"
              id="ssn"
              autoComplete="off"
              placeholder="ex: 1234"
              className={cn(
                "placeholder:text-body-light focus:ring-main focus:border-main mt-1 block h-11 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none",
                errors.ssn && "border-red-600",
              )}
            />
          </div>
        </div>

        {/* EMAIL */}
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

        {/* PASSWORD */}
        <div className="mb-4">
          <label
            htmlFor="password"
            className="text-label mb-1.5 block text-sm font-medium"
          >
            Password
          </label>
          <div className="relative">
            <input
              {...register("password")}
              type={visible ? "text" : "password"}
              name="password"
              id="password"
              autoComplete="current-password"
              placeholder="Enter your password"
              className={cn(
                "placeholder:text-body-light focus:ring-main focus:border-main mt-1 block h-11 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none",
                errors.password && "border-red-600",
              )}
            />
            <span
              onClick={toggleVisibility}
              className="text-body-light absolute right-4 bottom-1/2 translate-y-1/2 cursor-pointer"
            >
              {visible ? <Eye size={20} /> : <EyeClosed size={20} />}
            </span>
          </div>
          {errors.password && (
            <p className="mt-2 text-sm text-red-600">
              {errors.password.message as string}
            </p>
          )}
        </div>

        <div className="mt-6">
          <Button
            disabled={user?.loading}
            className="from-main to-main2 hover:bg-secondary focus:ring-main disabled:bg-main/50 flex h-auto w-full cursor-pointer items-center justify-center gap-2 rounded-md border border-transparent bg-gradient-to-r px-4 py-2.5 font-semibold text-white focus:ring-2 focus:ring-offset-2 focus:outline-none"
          >
            {user?.loading && (
              <Loader className="animate-spin" color="#fff" size="20" />
            )}
            Sign up
          </Button>

          <p className="text-body mt-8 text-center">
            Already have an account?{" "}
            <Link
              to="/login"
              className="from-main to-main2 bg-gradient-to-r bg-clip-text font-semibold text-transparent"
            >
              Sign In
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}
