export default function TierVotingCard() {
  return (
    <div className="col-span-4">
      <div className="flex h-[280px] flex-col justify-between gap-5">
        {/* Tier Level */}
        <div className="rounded-xl bg-[#1D1A46] p-5">
          <h2 className="mb-2 font-inter text-p12 text-dark-74">Tier Level</h2>
          <div className="flex flex-col gap-[6px]">
            <p className="text-h20 font-bold text-semantics-white">N/A</p>
            <a
              className="gradient-link flex items-center gap-1 text-h12 font-bold"
              title="Click to Stake now"
              href="https://oruxai.gitbook.io/documentation/tokenomics-and-rewards/usdorux-token/staking"
            >
              Click to Stake Now
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 9.99989C3 9.80097 3.07902 9.61021 3.21967 9.46956C3.36032 9.3289 3.55109 9.24989 3.75 9.24989H14.388L10.23 5.28989C10.1557 5.22245 10.0956 5.14077 10.0534 5.0497C10.0112 4.95863 9.98771 4.86002 9.98432 4.7597C9.98093 4.65939 9.99771 4.55941 10.0337 4.4657C10.0696 4.37199 10.124 4.28644 10.1937 4.21414C10.2633 4.14184 10.3467 4.08425 10.439 4.04479C10.5313 4.00532 10.6306 3.98478 10.7309 3.98438C10.8313 3.98398 10.9307 4.00374 11.0233 4.04247C11.1159 4.08121 11.1998 4.13814 11.27 4.20989L16.77 9.45989C16.8426 9.52985 16.9003 9.61373 16.9398 9.70651C16.9792 9.79929 16.9995 9.89907 16.9995 9.99989C16.9995 10.1007 16.9792 10.2005 16.9398 10.2933C16.9003 10.386 16.8426 10.4699 16.77 10.5399L11.27 15.7899C11.1998 15.8616 11.1159 15.9186 11.0233 15.9573C10.9307 15.996 10.8313 16.0158 10.7309 16.0154C10.6306 16.015 10.5313 15.9945 10.439 15.955C10.3467 15.9155 10.2633 15.8579 10.1937 15.7856C10.124 15.7133 10.0696 15.6278 10.0337 15.5341C9.99771 15.4404 9.98093 15.3404 9.98432 15.2401C9.98771 15.1398 10.0112 15.0411 10.0534 14.9501C10.0956 14.859 10.1557 14.7773 10.23 14.7099L14.388 10.7499H3.75C3.55109 10.7499 3.36032 10.6709 3.21967 10.5302C3.07902 10.3896 3 10.1988 3 9.99989Z"
                  fill="url(#paint0_linear_2948_319)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_2948_319"
                    x1="9.99976"
                    y1="3.98437"
                    x2="9.99976"
                    y2="16.0154"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.343379" stopColor="#AB97FB" />
                    <stop offset="1" stopColor="#C7BAFC" />
                  </linearGradient>
                </defs>
              </svg>
            </a>
          </div>
        </div>

        {/* Voting Power */}
        <div className="rounded-xl bg-[#1D1A46] p-5">
          <h2 className="mb-2 font-inter text-p12 text-dark-74">Voting Power</h2>
          <div className="flex flex-col gap-[6px]">
            <p className="flex items-center gap-2 text-h20 font-bold lining-nums text-semantics-white">
              {/* --- SVG icon (unchanged) --- */}
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* All inner <path>, <defs> remain unchanged */}
                {/* … SVG paths from your original code … */}
              </svg>
              <span className="mt-1.5 font-inter text-p12 font-normal text-dark-74">
                0 ORUX
              </span>
            </p>
            {/* <p className="font-inter text-p12 text-dark-74">
              ≈ 0 Cosmic Essence / darkECLIP
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
}
