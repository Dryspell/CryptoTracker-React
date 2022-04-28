import React, { createContext, useContext, useEffect } from "react";

const Crypto = createContext();

const CryptoContext = ({ children }) => {
  const [currency, setCurrency] = React.useState("USD");
  const [symbol, setSymbol] = React.useState("$");

  useEffect(() => {
    if (currency === "USD") setSymbol("$");
    if (currency === "EUR") setSymbol("€");
    if (currency === "GBP") setSymbol("£");
  }, [currency]);

  return (
    <Crypto.Provider value={{ currency, setCurrency, symbol }}>
      {children}
    </Crypto.Provider>
  );
};

export default CryptoContext;

export const CryptoState = () => {
  return useContext(Crypto);
};
