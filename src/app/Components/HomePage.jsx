import Firnds from "./Firnds";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-base-200 flex flex-col items-center px-4 pt-7 space-y-3.5">
      {/* Title Section */}
      <div className="text-center max-w-2xl space-y-3.5">
        <h1 className="text-4xl font-bold text-gray-800">
          Friends to keep close in your life
        </h1>
        <p className=" text-gray-500 text-sm">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>

        <button className="btn btn-success bg-[#244D3F] text-white">
          {" "}
          + Add a friend
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-4 w-full max-w-4xl">
        <div className="bg-white shadow-md rounded-xl p-6 text-center">
          <h2 className="text-2xl font-bold text-gray-800">10</h2>
          <p className="text-gray-500 text-sm mt-1">Total Friends</p>
        </div>

        <div className="bg-white shadow-md rounded-xl p-6 text-center">
          <h2 className="text-2xl font-bold text-green-600">3</h2>
          <p className="text-gray-500 text-sm mt-1">On Track</p>
        </div>

        <div className="bg-white shadow-md rounded-xl p-6 text-center">
          <h2 className="text-2xl font-bold text-yellow-500">6</h2>
          <p className="text-gray-500 text-sm mt-1">Need Attention</p>
        </div>

        <div className="bg-white shadow-md rounded-xl p-6 text-center">
          <h2 className="text-2xl font-bold text-blue-600">12</h2>
          <p className="text-gray-500 text-sm mt-1">Interactions This Month</p>
        </div>
      </div>
      {/* divider */}
      <div className="flex w-full flex-col">
        <div className="divider"></div>
      </div>
      {/* Your friends section */}
      <Firnds></Firnds>
    </div>
  );
};

export default HomePage;
