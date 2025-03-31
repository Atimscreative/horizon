import { CountryStateContext } from "@/hooks/useGetCountry";
import { useReducer } from "react";

type Action =
  | { type: "country"; payload: string }
  | { type: "state"; payload: string };

const initialState = { currentCountry: "", currentState: "" };

// Reducer function
function reducer(
  state: {
    currentCountry: string;
    currentState: string;
  },
  action: Action,
) {
  switch (action.type) {
    case "country":
      return { ...state, currentCountry: action.payload };
    case "state":
      return { ...state, currentState: action.payload };
    default:
      return state;
  }
}

export const CountryStateProvider = ({ children }: { children: any }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CountryStateContext.Provider value={{ state, dispatch }}>
      {children}
    </CountryStateContext.Provider>
  );
};
