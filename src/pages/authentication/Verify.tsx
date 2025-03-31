import { Button } from "@/components/ui/button";
import { useUser } from "@/hooks/useUser";
import { account } from "@/lib/appwrite";
import { MailCheck, MailOpen } from "lucide-react";
import { useEffect, useState } from "react";
import Logo from "@/assets/horizon-logo.svg";

const SECS_BEFORE_RESEND_MAIL = 60;

export default function Verify() {
  const urlParams = new URLSearchParams(window.location.search);
  const secret = urlParams.get("secret");
  const userId = urlParams.get("userId");
  const user = useUser();
  const [timeLeft, setTimeLeft] = useState(SECS_BEFORE_RESEND_MAIL);
  const [status, setStatus] = useState<string>("failed");

  function displayEmailUi(status: string) {
    switch (status) {
      case "sent":
        return <VerifySent status={status} />;
      case "success":
        return <VerifySuccess />;
      case "failed":
        return <VerifyFailed setStatus={setStatus} />;

      default:
        return null;
    }
  }

  useEffect(() => {
    async function verify() {
      account.updateVerification(userId as string, secret as string);
    }
    verify();
  }, [secret, userId]);

  // TIMER COUNTDOWN
  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);

      console.log(SECS_BEFORE_RESEND_MAIL - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  // const min = Math.floor(timeLeft / 60);
  // const sec = timeLeft % 60;

  return (
    <div className="p-4 py-16">
      <img src={Logo} alt="Horizon Logo" className="mx-auto mb-10 w-[150px]" />

      {displayEmailUi(status)}
    </div>
  );
}

const VerifySent = ({ status }: { status: string }) => {
  return (
    <div className="flex flex-col items-center">
      <span className="text-main mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-blue-50">
        <MailOpen size={32} />
      </span>
      <h1 className="text-heading mb-2 text-center text-2xl font-semibold">
        Verify Your email
      </h1>
      <p className="text-body text-center leading-normal">
        We've sent a verification link to <strong>abc@gmail.com</strong> to
        confirm the validity of your email address. Please check your inbox (and
        spam folder) to complete your registration.
      </p>

      <hr className="mx-auto my-6 w-[70%]" />

      <p className="text-body text-center leading-normal text-balance">
        Didn't receive the email?{" "}
        <span className="text-main font-medium">Resend verification email</span>
        {/* <span className="text-main font-medium tabular-nums">
            {min < 10 && "0"}
            {min}:{sec < 10 && "0"}
            {sec}
          </span> */}
      </p>
    </div>
  );
};

const VerifySuccess = () => {
  return (
    <div className="flex flex-col items-center">
      <span className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-50 text-green-700">
        <MailCheck size={32} />
      </span>
      <h1 className="text-heading mb-2 text-center text-2xl font-semibold">
        Email Verified Successfully!
      </h1>
      <p className="text-body text-center leading-normal">
        Your email <strong>user@example.com</strong> has been successfully
        verified. You can now enjoy full access to finance tracker.
      </p>

      {/* <hr className="mx-auto my-6 w-[70%]" /> */}

      <Button className="bg-main hover:bg-main2 mt-6 h-auto px-4 py-3.5 font-medium text-white">
        Go to Dashboard
      </Button>
    </div>
  );
};

const VerifyFailed = ({
  setStatus,
}: {
  setStatus: (state: string) => void;
}) => {
  return (
    <div className="flex flex-col items-center">
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
