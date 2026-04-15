import Image from "next/image";
import { BiArchiveIn } from "react-icons/bi";
import { MdDelete, MdSnooze } from "react-icons/md";

const ProfileCard = ({ details }) => {
  // console.log(details)
  const { days_since_contact, bio, status, name, picture, email } = details;
  return (
    <div>
      {/* Left side-bar */}
      <div className="flex flex-col gap-4">
        {/* Profile Card */}
        <div className="card bg-base-100 shadow-sm ">
          <div className="card-body items-center text-center p-6">
            <div className="avatar mb-2">
              <div className="w-16 rounded-full">
                <Image
                  className="w-full h-full object-cover"
                  src={picture + "?w=200&q=80"} // eta korar uddessho hoilo : image  size reduce & quality for faster loading
                  alt={name}
                  width={100}
                  height={100}
                ></Image>
              </div>
            </div>

            <h2 className="font-semibold text-lg">{name}</h2>
            {/* status of that friens */}
            <div className="flex gap-2 mt-1">
              <span
                className={`py-1 px-3 rounded-2xl text-sm
                 ${
                   status === "on track"
                     ? "bg-green-700 text-white "
                     : status === "overdue"
                       ? "bg-red-600"
                       : "bg-yellow-300"
                 }`}
              >
                {status}
              </span>
            </div>
            {/* bio of that friens */}
            <p className="text-sm italic text-gray-500 mt-3">{bio}</p>
            {/* preferred email of that friend */}
            <p className="text-xs text-gray-400 mt-1">Preferred: {email}</p>
          </div>
        </div>

        {/* Sidebar Actions */}
        <div className="flex flex-col gap-2">
          <button className="btn  bg-base-100 border shadow-sm">
            <MdSnooze /> Snooze {Math.round(days_since_contact / 7)} week
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
