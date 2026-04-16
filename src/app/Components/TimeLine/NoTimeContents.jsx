import { IoCall } from "react-icons/io5";
import { MdMessage } from "react-icons/md";
import { CiVideoOn } from "react-icons/ci";

import { MdOutlineEventNote } from "react-icons/md";
import { GoDot } from "react-icons/go";
import Link from "next/link";

const NoTimeContents = () => {
  return (
    <div className="flex flex-col items-center justify-center p-12 text-center">
      <div className="mb-6 text-6xl text-gray-300">
        <MdOutlineEventNote />
      </div>
      
      <h2 className="text-2xl font-bold text-gray-700 mb-2">
        No Timeline Friends Activity yet!!!
      </h2>
      
      <p className="text-gray-500 mb-6 max-w-md">
        Start logging your interactions by clicking the quick action buttons on the friends profile. Your timeline will appear here.
      </p>
      
      <div className="flex gap-2 text-sm text-gray-400 justify-center items-center">
        <span className=" flex gap-2 justify-center items-center"> <IoCall /> Call</span>
        <span><GoDot/></span>
        <span className=" flex gap-2 justify-center items-center"> <MdMessage /> Text</span>
        <span><GoDot/></span>
        <span className=" flex gap-2 justify-center items-center"> <CiVideoOn /> Video</span>
      </div>
      
     <Link href='/'>
      <button className="mt-8 px-6 py-2 bg-green-900 text-white rounded-lg hover:bg-green-800 transition">
        Go to Friends
      </button>
     </Link>
    </div>
  );
};

export default NoTimeContents;