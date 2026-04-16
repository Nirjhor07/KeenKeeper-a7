"use client";
import { IoCall } from "react-icons/io5";
import QuickButton from "../QuickButton/QuickButton";
import SetCard from "../SetCards/SetCard";
import { MdMessage } from "react-icons/md";
import { CiVideoOn } from "react-icons/ci";
import Link from "next/link";
import { toast } from "react-toastify";

const ProfileDetailsCard = ({ details }) => {
  const { days_since_contact, next_due_date, goal, id } = details;

  // function to format date like figma
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { month: "short", day: "numeric", year: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };

  const hadleLinkClick = () => {
    toast("clicked");
  };

  return (
    <div>
      <div className="flex flex-col gap-6">
        {/* STATS ROW */}
        <div className="flex flex-col sm:flex-row justify-between gap-3">
          <SetCard value={days_since_contact} label="Days Since Contact" />
          <SetCard value={goal} label="Goal (Days)" />
          <SetCard value={formatDate(next_due_date)} label="Next Due" />
        </div>

        {/* RELATIONSHIP GOAL */}
        <div className="card bg-base-100  shadow-sm">
          <div className="flex justify-between items-center p-5">
            <div>
              <h3 className="mb-4 text-xl font-bold text-green-900">
                Relationship Goal
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                Connect every{" "}
                <span className="font-extrabold">{goal} days</span>
              </p>
            </div>

            <button className="btn btn-sm">Edit</button>
          </div>
        </div>

        {/* QUICK CHECK-IN */}
        <div className="card bg-base-100  shadow">
          <div className="p-5">
            <h3 className="mb-4 text-2xl font-bold text-green-900">
              Quick Check-In
            </h3>

            <div className="grid grid-cols-3 gap-4">
              <Link
                onClick={() => hadleLinkClick()}
                href={`/timeline/${id}`}
                className="contents"
              >
                <QuickButton icon={<IoCall />} label="Call" />
              </Link>
              <Link
                onClick={() => hadleLinkClick()}
                href={`/timeline/${id}`}
                className="contents"
              >
                <QuickButton icon={<MdMessage />} label="Text" />
              </Link>
              <Link
                onClick={() => hadleLinkClick()}
                href={`/timeline/${id}`}
                className="contents"
              >
                <QuickButton id={id} icon={<CiVideoOn />} label="Video" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetailsCard;
