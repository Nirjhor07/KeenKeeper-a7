import { BiArchiveIn } from "react-icons/bi";
import { FaDeleteLeft } from "react-icons/fa6";
import { MdDelete, MdSnooze } from "react-icons/md";

const ProfileCard = ({details}) => {
    console.log(details)
  return (
    <div>
      {/* LEFT SIDEBAR */}
      <div className="flex flex-col gap-4">
        {/* Profile Card */}
        <div className="card bg-base-100 shadow-sm ">
          <div className="card-body items-center text-center p-6">
            <div className="avatar mb-2">
              <div className="w-16 rounded-full">
                {/* <img src="https://i.pravatar.cc/150?img=32" /> */}
              </div>
            </div>

            <h2 className="font-semibold text-lg">Emma Wilson</h2>

            <div className="flex gap-2 mt-1">
              <span className="badge badge-error badge-sm">Overdue</span>
              <span className="badge badge-success badge-sm">Family</span>
            </div>

            <p className="text-sm italic text-gray-500 mt-3">
              Former colleague, great mentor
            </p>

            <p className="text-xs text-gray-400 mt-1">Preferred: email</p>
          </div>
        </div>

        {/* Sidebar Actions */}
        <div className="flex flex-col gap-2">
          <button className="btn  bg-base-100 border shadow-sm">
            <MdSnooze /> Snooze 2 Weeks
          </button>

          <button className="btn  bg-base-100 border shadow-sm">
            <BiArchiveIn /> Archive
          </button>

          <button className="btn  bg-base-100 border shadow-sm text-error">
            <MdDelete /> Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
