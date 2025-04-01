import { useEffect, useState } from "react";
import { UserContext } from "@/hooks/useUser";
import { account, databases } from "@/lib/appwrite";
import { ID } from "appwrite";
import { toast } from "sonner";

export interface RegisterFormInputs {
  firstName: string;
  lastName: string;
  address: string;
  state: string;
  postalCode: string;
  dateOfBirth: string;
  ssn: string;
  email: string;
  password: string;
}

const DATABASE_ID = import.meta.env.APPWRITE_DATABASE_ID;
const USERS_COLLECTION_ID = import.meta.env.APPWRITE_USER_COLLECTION_ID;
const isOnboarding =
  window.location.pathname.includes("/register") ||
  window.location.pathname.includes("/login");

export default function UserProvider(props: any) {
  const [user, setUser] = useState<null | any>(null);
  const [loading, setLoading] = useState<boolean>(false);

  // HANDLE USER LOGIN
  async function login(data: { email: string; password: string }) {
    const { email, password } = data;
    setLoading(true);

    try {
      const loggedIn = await account.createEmailPasswordSession(
        email,
        password,
      );
      setUser(loggedIn);
      window.location.replace("/dashboard");
    } catch (error: any) {
      console.log(error, "User Login");
      toast.error(error?.message);
    } finally {
      setLoading(false);
    }
  }

  // HANDLE USER REGISTER
  async function register(data: RegisterFormInputs) {
    setLoading(true);
    try {
      const { email, password } = data;

      // CREATE USER
      const user = await account.create(ID.unique(), email, password);

      // ADD USER DATA TO DATABASE
      await databases.createDocument(
        DATABASE_ID,
        USERS_COLLECTION_ID,
        "unique()",
        {
          userId: user.$id,
          ...data,
        },
      );

      // ROUTE TO EMAIL VERIFICATION PAGE
      window.location.replace(`/verify?email=${data?.email}`);
    } catch (error: unknown) {
      console.log(error, "User register");
    } finally {
      setLoading(false);
    }
  }

  // HANDLE USER LOGOUT
  async function logout() {
    await account.deleteSession("current");
    setUser(null);
    window.location.replace("/login");
  }

  // HANDLE USER EMAIL VERIFICATION
  async function sendVerificationEmail() {
    try {
      account.createVerification("https://example.com/verify");
    } catch (error: any) {
      console.log(error);
    }
  }

  // HANDLE VERIFICATION COMFIRMATION
  async function confirmEmailVerification(userId: string, secret: string) {
    try {
      account.updateVerification(userId, secret);
    } catch (error: any) {
      console.log(error);
    }
  }

  // CHECK IF USER IS AUTHENTICATED
  async function init() {
    console.log(isOnboarding);

    try {
      const loggedIn = await account.get();
      setUser(loggedIn);
      console.log(loggedIn, "Login user");
    } catch (err: any) {
      setUser(null);
      window.location.replace("/login");
      console.log(err.message, err.code);
    }
  }

  useEffect(() => {
    if (
      window.location.pathname === "/register" ||
      window.location.pathname === "/login" ||
      window.location.pathname === "/"
    )
      return;

    init();
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        loading,
        setLoading,
        setUser,
        logout,
        login,
        register,
        sendVerificationEmail,
        confirmEmailVerification,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}
