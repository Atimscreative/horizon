import { ID } from "appwrite";
import { useState } from "react";
import { account, databases } from "../lib/appwrite";
import { UserContext } from "@/hooks/useUser";

// type IRegister = {
//   email: string;
//   password: string;
// };

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

export default function UserProvider(props: any) {
  const [user, setUser] = useState<null | any>(null);
  const [loading, setLoading] = useState<boolean>(false);

  async function login(email: string, password: string) {
    setLoading(true);
    try {
      const loggedIn = await account.createEmailPasswordSession(
        email,
        password,
      );
      setUser(loggedIn);
      verifyEmail();
      window.location.replace("/verify");
    } catch (error: unknown) {
      console.log(error, "User Login");
    } finally {
      setLoading(false);
    }
  }

  async function logout() {
    await account.deleteSession("current");
    setUser(null);
    window.location.replace("/login");
  }

  async function register(data: RegisterFormInputs) {
    setLoading(true);
    try {
      const { email, password } = data;
      const user = await account.create(ID.unique(), email, password);
      await databases.createDocument(
        DATABASE_ID,
        USERS_COLLECTION_ID,
        "unique()",
        {
          userId: user.$id,
          ...data,
        },
      );
      await login(email, password);
    } catch (error: unknown) {
      console.log(error, "User register");
    } finally {
      setLoading(false);
    }
  }

  async function verifyEmail() {
    try {
      account.createVerification(`${"http://localhost:3000"}/verify`);
      console.log("Email sent");
    } catch (error: any) {
      console.log(error, "Verify Email");
    }
  }

  console.log(user, "USER");

  return (
    <UserContext.Provider
      value={{ user, login, logout, register, loading, verifyEmail, setUser }}
    >
      {props.children}
    </UserContext.Provider>
  );
}
