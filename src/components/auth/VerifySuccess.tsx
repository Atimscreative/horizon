import { useNavigate } from "react-router";
import { Button } from "../ui/button";
import { MailCheck } from "lucide-react";

const VerifySuccess = () => {
  const navigate = useNavigate();
  return (
    <div className="mx-auto flex flex-col items-center py-10 md:max-w-xl lg:max-w-3xl">
      <span className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-50 text-green-700">
        <MailCheck size={32} />
      </span>
      <h1 className="text-heading mb-2 text-center text-2xl font-semibold">
        Email Verified Successfully!
      </h1>
      <p className="text-body text-center leading-normal">
        Your email has been successfully verified. You can now enjoy full access
        to finance tracker.
      </p>

      {/* <hr className="mx-auto my-6 w-[70%]" /> */}

      <Button
        onClick={() => navigate("/dashboard")}
        className="bg-main hover:bg-main2 mt-6 h-auto cursor-pointer px-4 py-3.5 font-medium text-white"
      >
        Go to Dashboard
      </Button>
    </div>
  );
};

export default VerifySuccess;
