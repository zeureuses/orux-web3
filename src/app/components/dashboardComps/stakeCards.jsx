import { FaCheckCircle } from 'react-icons/fa';

export default function StakeCards() {
  return (
    <div className="w-full">
      <div className="flex flex-wrap gap-4 sm:gap-6 justify-center sm:justify-between">
        {[
          { title: 'My ECLIP Balance', value: '0.00', usd: '≈ $0 USD' },
          { title: 'My Staked ECLIP', value: '0.00', usd: '≈ $0 USD' },
          { title: 'My bECLIP Balance', value: '0.00', usd: '≈ $0 USD' },
          { title: 'Avg. Staking APR', value: '3.60%', usd: '' },
        ].map((card, index) => (
          <div
            key={index}
            className="bg-[#1D1A46] p-4 sm:p-6 rounded-2xl shadow-xl w-full sm:flex-1 sm:min-w-[250px] sm:max-w-xs"
          >
            <div className="flex items-center mb-2 sm:mb-3">
              <h3 className="text-xs sm:text-sm text-gray-400 font-medium">
                {card.title}
              </h3>
            </div>
            <div className="text-left">
              <div className={`text-2xl sm:text-3xl font-bold mb-1 flex items-center ${index === 3 ? 'text-green-400' : 'text-white'}`}>
                <FaCheckCircle className="text-white h-5 w-5 sm:h-6 sm:w-6 mr-2 sm:mr-3" />
                <span>{card.value}</span>
              </div>
              {card.usd && (
                <p className="text-[0.65rem] sm:text-xs text-gray-500">
                  {card.usd}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
