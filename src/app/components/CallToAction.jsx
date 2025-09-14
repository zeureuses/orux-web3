import React from "react";


export default function CTAsection() {
  return (
    <section className="container w-full mx-auto px-5">
      <div className="h-[229px] rounded-xl bg-[url('/images/svg-apply-to-launch.svg')] bg-cover bg-center bg-no-repeat px-5 md:h-[370px] md:rounded-[40px]">
        <div className="flex h-full flex-col items-center justify-center">
          <div className="mx-auto mb-[6px] max-w-[240px] text-center font-sans text-[16px] font-bold leading-[24px] text-gray-100 md:mb-3 md:max-w-[700px] md:text-[36px] md:leading-[42px]">
            Are you ready
            <br /> for your launch on Eclipse FI?
          </div>
          <div className="mb-5 max-w-[255px] text-center font-inter text-[12px] leading-[18px] text-gray-200 md:mb-10 md:max-w-[650px] md:text-[18px] md:leading-8">
            Apply to launch your project and token through the Eclipse Fi
            protocol or submit an early expression of interest.
          </div>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://airtable.com/appocm8m9oZWPJv0t/pagBaVi0C6GsDZ6o5/form"
          >
            <button
              className="flex cursor-pointer items-center justify-center text-gray-100 bg-gradient-to-r from-[#7A5AFB] to-[#1E60EC] rounded-[8.84px] px-[10px] py-[6px] text-sm font-bold leading-[19px] md:rounded-xl md:px-6 md:py-4 md:text-[18px] md:leading-[24px] hover:opacity-90 transition-opacity duration-300"
              type="button"
            >
              Apply Now
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
