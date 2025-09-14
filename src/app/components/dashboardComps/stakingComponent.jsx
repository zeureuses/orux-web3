import React, { useState } from 'react';
import { FiExternalLink } from 'react-icons/fi';
import { GiGalaxy } from 'react-icons/gi';
import { BsCircle, BsCheckCircle } from 'react-icons/bs';

const StakingComponent = () => {
  const [stakeAmount, setStakeAmount] = useState('0');
  const [sliderValue, setSliderValue] = useState(0);
  const [isAgreed, setIsAgreed] = useState(false);
  const [maxStakeAmount] = useState(0); // This would come from user's balance

  const handleStakeAmountChange = (e) => {
    const value = e.target.value;
    // Allow only numbers and decimal points with up to 5 decimal places
    if (/^[0-9]+(\.[0-9]{0,5})?$|^$/.test(value)) {
      setStakeAmount(value);
      const numValue = parseFloat(value) || 0;
      setSliderValue((numValue / Math.max(maxStakeAmount, 1)) * 100);
    }
  };

  const handleSliderChange = (e) => {
    const value = parseFloat(e.target.value);
    setSliderValue(value);
    const calculatedAmount = (maxStakeAmount * value / 100).toFixed(6);
    setStakeAmount(calculatedAmount);
  };

  const cosmicEssencePerDay = 0.000000;
  const cosmicEssencePerYear = cosmicEssencePerDay * 365;
  const estimatedTier = "Base";

  return (
    <div className="w-full h-full mt-[5rem]">
      <div className="w-full h-full flex flex-col items-center justify-center p-6 ">
        <h2 className="text-3xl font-bold text-gray-100 pb-[1rem]">Stake Now</h2>
        <span className='text-md text-gray-400 pb-[2rem]'>Earn Cosmic Essence every day you are staked.</span>
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-full rounded-[16px] p-[2px]">
            <div className="z-30">
              <div className="flex w-full h-full flex-col bg-[#1D1A46] md:flex-row rounded-[16px] min-h-[600px]">
                
                {/* Left Section - Staking Form */}
                <div className="w-full p-6 text-left md:w-[57%] md:p-12 flex flex-col justify-center">
                  <h2 className="mb-2 text-[24px] font-bold text-gray-100">Stake Now</h2>
                  <p className="font-inter text-sm leading-5 text-gray-200">
                    Un-Stake any time. The longer you stake, the more Cosmic Essence you'll earn
                  </p>
                  
                  <div className="my-10 h-[1px] w-full bg-slate-700"></div>
                  
                  <div className="flex w-full items-center justify-between">
                    <div className="flex flex-col justify-start">
                      <p className="mb-3 text-base font-medium leading-[19px] tracking-[0.32px] text-white md:mb-0">
                        Stake
                      </p>
                      <div className="flex flex-col justify-start md:flex-row md:items-center">
                        <p className="mb-2 font-inter text-sm leading-5 text-gray-200 md:mb-0 md:mr-2">
                          You will earn
                        </p>
                        <div className="mb-2 flex items-center md:mb-0 md:mr-3">
                          <GiGalaxy className="w-7 h-7 text-purple-400" />
                          <p className="mx-1.5 font-inter text-sm font-medium leading-5 text-white">
                            {cosmicEssencePerDay.toFixed(6)}
                            <span className="font-normal text-gray-200">/day</span>
                            <br />
                            <span className="font-normal text-gray-200">Cosmic Essence</span>
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-end">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-blue-600 flex items-center justify-center">
                        <div className="w-4 h-4 rounded-full bg-white flex items-center justify-center">
                          <div className="w-2 h-2 rounded-full bg-slate-800"></div>
                        </div>
                      </div>
                      <input
                        className="ml-3 rounded-xl border-[1.2px] border-white px-4 py-2 text-base font-semibold leading-6 tracking-[0.08px] text-white bg-transparent"
                        pattern="^[0-9]+(\.[0-9]{1,5})?$"
                        type="text"
                        value="0"
                        readOnly
                        style={{ width: '80px' }}
                        placeholder="0"
                      />
                    </div>
                  </div>
                  
                  <div className="mt-5 w-full">
                    <div className="relative w-full">
                      <input
                        type="range"
                        min="0"
                        max="100"
                        step="0.01"
                        value="0"
                        readOnly
                        className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-not-allowed slider"
                        style={{
                          background: `linear-gradient(to right, #7c3aed 0%, #7c3aed 0%, #374151 0%, #374151 100%)`
                        }}
                      />
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <p className="text-xs font-inter font-medium leading-5 text-white/50">1%</p>
                      <p className="text-xs font-inter font-medium leading-5 text-white/50">100%</p>
                    </div>
                  </div>
                  
                  <div className="my-10 h-[1px] w-full bg-slate-700"></div>
                  
                  <p className="mb-1.5 text-base font-medium leading-[19px] tracking-[0.32px] text-white">
                    No Lock Period
                  </p>
                  <p className="font-inter text-sm text-gray-200">
                    Un-stake <span className="text-white">anytime</span> with no penalties, you will lose your Essence when{' '}
                    <span className="text-white">Un-Staking</span>
                    <br />
                    Your max <span className="text-white">Essence</span> will be reached after{' '}
                    <span className="text-white">1 year</span>
                  </p>
                </div>
                
                {/* Right Section - Summary */}
                <div className="w-full p-6 text-left md:w-[43%] md:p-12 flex flex-col justify-center">
                  <div className="mb-2 text-[24px] font-bold text-gray-100">Summary</div>
                  
                  <div className="rounded-lg bg-blue-500/10 px-5 py-[22px]">
                    <div className="mb-[22px] flex items-center justify-between">
                      <p className="font-inter text-white/80">Cosmic Essence/year</p>
                      <p className="font-inter font-medium text-gray-100">
                        {cosmicEssencePerYear.toFixed(0)}
                      </p>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="font-inter text-white/80">Est. tier after 1 month</p>
                      <p className="font-inter font-medium text-gray-100">{estimatedTier}</p>
                    </div>
                  </div>
                  
                  <div className="mt-1 rounded-lg bg-blue-500/5 px-5 py-[22px]">
                    <div className="my-2 flex items-center justify-between">
                      <p className="font-inter text-white/80">Staking period</p>
                      <p className="font-inter font-medium text-gray-100">No Lock</p>
                    </div>
                  </div>
                  
                  <div className="mt-8 flex items-center">
                    <div 
                      className="cursor-pointer"
                      onClick={() => setIsAgreed(!isAgreed)}
                    >
                      {isAgreed ? (
                        <BsCheckCircle className="w-6 h-6 text-purple-500" />
                      ) : (
                        <BsCircle className="w-6 h-6 text-slate-500 hover:text-purple-500 transition-colors" />
                      )}
                    </div>
                    <p className="ml-[9px] font-inter text-sm leading-[18px] tracking-[0.14px] text-white opacity-90">
                      I have read all{' '}
                      <a
                        className="inline cursor-pointer font-semibold underline hover:text-purple-400 transition-colors"
                        href="https://docs.eclipsefi.io/tokenomics-and-rewards/staking"
                        target="_blank"
                        rel="noreferrer"
                      >
                        staking conditions
                      </a>
                    </p>
                  </div>
                  
                  <button
                    className="mt-7 w-full rounded-lg px-8 py-5 text-center text-[18px] font-bold leading-6 text-white bg-slate-600 cursor-not-allowed transition-all"
                    disabled={true}
                  >
                    Stake
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #6b7280;
          cursor: not-allowed;
          border: 2px solid white;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }
        
        .slider::-moz-range-thumb {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #6b7280;
          cursor: not-allowed;
          border: 2px solid white;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </div>
  );
};

export default StakingComponent