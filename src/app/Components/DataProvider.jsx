"use client";
import { createContext, useContext } from "react";

const DataContext = createContext();

const dataJson = async () => {
  const res = await fetch("/data.json");
  return res.json();
};
const dataPromise = dataJson();

const data = {
  dataPromise,
};

const DataProvider = ({ children }) => {
  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

export { DataContext };
export default DataProvider;
