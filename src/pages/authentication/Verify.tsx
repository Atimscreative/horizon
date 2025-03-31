// import { useUser } from "@/hooks/useUser";
import { account } from "@/lib/appwrite";
import { Loader } from "lucide-react";
import { useEffect, useState } from "react";
import Logo from "@/assets/horizon-logo.svg";
import { useSearchParams } from "react-router";
import VerifySent from "@/components/auth/VerifySent";
import VerifySuccess from "@/components/auth/VerifySuccess";
import VerifyFailed from "@/components/auth/VerifyFailed";
// import {} from "../../assets/pattern.png"

export default function Verify() {
  const [searchParams] = useSearchParams();
  const secret = searchParams.get("secret");
  const userId = searchParams.get("userId");
  // const user = useUser();
  const [status, setStatus] = useState<string>("sent");
  const [loading, setLoading] = useState(false);

  // EMAIL STATUS UI
  function displayEmailUi(status: string) {
    switch (status) {
      case "sent":
        return <VerifySent />;
      case "success":
        return <VerifySuccess />;
      case "failed":
        return <VerifyFailed setStatus={setStatus} />;

      default:
        return null;
    }
  }

  useEffect(() => {
    if (!secret && !userId) return;

    setLoading(true);
    async function verify() {
      try {
        await account.updateVerification(userId as string, secret as string);
        setStatus("success");
      } catch (error: any) {
        console.log(error);
        setStatus("failed");
      } finally {
        setLoading(false);
      }
    }

    verify();
  }, [secret, userId]);

  return (
    <div className="bg-verify h-screen w-full bg-cover bg-center p-4 py-16">
      <img src={Logo} alt="Horizon Logo" className="mx-auto mb-10 w-[150px]" />

      {/* EMAIL LOADING STATE */}
      {loading && (
        <div className="text-body-light flex h-[300px] flex-col items-center justify-center py-10">
          <Loader size={100} className="animate-spin" />
          <span className="mt-4 inline-block">
            Verification in progress.....
          </span>
        </div>
      )}

      {!loading && displayEmailUi(status)}
    </div>
  );
}
