const SetCard = ({ value, label }) => {
  return (
    <div>
      <div className="card bg-base-100  shadow-sm">
        <div className="card-body text-center p-4">
          <div className="text-2xl font-semibold">{value}</div>
          <div className="text-sm text-gray-500 mt-1">{label}</div>
        </div>
      </div>
    </div>
  );
};

export default SetCard;
