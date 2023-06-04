import React from "react";

type Props = {
  children: React.ReactNode;
};

type Context = {
  currentFragment: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  setContext: React.Dispatch<React.SetStateAction<Context>>;
};

const initialContext: Context = {
  currentFragment: 0,
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  setContext: (): void => {
    throw new Error("setContext function must be overridden");
  },
};

const RegisterContext = React.createContext<Context>(initialContext);

const RegisterContextProvider = ({ children }: Props): JSX.Element => {
  const [contextState, setContext] = React.useState<Context>(initialContext);

  return (
    <RegisterContext.Provider value={{ ...contextState, setContext }}>
      {children}
    </RegisterContext.Provider>
  );
};

export { RegisterContext, RegisterContextProvider };
