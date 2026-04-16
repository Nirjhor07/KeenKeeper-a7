import { IoChevronDown } from "react-icons/io5";
import TcontentsCard from "./TcontentsCard";
import { BiArrowFromLeft } from "react-icons/bi";
import { useState } from "react";

const TimeLineContents = ({ fActivity }) => {
  const { value } = fActivity;
  //function for filter activities useState
  const [filteredActivity, setFilteredActivity] = useState("");

  const filterData = fActivity.filter((item) => {
    // jodi filter empty thake -> shob show korbe
    if (!filteredActivity) {
      // <p>do data </p>
      // alert('kisu nei')
      return true;
    } else {
      // nahole specific type match korbe
      return item.value?.toLowerCase() === filteredActivity.toLowerCase();
    }
  });

  return (
    <div className="min-h-screen bg-base-200 px-6 py-8 mx-auto container">
      {/* Title */}
      <h1 className="text-3xl font-semibold text-gray-800 mb-6">Timeline</h1>

      {/* Filter */}
      <div className="dropdown dropdown-right dropdown-end mb-6">
        <div tabIndex={0} role="button" className="btn m-1">
          Click to Filter Timeline <BiArrowFromLeft />
        </div>
        <ul
          tabIndex="-1"
          className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
        >
          <li>
            <button onClick={() => setFilteredActivity("call")}>call</button>
          </li>
          <li>
            <button onClick={() => setFilteredActivity("text")}>text</button>
          </li>
          <li>
            <button onClick={() => setFilteredActivity("Video")}>Video</button>
          </li>
        </ul>
      </div>

      <div className="space-y-4">
        {filterData.map((fCard, index) => (
          <TcontentsCard
            key={index}
            fCard={fCard}
            filteredActivity={filteredActivity}
          />
        ))}
      </div>
    </div>
  );
};

export default TimeLineContents;
