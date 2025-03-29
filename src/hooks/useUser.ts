import { RegisterFormInputs } from "@/context/user";
import { createContext, useContext } from "react";

export const UserContext = createContext<{
  user: any;
  setUser: (user: any) => void;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  register: (data: RegisterFormInputs) => Promise<void>;
  loading: boolean;
  verifyEmail: () => void;
} | null>(null);

export function useUser() {
  const context = useContext(UserContext);

  if (!context) {
    // Provide a default value when context is null
    return {
      user: null,
      setUser: () => {},
      login: async () => {},
      logout: async () => {},
      register: async () => {},
      loading: false,
      verifyEmail: async () => {},
    };
  }

  return context;
}
