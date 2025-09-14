import React, { useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const CosmicTierSystem = () => {
  const [userEssence] = useState(0); // Current user essence
  
  const tiers = [
    {
      id: 1,
      name: "Star Dust",
      requiredEssence: 1500,
      position: 18.67,
      icon: <FaCheckCircle />,
      description: "Lottery Sale",
      reward: "Get 1 lottery ticket that gives a chance to win up to a $50 allocation.",
      tickets: 1,
      maxAllocation: "$50"
    },
    {
      id: 2,
      name: "Comet",
      requiredEssence: 4000,
      position: 35.34,
      icon: <FaCheckCircle />,
      description: "Lottery Sale x4",
      reward: "Get 4 lottery tickets that give a chance to win up to a $250 allocation.",
      tickets: 4,
      maxAllocation: "$250"
    },
    {
      id: 3,
      name: "Solar System",
      requiredEssence: 5000,
      position: 52.01,
      icon: <FaCheckCircle />,
      description: "Lottery Sale x9",
      reward: "Get 9 lottery tickets that give a chance to win up to a $350 allocation.",
      tickets: 9,
      maxAllocation: "$350"
    },
    {
      id: 4,
      name: "Constellation",
      requiredEssence: 20000,
      position: 68.68,
      icon: <FaCheckCircle />,
      description: "Guaranteed & Lottery x16",
      reward: "Get $500 guaranteed allocation and 16 lottery tickets that give a chance to win up to an additional $1,250 allocation. (Max allocation at this tier: $1,750)",
      tickets: 16,
      guaranteed: "$500",
      maxAllocation: "$1,750"
    },
    {
      id: 5,
      name: "Galaxy",
      requiredEssence: 40000,
      position: 85.35,
      icon: <FaCheckCircle />,
      description: "Guaranteed x2 & Lottery x25",
      reward: "Get $1,000 guaranteed allocation and 25 lottery tickets that give a chance to win up to an additional $3,000 allocation. (Max allocation at this tier: $4,000)",
      tickets: 25,
      guaranteed: "$1,000",
      maxAllocation: "$4,000"
    },
    {
      id: 6,
      name: "Multiverse",
      requiredEssence: 80000,
      position: 101.02,
      icon: <FaCheckCircle />,
      description: "Guaranteed x5 & Lottery x36",
      reward: "Get $2,500 guaranteed allocation and 36 lottery tickets that give a chance to win up to an additional $6,000 allocation. (Max allocation at this tier: $8,500)",
      tickets: 36,
      guaranteed: "$2,500",
      maxAllocation: "$8,500"
    }
  ];

  const currentProgress = Math.min((userEssence / 80000) * 100, 100);
  const [hoveredTier, setHoveredTier] = useState(null);

  return (
    <div className="p-8">
      <div className="w-full">
        {/* Desktop Layout */}
        <div className="hidden lg:block">
          <div className="relative mt-28 mb-20 w-full">
            {/* Progress Bar */}
            <div className="relative h-[6px] rounded-lg bg-slate-800">
              <div 
                className="absolute h-[6px] rounded-lg bg-gradient-to-r from-purple-500 to-blue-600 shadow-lg shadow-purple-500/50 transition-all duration-1000 ease-out"
                style={{ width: `${currentProgress}%` }}
              ></div>
              
              {/* Tier Label */}
              <div className="absolute top-9 text-sm font-semibold text-white/90">
                Tier
                <a 
                  href="https://docs.eclipsefi.io/eclipse-mechanics/cosmic-essence-and-user-tiers" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-1 mt-4 text-xs font-medium text-white/90 hover:text-purple-400 transition-colors"
                >
                  Learn more <FaCheckCircle className="w-4 h-4" />
                </a>
              </div>

              {/* Tier Markers */}
              {tiers.map((tier) => (
                <div 
                  key={tier.id}
                  className="absolute transform -translate-x-1/2 -translate-y-6"
                  style={{ left: `${tier.position}%` }}
                  onMouseEnter={() => setHoveredTier(tier.id)}
                  onMouseLeave={() => setHoveredTier(null)}
                >
                  {/* Icon Circle */}
                  <div className="flex h-[46px] w-[46px] items-center justify-center rounded-full bg-slate-800 border border-white/10 hover:bg-slate-700 transition-colors cursor-pointer">
                    {tier.icon}
                  </div>
                  
                  {/* Tier Info */}
                  <div className="mt-4">
                    <div className="text-[10px] font-medium tracking-wider text-purple-400 uppercase">
                      {tier.requiredEssence.toLocaleString()}+ Essence
                    </div>
                    <div className="mt-2 text-base font-semibold text-white flex items-center gap-2">
                      {tier.name}
                    </div>
                    <div className="mt-1 w-36 text-[13px] font-normal text-gray-200">
                      {tier.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden">
          <div className="relative ml-[50%] h-[630px] w-[6px] rounded-lg bg-slate-800">
            {/* Current Essence Display */}
            <div className="absolute left-[-90px] -translate-x-1/2 -translate-y-1/2 md:left-[-100px]" style={{ top: "0%" }}>
              <div className="relative h-[45px] w-[130px] lg:h-[100px] lg:w-[150px]">
                <div className="bg-slate-800 rounded-lg p-3 border border-white/10">
                  <div className="text-center text-sm text-gray-100">
                    <div>Your Essence:</div>
                    <div className="font-bold">{userEssence.toLocaleString()}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Progress Bar */}
            <div 
              className="absolute w-[6px] rounded-lg bg-gradient-to-b from-purple-500 to-blue-600 shadow-lg shadow-purple-500/50"
              style={{ height: `${currentProgress}%` }}
            ></div>
            
            <p className="absolute left-10 text-sm font-semibold text-white/90">Tier</p>

            {/* Mobile Tier Markers */}
            {tiers.map((tier) => (
              <div 
                key={tier.id}
                className="absolute flex w-[50vw] translate-x-[-20px] translate-y-[-50%] items-center"
                style={{ top: `${tier.position}%` }}
              >
                <div className="flex h-[46px] w-[46px] items-center justify-center rounded-full bg-slate-800 border border-white/10">
                  {tier.icon}
                </div>
                <div className="ml-[18px]">
                  <div className="text-[10px] font-medium tracking-wider text-purple-400 uppercase">
                    {tier.requiredEssence.toLocaleString()}+ Essence
                  </div>
                  <div className="mt-2 text-base font-semibold text-white">{tier.name}</div>
                  <div className="mt-1 text-[13px] font-normal text-gray-200">{tier.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default CosmicTierSystem;