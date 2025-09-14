"use client";

import Image from "next/image";
import Link from "next/link";

import ScrollingLogos from "./components/ScrollingLogos";
import FeaturesSection from "./components/FeatureSection";
import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectsSection";
import FeaturesTwoSection from "./components/FeatureTwoSection";
import Navbar from "./components/NavBar";
import CTAsection from "./components/CallToAction";
import AnimatedDiv from "./components/AnimatedDiv";

export default function Home() {
  return (
    <div className="font-sans flex flex-col min-h-screen w-full bg-[#060923]">
      <Navbar></Navbar>

      <main className="flex flex-col items-center">
        <HeroSection></HeroSection>
        <FeaturesSection></FeaturesSection>
        <ProjectsSection></ProjectsSection>

        {/* Judantis section - neliesk, gali suluzt */}
        <section className="relative w-full overflow-hidden bg-[url('/images/svg-innovation-bg.svg')] bg-cover bg-center bg-no-repeat">
          <style jsx>{`
            @keyframes float {
              0%,
              100% {
                transform: translateY(0);
              }
              50% {
                transform: translateY(-20px); /* Floating distance */
              }
            }

            .animate-float {
              animation: float 3s ease-in-out infinite; /* Animation duration */
            }
          `}</style>

          <div className="pb-[80px] pl-[20%] pt-[190px] md:py-[450px] md:pl-[40%]">
            <AnimatedDiv className="w-[300px] md:w-[550px]">
              <div className="">
                <h3 className="text-[22px] font-medium leading-[24px] text-gray-100 md:text-[34px] md:leading-[58px]">
                  Fostering innovation across
                </h3>
                <h2 className="mb-[6px] text-[22px] font-bold leading-[28px] text-gray-100 md:mb-[26px] md:text-[72px] md:leading-[76px]">
                  <div className="bg-[linear-gradient(to_right,#930606_-5.86%,#b18779_20.49%,#906bf5_46.84%,#da8461_73.19%,#c34ddc_99.55%)] bg-clip-text text-transparent inline">
                    Cosmos
                  </div>
                  <span className="font-medium"> and</span>
                  <br className="hidden md:block" />
                  <div className="pl-2 md:pl-0 bg-[linear-gradient(to_right,#930606_-5.86%,#b18779_20.49%,#906bf5_46.84%,#da8461_73.19%,#c34ddc_99.55%)] bg-clip-text text-transparent inline">
                    Layer 2s
                  </div>
                </h2>
              </div>

              <div className="">
                <p className="font-inter pr-3 text-[12px] leading-[18px] text-gray-200 md:text-[18px] md:leading-[26px] mt-[8px] md:mt-6">
                  For the upcoming cycle, streamlining the user experience is
                  paramount for the next wave of adoption. Eclipse Fi is working
                  with partners to radically transform the cross-chain user
                  experience, leveraging account abstraction to create an
                  intuitive &quot;onboard your grandma&quot; level experience.
                </p>
                <p className="font-inter pr-3 text-[12px] leading-[18px] text-gray-200 md:text-[18px] md:leading-[26px] mt-[8px] md:mt-6">
                  Eclipse Fi is committed to deep ecosystem building and has
                  selected to focus on the Cosmos ecosystem with a homebase on
                  Neutron blockchain, as well as emerging layer-2s like Mantle,
                  Linea and Base. These ecosystems hold immense potential for
                  robust foundations and collaborative ecosystem growth.
                </p>
              </div>
            </AnimatedDiv>
          </div>
          <div className="absolute left-[-50px] top-[169px] h-[100px] w-[100px] animate-float bg-[url('/images/svg-floating-circle.svg')] bg-contain md:left-[20%] md:top-[350px] md:h-[219px] md:w-[219px]" />
          <div className="absolute top-[350px] h-[44px] w-[44px] animate-float bg-[url('/images/svg-floating-circle-2.svg')] bg-contain bg-no-repeat md:bottom-[450px] md:left-[30%] md:top-[unset] md:h-[98px] md:w-[98px]" />
          <div className="absolute right-[-10px] top-[180px] h-[40px] w-[40px] animate-float bg-[url('/images/svg-floating-circle-3.svg')] bg-contain bg-no-repeat md:left-[80%] md:top-[450px] md:h-[98px] md:w-[98px]" />
        </section>

        <FeaturesTwoSection></FeaturesTwoSection>

        <CTAsection></CTAsection>

        <ScrollingLogos></ScrollingLogos>

        {/* CTA EMAILU <div className="container mx-auto mb-16 mt-[68px] px-5 md:mb-[217px] md:mt-[218px]">
          <div className="h-[200px] rounded-2xl bg-purple-600 px-5 md:h-[370px] md:rounded-[40px] md:px-0">
            <form className="flex h-full flex-col items-center justify-center">
              <div>
                <div className="mx-auto mb-2 text-center text-base font-bold leading-[18px] text-gray-100 md:mb-3 md:max-w-[700px] md:text-[36px] md:leading-[42px]">
                  Dont miss out on the next great innovations launching on
                  Eclipse FI
                </div>
                <div className="mx-auto mb-5 max-w-[505px] text-center font-inter text-p12 leading-[14px] text-gray-200 md:mb-10 md:text-[18px] md:leading-8">
                  Stay up to date about upcoming Cosmos and L2 launches by
                  joining our mailing list
                </div>
              </div>
              <div>
                <div className="flex">
                  <input
                    type="email"
                    className="mr-2 rounded-xl border-[1.5px] border-trans-dark-600 bg-[#7554D5] px-3 py-2 font-medium text-gray-100 outline-none placeholder:text-purple-700 md:mr-5 md:px-6 md:py-4 md:font-[18px]"
                    placeholder="Enter email here"
                    required
                  />
                  <button
                    className="flex cursor-pointer items-center justify-center text-gray-100 bg-gradient-to-r from-[#7A5AFB] to-[#1E60EC] rounded-[8.84px] px-[10px] py-[6px] text-base font-bold leading-[19px] md:rounded-xl md:px-6 md:py-4 md:text-[18px] md:leading-6"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div> */}
      </main>

      <footer className="bg-white dark:bg-gray-900 w-full">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <Link href="/" title="Click to go home" className="">
                <Image
                  src="/images/logo.png"
                  alt="CRUX Logo"
                  width={140}
                  height={40}
                  className="h-[40px] md:h-[60px] w-auto"
                />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Resources
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a
                      href="https://tailwindcss.com/"
                      className="hover:underline"
                    >
                      Tailwind CSS
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://tailwindcss.com/"
                      className="hover:underline"
                    >
                      Tailwind CSS
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Legal
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Terms &amp; Conditions
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-span-1 flex flex-col gap-4">
              <div className="flex items-center gap-2 font-inter text-sm leading-5 text-[#A5AED5]">
                $ECLIP Arbitrum
                <button
                  className="cursor-pointer"
                  aria-label="ECLIP Arbitrum options"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 16H6C5.46957 16 4.96086 15.7893 4.58579 15.4142C4.21071 15.0391 4 14.5304 4 14V6C4 5.46957 4.21071 4.96086 4.58579 4.58579C4.96086 4.21071 5.46957 4 6 4H14C14.5304 4 15.0391 4.21071 15.4142 4.58579C15.7893 4.96086 16 5.46957 16 6V8M10 20H18C18.5304 20 19.0391 19.7893 19.4142 19.4142C19.7893 19.0391 20 18.5304 20 18V10C20 9.46957 19.7893 8.96086 19.4142 8.58579C19.0391 8.21071 18.5304 8 18 8H10C9.46957 8 8.96086 8.21071 8.58579 8.58579C8.21071 8.96086 8 9.46957 8 10V18C8 18.5304 8.21071 19.0391 8.58579 19.4142C8.96086 19.7893 9.46957 20 10 20Z"
                      stroke="black"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8 16H6C5.46957 16 4.96086 15.7893 4.58579 15.4142C4.21071 15.0391 4 14.5304 4 14V6C4 5.46957 4.21071 4.96086 4.58579 4.58579C4.96086 4.21071 5.46957 4 6 4H14C14.5304 4 15.0391 4.21071 15.4142 4.58579C15.7893 4.96086 16 5.46957 16 6V8M10 20H18C18.5304 20 19.0391 19.7893 19.4142 19.4142C19.7893 19.0391 20 18.5304 20 18V10C20 9.46957 19.7893 8.96086 19.4142 8.58579C19.0391 8.21071 18.5304 8 18 8H10C9.46957 8 8.96086 8.21071 8.58579 8.58579C8.21071 8.96086 8 9.46957 8 10V18C8 18.5304 8.21071 19.0391 8.58579 19.4142C8.96086 19.7893 9.46957 20 10 20Z"
                      stroke="url(#paint0_linear_1943_33358)"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_1943_33358"
                        x1="12"
                        y1="4"
                        x2="12"
                        y2="20"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0.343379" stopColor="#AB97FB" />
                        <stop offset="1" stopColor="#C7BAFC" />
                      </linearGradient>
                    </defs>
                  </svg>
                </button>
              </div>

              <div className="flex items-center gap-2 font-inter text-sm leading-5 text-[#A5AED5]">
                $ECLIP Neutron
                <button
                  className="cursor-pointer"
                  aria-label="ECLIP Neutron options"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 16H6C5.46957 16 4.96086 15.7893 4.58579 15.4142C4.21071 15.0391 4 14.5304 4 14V6C4 5.46957 4.21071 4.96086 4.58579 4.58579C4.96086 4.21071 5.46957 4 6 4H14C14.5304 4 15.0391 4.21071 15.4142 4.58579C15.7893 4.96086 16 5.46957 16 6V8M10 20H18C18.5304 20 19.0391 19.7893 19.4142 19.4142C19.7893 19.0391 20 18.5304 20 18V10C20 9.46957 19.7893 8.96086 19.4142 8.58579C19.0391 8.21071 18.5304 8 18 8H10C9.46957 8 8.96086 8.21071 8.58579 8.58579C8.21071 8.96086 8 9.46957 8 10V18C8 18.5304 8.21071 19.0391 8.58579 19.4142C8.96086 19.7893 9.46957 20 10 20Z"
                      stroke="black"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8 16H6C5.46957 16 4.96086 15.7893 4.58579 15.4142C4.21071 15.0391 4 14.5304 4 14V6C4 5.46957 4.21071 4.96086 4.58579 4.58579C4.96086 4.21071 5.46957 4 6 4H14C14.5304 4 15.0391 4.21071 15.4142 4.58579C15.7893 4.96086 16 5.46957 16 6V8M10 20H18C18.5304 20 19.0391 19.7893 19.4142 19.4142C19.7893 19.0391 20 18.5304 20 18V10C20 9.46957 19.7893 8.96086 19.4142 8.58579C19.0391 8.21071 18.5304 8 18 8H10C9.46957 8 8.96086 8.21071 8.58579 8.58579C8.21071 8.96086 8 9.46957 8 10V18C8 18.5304 8.21071 19.0391 8.58579 19.4142C8.96086 19.7893 9.46957 20 10 20Z"
                      stroke="url(#paint1_linear_1943_33358)"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <defs>
                      <linearGradient
                        id="paint1_linear_1943_33358"
                        x1="12"
                        y1="4"
                        x2="12"
                        y2="20"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0.343379" stopColor="#AB97FB" />
                        <stop offset="1" stopColor="#C7BAFC" />
                      </linearGradient>
                    </defs>
                  </svg>
                </button>
              </div>
            </div>


          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2023{" "}
              <a href="https://flowbite.com/" className="hover:underline">
                Flowbite™
              </a>
              . All Rights Reserved.
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
