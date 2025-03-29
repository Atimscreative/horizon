import { Button } from "@/components/ui/button";
import { useUser } from "@/hooks/useUser";
import { account } from "@/lib/appwrite";
import { useEffect } from "react";

export default function Verify() {
  const urlParams = new URLSearchParams(window.location.search);
  const secret = urlParams.get("secret");
  const userId = urlParams.get("userId");
  const user = useUser();

  useEffect(() => {
    async function verify() {
      account.updateVerification(userId as string, secret as string);
    }

    verify();
  }, [secret, userId]);

  return (
    <div>
      <h1>Verify Your email</h1>
      <p>Check your main</p>
      <Button onClick={() => user?.verifyEmail()}>Resend email</Button>
    </div>
  );
}
