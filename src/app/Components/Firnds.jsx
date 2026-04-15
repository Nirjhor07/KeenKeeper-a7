"use client";

import { use, useContext } from "react";
import { DataContext } from "./DataProvider";
import FriendCard from "./FriendCard/FriendCard";

const Firnds = () => {
  const { dataPromise } = useContext(DataContext);
  const datas = use(dataPromise);
  // console.log(datas);

  return (
    <div className="container bg-base-200 mx-auto">
      <h2 className=" text-xl font-bold">Your Friends</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-3.5">
        {datas.map((f) => (
          <FriendCard key={f.id} f={f}></FriendCard>
        ))}
      </div>
    </div>
  );
};

export default Firnds;
