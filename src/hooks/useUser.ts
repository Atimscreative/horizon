import { createContext, useContext } from "react";

export const UserContext = createContext<{
  user: any;
  setUser: (user: any) => void;
  loading: boolean;
  setLoading: (status: boolean) => void;
  login: (data: any) => Promise<void>;
  register: (data: any) => Promise<void>;
  logout: () => Promise<void>;
  sendVerificationEmail: () => Promise<void>;
  confirmEmailVerification: (userId: string, secret: string) => Promise<void>;
  getSession: () => Promise<void>;
} | null>(null);

export function useUser() {
  const context = useContext(UserContext);

  if (!context) {
    // Provide a default value when context is null
    return {
      user: null,
      loading: false,
      setUser: () => {},
      setLoading: () => {},
      login: async () => {},
      register: async () => {},
      sendVerificationEmail: async () => {},
      confirmEmailVerification: async () => {},
      getSession: async () => {},
    };
  }

  return context;
}
