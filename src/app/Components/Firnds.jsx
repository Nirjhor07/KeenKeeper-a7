"use client";

import { use, useContext } from "react";
import { DataContext } from "./DataProvider";

const Firnds = () => {
  const { dataPromise } = useContext(DataContext);
  const datas = use(dataPromise);
  console.log(datas);

  return (
    <div className="container bg-base-200 mx-auto">
      <h2 className=" text-xl font-bold">Your Friends</h2>
      <div className="mt-10">
        {
         datas.map(f=><p key={f.id}>{f.name}</p>)
        }
        </div>
    </div>
  );
};

export default Firnds;
