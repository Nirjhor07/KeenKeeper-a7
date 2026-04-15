const QuickButton = ({ icon, label }) => {
  return (
    <button className="h-20 shadow rounded-lg flex flex-col items-center justify-center gap-2 bg-base-200 hover:bg-amber-200">
      <span className="text-xl">{icon}</span>
      <span className="text-sm">{label}</span>
    </button>
  );
};

export default QuickButton;
