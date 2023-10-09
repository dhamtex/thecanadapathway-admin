import React, { useContext, useState } from "react";
import { IStudent } from "../types";

export interface IContextType {
  activeStudents: IStudent[];
  setActiveStudents: (activeStudents: IStudent[]) => void;
  suspendedStudents: IStudent[];
  setSuspendedStudents: (suspendedStudents: IStudent[]) => void;
}

const AppContext = React.createContext<IContextType>({} as any);

const ContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [activeStudents, setActiveStudents] = useState([] as IStudent[]);
  const [suspendedStudents, setSuspendedStudents] = useState([] as IStudent[]);

  return (
    <AppContext.Provider
      value={{
        activeStudents,
        setActiveStudents,
        suspendedStudents,
        setSuspendedStudents,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => useContext(AppContext);

export { ContextProvider, useAppContext, AppContext };
