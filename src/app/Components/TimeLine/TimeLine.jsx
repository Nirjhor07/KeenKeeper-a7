"use client";
import { useContext } from "react";
import { DataContext } from "../DataProvider";
import NoTimeContents from "./NoTimeContents";
import TimeLineContents from "./TimeLineContents";

const TimeLine = () => {
  // context api calling to use usestate
  const { fActivity } = useContext(DataContext);
  //   console.log(fActivity);

  return (
    <div>
      {fActivity.length === 0 ? (
        <NoTimeContents />
      ) : (
        <TimeLineContents fActivity={fActivity} />
      )}
    </div>
  );
};

export default TimeLine;
