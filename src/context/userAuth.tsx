import { useState } from "react";
import { UserContext } from "@/hooks/useUser";
import { account } from "@/lib/appwrite";

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

export default function UserProvider(props: any) {
  const [user, setUser] = useState<null | any>(null);
  const [loading, setLoading] = useState<boolean>(false);

  async function logout() {
    await account.deleteSession("current");
    setUser(null);
    window.location.replace("/login");
  }

  return (
    <UserContext.Provider
      value={{ user, loading, setLoading, setUser, logout }}
    >
      {props.children}
    </UserContext.Provider>
  );
}
