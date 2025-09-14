import React from "react";
import Image from "next/image";
import bb from "/public/images/era.jpg";
import AnimatedDiv from "./AnimatedDiv";
import Link from "next/link";

export default function ProjectsSection() {
  return (
    <section className="w-full min-h-[80vh] py-[2rem] md:py-[3rem] bg-blue-900">
      <div className="content-wrapper container mx-auto flex flex-col justify-center gap-8 md:gap-12 px-4">
        <AnimatedDiv className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex flex-col max-w-[600px]">
            <h1 className="text-[20px] text-center md:text-left md:text-[24px] lg:text-[36px] font-bold leading-[24px] md:leading-[26px] lg:leading-[44px] text-gray-100">
              Your projects
            </h1>
            <p className="mt-[8px] font-inter text-center md:text-left text-sm md:text-base font-normal leading-normal text-gray-100/[0.7]">
              Launch your project on our platforms and benefit from our solutions
            </p>
          </div>

        </AnimatedDiv>

        <AnimatedDiv className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 w-full">
          {/* Card 1 */}
          <div className="rounded-2xl bg-[#1C1B3A] p-3 md:p-4 shadow-xl text-white font-inter h-full w-full">
            <div className="rounded-xl overflow-hidden w-full mb-4 flex flex-col gap-4">
              <Image
                src={bb}
                alt="hero-image"
                width={400}
                height={400}
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 400px"
                className="object-cover h-[180px] md:h-[200px] w-full"
              />
              <div className="flex flex-row gap-2 items-center">
                <Image
                  src={bb}
                  alt="app-icon"
                  width={40}
                  height={40}
                  sizes="40px"
                  className="object-cover rounded-lg"
                />
                <button className="bg-[#3B2DF4] text-xs font-bold text-white px-2 md:px-[0.75rem] py-1 md:py-[0.5rem] rounded-md">
                  IDO
                </button>
                <button className="bg-[#FBBF24] text-xs font-semibold text-black px-2 md:px-[0.75rem] py-1 md:py-[0.5rem] rounded-md">
                  Upcoming
                </button>
              </div>
            </div>
            <div className="mt-4 flex flex-col gap-1">
              <h3 className="text-base md:text-lg font-bold">Sample Project</h3>
              <p className="text-xs md:text-sm text-gray-300">
                The Blockchain for emerging markets...
              </p>
            </div>
            <div className="mt-4 flex justify-between items-center bg-[#29285B] rounded-xl p-3 md:p-4 text-xs md:text-sm">
              <div className="flex flex-col">
                <span className="text-gray-400">Raise</span>
                <span className="font-bold text-white">
                  100,000 <span className="text-xs text-gray-400">USD</span>
                </span>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-gray-400">Applications Open In</span>
                <span className="font-bold text-white">TBA</span>
              </div>
            </div>
            <div className="mt-4">
              <Link
                href="https://forms.fillout.com/t/skbMAxUX2bus"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 py-2 md:py-3 font-bold text-white transition duration-300 hover:opacity-90 text-sm md:text-base"
              >
                <svg
                  className="w-4 h-4 md:w-6 md:h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 16l4-4-4-4m5 8V8"
                  />
                </svg>
                Apply Now
              </Link>
            </div>
          </div>

          {/* Card 2 */}
          <div className="rounded-2xl bg-[#1C1B3A] p-3 md:p-4 shadow-xl text-white font-inter h-full w-full">
            <div className="rounded-xl overflow-hidden w-full mb-4 flex flex-col gap-4">
              <Image
                src={bb}
                alt="hero-image"
                width={400}
                height={400}
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 400px"
                className="object-cover h-[180px] md:h-[200px] w-full"
              />
              <div className="flex flex-row gap-2 items-center">
                <Image
                  src={bb}
                  alt="app-icon"
                  width={40}
                  height={40}
                  sizes="40px"
                  className="object-cover rounded-lg"
                />
                <button className="bg-[#3B2DF4] text-xs font-bold text-white px-2 md:px-[0.75rem] py-1 md:py-[0.5rem] rounded-md">
                  IDO
                </button>
                <button className="bg-[#FBBF24] text-xs font-semibold text-black px-2 md:px-[0.75rem] py-1 md:py-[0.5rem] rounded-md">
                  Upcoming
                </button>
              </div>
            </div>
            <div className="mt-4 flex flex-col gap-1">
              <h3 className="text-base md:text-lg font-bold">Sample Project</h3>
              <p className="text-xs md:text-sm text-gray-300">
                The Blockchain for emerging markets...
              </p>
            </div>
            <div className="mt-4 flex justify-between items-center bg-[#29285B] rounded-xl p-3 md:p-4 text-xs md:text-sm">
              <div className="flex flex-col">
                <span className="text-gray-400">Raise</span>
                <span className="font-bold text-white">
                  100,000 <span className="text-xs text-gray-400">USD</span>
                </span>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-gray-400">Applications Open In</span>
                <span className="font-bold text-white">TBA</span>
              </div>
            </div>
            <div className="mt-4">
              <Link
                href="https://forms.fillout.com/t/skbMAxUX2bus"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 py-2 md:py-3 font-bold text-white transition duration-300 hover:opacity-90 text-sm md:text-base"
              >
                <svg
                  className="w-4 h-4 md:w-5 md:h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 16l4-4-4-4m5 8V8"
                  />
                </svg>
                Apply Now
              </Link>
            </div>
          </div>

          {/* Card 3 */}
          <div className="rounded-2xl bg-[#1C1B3A] p-3 md:p-4 shadow-xl text-white font-inter h-full w-full">
            <div className="rounded-xl overflow-hidden w-full mb-4 flex flex-col gap-4">
              <Image
                src={bb}
                alt="hero-image"
                width={400}
                height={400}
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 400px"
                className="object-cover h-[180px] md:h-[200px] w-full"
              />
              <div className="flex flex-row gap-2 items-center">
                <Image
                  src={bb}
                  alt="app-icon"
                  width={40}
                  height={40}
                  sizes="40px"
                  className="object-cover rounded-lg"
                />
                <button className="bg-[#3B2DF4] text-xs font-bold text-white px-2 md:px-[0.75rem] py-1 md:py-[0.5rem] rounded-md">
                  IDO
                </button>
                <button className="bg-[#FBBF24] text-xs font-semibold text-black px-2 md:px-[0.75rem] py-1 md:py-[0.5rem] rounded-md">
                  Upcoming
                </button>
              </div>
            </div>
            <div className="mt-4 flex flex-col gap-1">
              <h3 className="text-base md:text-lg font-bold">Sample Project</h3>
              <p className="text-xs md:text-sm text-gray-300">
                The Blockchain for emerging markets...
              </p>
            </div>
            <div className="mt-4 flex justify-between items-center bg-[#29285B] rounded-xl p-3 md:p-4 text-xs md:text-sm">
              <div className="flex flex-col">
                <span className="text-gray-400">Raise</span>
                <span className="font-bold text-white">
                  100,000 <span className="text-xs text-gray-400">USD</span>
                </span>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-gray-400">Applications Open In</span>
                <span className="font-bold text-white">TBA</span>
              </div>
            </div>
            <div className="mt-4">
              <Link
                href="https://forms.fillout.com/t/skbMAxUX2bus"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 py-2 md:py-3 font-bold text-white transition duration-300 hover:opacity-90 text-sm md:text-base"
              >
                <svg
                  className="w-4 h-4 md:w-5 md:h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 16l4-4-4-4m5 8V8"
                  />
                </svg>
                Apply Now
              </Link>
            </div>
          </div>

          {/* Card 4 */}
          <div className="rounded-2xl bg-[#1C1B3A] p-3 md:p-4 shadow-xl text-white font-inter h-full w-full">
            <div className="rounded-xl overflow-hidden w-full mb-4 flex flex-col gap-4">
              <Image
                src={bb}
                alt="hero-image"
                width={400}
                height={400}
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 400px"
                className="object-cover h-[180px] md:h-[200px] w-full"
              />
              <div className="flex flex-row gap-2 items-center">
                <Image
                  src={bb}
                  alt="app-icon"
                  width={40}
                  height={40}
                  sizes="40px"
                  className="object-cover rounded-lg"
                />
                <button className="bg-[#3B2DF4] text-xs font-bold text-white px-2 md:px-[0.75rem] py-1 md:py-[0.5rem] rounded-md">
                  IDO
                </button>
                <button className="bg-[#FBBF24] text-xs font-semibold text-black px-2 md:px-[0.75rem] py-1 md:py-[0.5rem] rounded-md">
                  Upcoming
                </button>
              </div>
            </div>
            <div className="mt-4 flex flex-col gap-1">
              <h3 className="text-base md:text-lg font-bold">Sample Project</h3>
              <p className="text-xs md:text-sm text-gray-300">
                The Blockchain for emerging markets...
              </p>
            </div>
            <div className="mt-4 flex justify-between items-center bg-[#29285B] rounded-xl p-3 md:p-4 text-xs md:text-sm">
              <div className="flex flex-col">
                <span className="text-gray-400">Raise</span>
                <span className="font-bold text-white">
                  100,000 <span className="text-xs text-gray-400">USD</span>
                </span>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-gray-400">Applications Open In</span>
                <span className="font-bold text-white">TBA</span>
              </div>
            </div>
            <div className="mt-4">
              <Link
                href="https://forms.fillout.com/t/skbMAxUX2bus"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 py-2 md:py-3 font-bold text-white transition duration-300 hover:opacity-90 text-sm md:text-base"
              >
                <svg
                  className="w-4 h-4 md:w-5 md:h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 16l4-4-4-4m5 8V8"
                  />
                </svg>
                Apply Now
              </Link>
            </div>
          </div>
        </AnimatedDiv>
      </div>
    </section>
  );
}
