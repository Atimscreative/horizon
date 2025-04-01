import { MailOpen } from "lucide-react";
import { useSearchParams } from "react-router";

// const SECS_BEFORE_RESEND_MAIL = 60;

const VerifySent = () => {
  const [searchParams] = useSearchParams();
  const email = searchParams.get("email");
  // const [timeLeft, setTimeLeft] = useState(SECS_BEFORE_RESEND_MAIL);

  // TIMER COUNTDOWN
  // useEffect(() => {
  //   if (timeLeft <= 0) return;
  //   const timer = setInterval(() => {
  //     setTimeLeft((prev) => prev - 1);

  //     console.log(SECS_BEFORE_RESEND_MAIL - 1);
  //   }, 1000);

  //   return () => clearInterval(timer);
  // }, [timeLeft]);

  // const min = Math.floor(timeLeft / 60);
  // const sec = timeLeft % 60;

  return (
    <div className="mx-auto flex flex-col items-center py-10 md:max-w-xl lg:max-w-3xl">
      <span className="text-main mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-blue-50">
        <MailOpen size={32} />
      </span>
      <h1 className="text-heading mb-2 text-center text-2xl font-semibold">
        Verify Your email
      </h1>
      <p className="text-body text-center leading-normal">
        We've sent a verification link to <strong>{email}</strong> to confirm
        the validity of your email address. Please check your inbox (and spam
        folder) to complete your registration.
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

export default VerifySent;
