import { MailCheck } from "lucide-react";
import { Button } from "../ui/button";

const VerifyFailed = ({
  setStatus,
}: {
  setStatus: (state: string) => void;
}) => {
  return (
    <div className="mx-auto flex flex-col items-center py-10 md:max-w-xl lg:max-w-3xl">
      <span className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-red-50 text-red-700">
        <MailCheck size={32} />
      </span>
      <h1 className="text-heading mb-2 text-center text-2xl font-semibold">
        Email Verification Failed!
      </h1>
      <p className="text-body text-center leading-normal">
        Oops! It looks like your verification link is invalid or has expired.
      </p>

      {/* <hr className="mx-auto my-6 w-[70%]" /> */}

      <Button
        onClick={() => setStatus("sent")}
        className="bg-main hover:bg-main2 mt-6 h-auto px-4 py-3.5 font-medium text-white"
      >
        Resend verification email
      </Button>

      <p className="text-body mt-6 text-center">
        If you continue to experience issues, please contact our support team at
        [Support Email].
      </p>
    </div>
  );
};

export default VerifyFailed;
