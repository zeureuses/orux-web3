import { FaArrowCircleUp, FaArrowCircleDown, FaCheckCircle } from 'react-icons/fa';

export default function StakeCards() {
  return (
    <div className="w-full">
      <div className="flex flex-wrap gap-6 justify-between">
        {/* Card 1: ECLIP Balance */}
        <div className="bg-[#1a2332] border border-[#2a3441] p-6 rounded-2xl shadow-xl flex-1 min-w-[250px] max-w-xs">
          <div className="flex items-center mb-3">
            <h3 className="text-sm text-gray-400 font-medium">My ECLIP Balance</h3>
          </div>
          <div className="text-left">
            <div className="text-3xl text-white font-bold mb-1 flex items-center">
              <div className="bg-[#6366f1] p-2 rounded-full mr-3">
                <FaArrowCircleUp />
              </div>
              <span>0.00</span>
            </div>
            <p className="text-xs text-gray-500">≈ $0 USD</p>
          </div>
        </div>

        {/* Card 2: Staked ECLIP */}
        <div className="bg-[#1a2332] border border-[#2a3441] p-6 rounded-2xl shadow-xl flex-1 min-w-[250px] max-w-xs">
          <div className="flex items-center mb-3">
            <h3 className="text-sm text-gray-400 font-medium">My Staked ECLIP</h3>
          </div>
          <div className="text-left">
            <div className="text-3xl text-white font-bold mb-1 flex items-center">
              <div className="bg-[#6366f1] p-2 rounded-full mr-3">
                <FaArrowCircleDown />
              </div>
              <span>0.00</span>
            </div>
            <p className="text-xs text-gray-500">≈ $0 USD</p>
          </div>
        </div>

        {/* Card 3: bECLIP Balance */}
        <div className="bg-[#1a2332] border border-[#2a3441] p-6 rounded-2xl shadow-xl flex-1 min-w-[250px] max-w-xs">
          <div className="flex items-center mb-3">
            <h3 className="text-sm text-gray-400 font-medium">My bECLIP Balance</h3>
          </div>
          <div className="text-left">
            <div className="text-3xl text-white font-bold mb-1 flex items-center">
              <div className="bg-[#10b981] p-2 rounded-full mr-3">
                <FaCheckCircle />
              </div>
              <span>0.00</span>
            </div>
            <p className="text-xs text-gray-500">≈ $0 USD</p>
          </div>
        </div>

        {/* Card 4: Avg. Staking APR */}
        <div className="bg-[#1a2332] border border-[#2a3441] p-6 rounded-2xl shadow-xl flex-1 min-w-[250px] max-w-xs">
          <div className="flex items-center mb-3">
            <h3 className="text-sm text-gray-400 font-medium">Avg. Staking APR</h3>
          </div>
          <div className="text-left">
            <div className="text-3xl text-green-400 font-bold mb-1 flex items-center">
              <div className="bg-gradient-to-r from-[#10b981] to-[#6366f1] p-2 rounded-full mr-3">
                <FaCheckCircle />
              </div>
              <span>3.60%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
