"use client";

import React, { useMemo } from "react";
import AnimatedDiv from "./AnimatedDiv";

const ScrollingLogos = () => {
  const firstRowLogos = [
    { name: "ZeroCap", src: "/images/sponsors/zerocap.svg" },
    { name: "DVDT", src: "/images/sponsors/dvdt.svg" },
    { name: "Banter", src: "/images/sponsors/banter.svg" },
    { name: "QuantBlock", src: "/images/sponsors/quantblock.svg" },
    { name: "Faculty Group", src: "/images/sponsors/facultygroup.svg" },
    { name: "NXGen", src: "/images/sponsors/nxgen.svg" },
    { name: "Web3", src: "/images/sponsors/web3.svg" },
    { name: "Insolvent", src: "/images/sponsors/insolvent.svg" },
    { name: "CoWeb", src: "/images/sponsors/coweb.svg" },
    { name: "Everstake", src: "/images/sponsors/everstake.svg" },
    { name: "Momentum", src: "/images/sponsors/momentum.svg" },
    { name: "Altcoin", src: "/images/sponsors/altcoin.svg" },
    { name: "Scalene", src: "/images/sponsors/scalene.svg" },
    { name: "NewTribe", src: "/images/sponsors/newtribe.svg" },
    { name: "CoinSeek", src: "/images/sponsors/coinseek.svg" },
  ];

  const secondRowLogos = [
    { name: "Kyros", src: "/images/sponsors/kyros.svg" },
    { name: "Squid", src: "/images/sponsors/squid.svg" },
    { name: "CoinSeeker", src: "/images/sponsors/coinseeker.svg" },
    { name: "Rarestone", src: "/images/sponsors/rarestone.svg" },
    { name: "Interchain", src: "/images/sponsors/interchain.svg" },
    { name: "Cogitent", src: "/images/sponsors/cogitent.svg" },
    { name: "Kado", src: "/images/sponsors/kado.svg" },
    { name: "Cyrator", src: "/images/sponsors/cyrator.svg" },
    { name: "OBI", src: "/images/sponsors/obi.svg" },
    { name: "Zokyo", src: "/images/sponsors/zokyo.svg" },
    { name: "ZKMe", src: "/images/sponsors/zkme.svg" },
    { name: "BigBrain", src: "/images/sponsors/bigbrain.svg" },
    { name: "Asteroid", src: "/images/sponsors/asteroid.svg" },
  ];

  // Memoize the infinite arrays to prevent recreation on every render
  const infiniteFirstRow = useMemo(() => {
    const combined = [...firstRowLogos, ...secondRowLogos];
    return [...combined, ...combined, ...combined, ...combined];
  }, []);

  const infiniteSecondRow = useMemo(() => {
    const combined = [...secondRowLogos, ...firstRowLogos];
    return [...combined, ...combined, ...combined, ...combined];
  }, []);

  return (
    <>
      <style jsx>{`
        @keyframes scrollLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-25%);
          }
        }

        @keyframes scrollRight {
          0% {
            transform: translateX(-25%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .scroll-left {
          animation: scrollLeft 60s linear infinite;
        }

        .scroll-right {
          animation: scrollRight 55s linear infinite;
        }

        .logos-container:hover .scroll-left,
        .logos-container:hover .scroll-right {
          animation-play-state: paused;
        }

        /* Respect user's motion preferences */
        @media (prefers-reduced-motion: reduce) {
          .scroll-left,
          .scroll-right {
            animation: none;
          }
        }

        /* Mobile optimizations */
        @media (max-width: 640px) {
          .scroll-left {
            animation-duration: 80s;
          }
          
          .scroll-right {
            animation-duration: 75s;
          }
        }

        /* Tablet optimizations */
        @media (min-width: 641px) and (max-width: 1024px) {
          .scroll-left {
            animation-duration: 70s;
          }
          
          .scroll-right {
            animation-duration: 65s;
          }
        }
      `}</style>

      <section className="w-full container mx-auto px-3 sm:px-5 mt-16 sm:mt-28" aria-label="Trusted partners and backers">
        <div className="w-full py-12 sm:py-20 overflow-hidden">
          <AnimatedDiv className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
            <header className="text-center mb-8 sm:mb-16">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4 px-4">
                Trusted by <span className="text-blue-400">30+</span> Partners
                and Backers Across the Space
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-slate-400 px-4">
                Leading companies that power the future of technology
              </p>
            </header>

            <div className="logos-container space-y-4 sm:space-y-8" role="region" aria-label="Scrolling partner logos">
              {/* First scrolling row - left to right */}
              <div className="relative overflow-hidden" aria-hidden="true">
                {/* Gradient overlays - responsive width */}
                <div className="absolute left-0 top-0 w-16 sm:w-24 md:w-32 h-full bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent z-10 pointer-events-none" aria-hidden="true"></div>
                <div className="absolute right-0 top-0 w-16 sm:w-24 md:w-32 h-full bg-gradient-to-l from-slate-900 via-slate-900/80 to-transparent z-10 pointer-events-none" aria-hidden="true"></div>

                <div className="flex scroll-left">
                  {infiniteFirstRow.map((logo, index) => (
                    <div
                      key={`first-${index}`}
                      className="flex-shrink-0 mx-2 sm:mx-3 md:mx-4 flex items-center justify-center h-16 sm:h-20 md:h-24 w-28 sm:w-36 md:w-44 bg-slate-800/50 rounded-lg sm:rounded-xl backdrop-blur-sm border border-slate-700/50 hover:border-slate-600 transition-all duration-300 hover:bg-slate-700/50 hover:-translate-y-1 focus-within:ring-2 focus-within:ring-blue-400 focus-within:ring-offset-2 focus-within:ring-offset-slate-900"
                    >
                      <img
                        src={logo.src}
                        alt={`${logo.name} logo`}
                        className="max-h-8 sm:max-h-10 md:max-h-12 max-w-20 sm:max-w-24 md:max-w-32 object-contain filter brightness-0 invert"
                        loading="lazy"
                        width="128"
                        height="48"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Second scrolling row - right to left */}
              <div className="relative overflow-hidden" aria-hidden="true">
                {/* Gradient overlays - responsive width */}
                <div className="absolute left-0 top-0 w-16 sm:w-24 md:w-32 h-full bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent z-10 pointer-events-none" aria-hidden="true"></div>
                <div className="absolute right-0 top-0 w-16 sm:w-24 md:w-32 h-full bg-gradient-to-l from-slate-900 via-slate-900/80 to-transparent z-10 pointer-events-none" aria-hidden="true"></div>

                <div className="flex scroll-right">
                  {infiniteSecondRow.map((logo, index) => (
                    <div
                      key={`second-${index}`}
                      className="flex-shrink-0 mx-2 sm:mx-3 md:mx-4 flex items-center justify-center h-16 sm:h-20 md:h-24 w-28 sm:w-36 md:w-44 bg-slate-800/50 rounded-lg sm:rounded-xl backdrop-blur-sm border border-slate-700/50 hover:border-slate-600 transition-all duration-300 hover:bg-slate-700/50 hover:-translate-y-1 focus-within:ring-2 focus-within:ring-blue-400 focus-within:ring-offset-2 focus-within:ring-offset-slate-900"
                    >
                      <img
                        src={logo.src}
                        alt={`${logo.name} logo`}
                        className="max-h-8 sm:max-h-10 md:max-h-12 max-w-20 sm:max-w-24 md:max-w-32 object-contain filter brightness-0 invert"
                        loading="lazy"
                        width="128"
                        height="48"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedDiv>
        </div>
      </section>
    </>
  );
};

export default ScrollingLogos;