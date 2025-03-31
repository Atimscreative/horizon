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



export default function UserProvider(props: any) {
  const [user, setUser] = useState<null | any>(null);
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <UserContext.Provider value={{ user, loading, setLoading, setUser }}>
      {props.children}
    </UserContext.Provider>
  );
}
