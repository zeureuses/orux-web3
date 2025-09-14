"use client";

import React, { useState, useEffect } from "react";
import AnimatedDiv from "./AnimatedDiv";


export default function HeroSection() {
  const [rotation, setRotation] = useState(0);


  const handleScroll = () => {
    const scrollY = window.scrollY; 
    const rotateValue = scrollY * 0.1;
    setRotation(rotateValue);
  };

  useEffect(() => {

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      className="relative mt-[-86px] flex h-screen w-full items-center justify-center overflow-hidden bg-[url('/images/svg-circle.svg')] bg-cover bg-center bg-no-repeat sm:mt-16 md:mt-[-150px] md:h-[120vh] md:bg-[url('/images/svg-circle.svg')]"
    >
      {/* Smaller SVG */}
      <div
        className="absolute left-0 top-[80px] w-full h-full bg-center bg-no-repeat invisible md:visible"
        style={{
          backgroundImage: "url('/images/svg-hero-circle-xs.svg')",
          transform: `translate(0px, -7%) rotate(${rotation}deg)`,
        }}
      />

      {/* Larger SVG */}
      <div
        className="absolute left-0 top-0 w-full h-[120%] bg-center bg-no-repeat invisible md:visible"
        style={{
          backgroundImage: "url('/images/svg-hero-circle-sm.svg')",
          transform: `translate(0px, -7%) rotate(${rotation}deg)`,
        }}
      />

      <AnimatedDiv className="z-10 text-center">
        <h1 className="text-[33px] font-bold leading-[42px] text-gray-100 md:mt-5 md:text-[64px] md:leading-[80px]">
          DeFi <br /> the Status Quo
        </h1>
        <p className="mx-auto mt-3 max-w-[480px] px-[45px] text-center font-inter text-sm font-normal leading-5 text-gray-200 md:mt-4 md:px-0 md:text-[18px] md:leading-[28px]">
          We’re dismantling predatory systems to build a launch and DeFi hub for
          sustainable growth—aligning and empowering communities and innovative
          builders to thrive together.
        </p>

        <div className="mt-10 flex justify-center md:mt-12">
          <a href="/launchpad" title="Click to launch app">
            <button
              type="button"
              className="mr-[13px] flex cursor-pointer items-center justify-center
                        rounded-[8.84px] bg-gradient-to-r from-[#7A5AFB] to-[#1E60EC]
                        px-[24px] py-[15px] text-base font-bold leading-[19px]
                        text-gray-100 md:mr-6 md:rounded-xl md:px-6 md:py-4
                        md:text-[18px] md:leading-[24px]"
            >
              Launch App
            </button>
          </a>

          <a
            href="https://app.astroport.fi/swap?to=factory/neutron10sr06r3qkhn7xzpw3339wuj77hu06mzna6uht0/eclip"
            target="_blank"
            rel="noopener noreferrer"
            title="Click to get ECLIP"
          >
            <button
              type="button"
              className="flex cursor-pointer items-center rounded-[8.84px]
                        border-gradient-l-purple-blue-purple gradient-border-2
                        box-border px-[24px] py-[15px] text-base font-bold
                        leading-[19px] text-gray-100
                        md:rounded-xl md:px-6 md:py-[14px] md:text-[18px]
                        md:leading-[24px]"
            >
              Get ECLIP
            </button>
          </a>
        </div>
      </AnimatedDiv>

      <div className="absolute bottom-[-40px] left-0 hidden h-[100px] w-full bg-black blur-[42px] md:block"></div>
    </section>
  );
}
