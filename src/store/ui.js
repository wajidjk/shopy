import { createContext, useState } from "react";

export const appContext = createContext({});

export const UiProvider = (props) => {
  const [state, setState] = useState([]);
  const { children } = props;
  return (
    <appContext.Provider value={{ state, setState }}>
      {children}
    </appContext.Provider>
  );
};
