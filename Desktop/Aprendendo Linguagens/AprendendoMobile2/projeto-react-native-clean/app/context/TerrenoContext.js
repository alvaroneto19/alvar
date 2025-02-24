import React, { createContext, useState } from "react";

export const TerrenoContext = createContext();

export const TerrenoProvider = ({ children }) => {
  const [terrenos, setTerrenos] = useState([]);

  const adicionarTerreno = (novoTerreno) => {
    setTerrenos((prevTerrenos) => [...prevTerrenos, novoTerreno]);
  };

  return (
    <TerrenoContext.Provider value={{ terrenos, adicionarTerreno }}>
      {children}
    </TerrenoContext.Provider>
  );
};
