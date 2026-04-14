"use client";
import { createContext, useContext } from "react";

const DataContext = createContext();

const dataJson = async () => {
  const res = await fetch("https://keen-keeper-a7-black.vercel.app/data.json");
  const data1 = await res.json();
  return data1;
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
