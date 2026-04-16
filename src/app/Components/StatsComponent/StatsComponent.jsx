"use client";

import { useContext } from "react";
import { DataContext } from "../DataProvider";
import NoStats from "./NoStats";
import Stats from "./Stats";

const StatsComponent = () => {
  // context api calling to use usestate
  const { fActivity } = useContext(DataContext);
  //   console.log(fActivity);

  return (
    <div>
      {fActivity.length === 0 ? <NoStats /> : <Stats fActivity={fActivity} />}
    </div>
  );
};

export default StatsComponent;
