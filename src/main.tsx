import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import UserProvider from "./context/user.tsx";
import { CountryStateProvider } from "./context/country_state.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <UserProvider>
      <CountryStateProvider>
        <App />
      </CountryStateProvider>
    </UserProvider>
  </StrictMode>,
);
