"use client";
import { createContext, useContext, useState } from "react";

export const DataContext = createContext();

const dataJson = async () => {
  const res = await fetch("https://keen-keeper-a7-black.vercel.app/data.json");
  const data1 = await res.json();
  return data1;
};
const dataPromise = dataJson();

const DataProvider = ({ children }) => {
  const [fActivity, setFActivity] = useState([]);
  const data = {
    dataPromise,
    fActivity,
    setFActivity,
  };

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

export default DataProvider;
