"use client";

import { use, useContext } from "react";
import { DataContext } from "./DataProvider";
import FriendCard from "./FriendCard/FriendCard";
import Link from "next/link";

const Friends = () => {
  const { dataPromise } = useContext(DataContext);
  const datas = use(dataPromise);
  // console.log(datas);

  return (
    <div className="container bg-base-200 mx-auto w-full">
      <h2 className="text-xl font-bold">Your Friends</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-3.5">
        {datas.map((f) => (
          <Link key={f.id} href={`/friendsdetails/${f.id}`}>
            <FriendCard key={f.id} f={f}></FriendCard>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Friends;
