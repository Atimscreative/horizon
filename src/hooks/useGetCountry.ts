import { createContext, useContext } from "react";

export const CountryStateContext = createContext<null | any>(null);

export const useGetCountryState = () => {
  return useContext(CountryStateContext);
};
