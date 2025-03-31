import { createContext, useContext } from "react";

export const UserContext = createContext<{
  user: any;
  setUser: (user: any) => void;
  loading: boolean;
  setLoading: (status: boolean) => void;
  logout: () => Promise<void>;
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
      logout: async () => {},
    };
  }

  return context;
}
