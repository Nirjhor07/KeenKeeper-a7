import { FaHandshake } from "react-icons/fa6";


const TcontentsCard = ({fCard, filteredActivity}) => {
      const { icon, name, value } = fCard;
    return (
      <div>
          {/* Timeline Card */}
      <div className="bg-white border border-gray-200 rounded-lg px-5 py-4 flex items-start gap-4 shadow-sm max-w-2xl">
        {/* Icon */}
        <div className="bg-yellow-100 text-yellow-500 p-2 rounded-full">
          {icon}
        </div>

        {/* Content */}
        <div>
          <p className="text-gray-800 text-sm">
            <span className="font-medium">{value}</span>{" "}
            <span className="text-gray-500">with {name}</span>
          </p>
          <p className="text-gray-400 text-xs mt-1">
            March 29, 2026
          </p>
        </div>
      </div>
      </div>
    );
};

export default TcontentsCard;