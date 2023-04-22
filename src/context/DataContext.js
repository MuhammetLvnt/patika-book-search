import { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";

const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
  const [search, setSearch] = useState("meyve");

  const [datas, setData] = useState([]);

  const values = {
    setSearch,
    setData,
    search,
    datas,
  };
  return <DataContext.Provider value={values}>{children}</DataContext.Provider>;
};
export const useData = () => {
  const context = useContext(DataContext);

  if (context === undefined) {
    throw new Error("useUrl must be used withing a UrlProvider");
  }
  return context;
};
