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
import Footer from "./components/footer";

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
                    Layer 2s
                  </div>
                  {/* <span className="font-medium"> and</span>
                  <br className="hidden md:block" />
                  <div className="pl-2 md:pl-0 bg-[linear-gradient(to_right,#930606_-5.86%,#b18779_20.49%,#906bf5_46.84%,#da8461_73.19%,#c34ddc_99.55%)] bg-clip-text text-transparent inline">
                    Layer 2s
                  </div> */}
                </h2>
              </div>

              <div className="">
                <p className="font-inter pr-3 text-[12px] leading-[18px] text-gray-200 md:text-[18px] md:leading-[26px] mt-[8px] md:mt-6">
                  For the upcoming cycle, streamlining the user experience is paramount for driving the next wave of adoption. Orux AI is working with partners to radically transform the cross-chain experience, leveraging account abstraction to deliver an intuitive, seamless onboarding process.
                </p>
                <p className="font-inter pr-3 text-[12px] leading-[18px] text-gray-200 md:text-[18px] md:leading-[26px] mt-[8px] md:mt-6">
                  Orux AI is committed to deep ecosystem building and has chosen to focus on emerging Layer-2 ecosystems such as Mantle, Linea, and Base. These networks hold immense potential to provide strong foundations for growth and foster collaborative innovation across the L2 landscape.
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
      <Footer></Footer>
    </div>
  );
}
