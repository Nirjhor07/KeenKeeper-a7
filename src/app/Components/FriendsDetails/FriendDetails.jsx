"use client";
import { use, useContext } from "react";
import { DataContext } from "../DataProvider";
import QuickButton from "../QuickButton/QuickButton";
import SetCard from "../SetCards/SetCard";
import ProfileCard from "../ProfileCard/ProfileCard";
import ProfileDetailsCard from "../ProfileDetailsCard/ProfileDetailsCard";

const FriendDetails = ({ id }) => {
  const { dataPromise } = useContext(DataContext);
  const datas = use(dataPromise);

  const details = datas.find((data) => data.id === parseInt(id));
  console.log(details);

  return (
    <div className="min-h-screen bg-base-200 p-6 flex justify-center pt-12">
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* left content-- profile */}
        <ProfileCard details={details}></ProfileCard>

        {/* right content card */}
        <ProfileDetailsCard details={details}></ProfileDetailsCard>
      </div>
    </div>
  );
};

export default FriendDetails;
