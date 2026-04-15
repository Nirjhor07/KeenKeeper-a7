import QuickButton from "../QuickButton/QuickButton";
import SetCard from "../SetCards/SetCard";

const ProfileDetailsCard = () => {
  return (
    <div >
      <div className="flex flex-col gap-6">
          
          {/* STATS ROW */}
          <div className="flex flex-col sm:flex-row justify-between gap-3">
            <SetCard  value="62" label="Days Since Contact" />
            <SetCard value="30" label="Goal (Days)" />
            <SetCard value="Feb 27, 2026" label="Next Due" />
          </div>

          {/* RELATIONSHIP GOAL */}
          <div className="card bg-base-100  shadow-sm">
            <div className="flex justify-between items-center p-5">
              
              <div>
                <h3 className="mb-4 text-xl font-bold text-green-900">Relationship Goal</h3>
                <p className="text-sm text-gray-500 mt-1">
                  Connect every <span className="font-extrabold">30 days</span>
                </p>
              </div>

              <button className="btn btn-sm">Edit</button>
            </div>
          </div>

          {/* QUICK CHECK-IN */}
          <div className="card bg-base-100  shadow">
            <div className="p-5">
              <h3 className="mb-4 text-2xl font-bold text-green-900">Quick Check-In</h3>

              <div className="grid grid-cols-3 gap-4">
                <QuickButton icon="📞" label="Call" />
                <QuickButton icon="💬" label="Text" />
                <QuickButton icon="🎥" label="Video" />
              </div>
            </div>
          </div>

        </div>
    </div>
  );
};

export default ProfileDetailsCard;
