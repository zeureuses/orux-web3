export default function MyBalances() {
  return (
    <div className="col-span-3 rounded-2xl bg-[#1D1A46] p-6">
      <h2 className="mb-5 text-h12 font-medium uppercase tracking-wider text-secondary-light">
        My Balances
      </h2>

      <div className="scroll1 flex flex-col gap-5 md:max-h-[194px] md:overflow-hidden md:overflow-y-auto">
        {/* ---- ORUC ---- */}
        <div className="rounded-lg bg-[#27235d] text-white px-4 py-5 transition-all bg-gradient-secondaryDefault8">
          <div className="flex items-start gap-2">
            <div className="flex-shrink-0 ">
              {/* ORUC SVG */}
              {/* <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="12" fill="#7B5BFC" />
                <circle cx="12" cy="12" r="12" fill="url(#paint0_linear_4871_1915)" />
                <path
                  d="M11.7471 5.70996C9.56849 5.70996 7.63477 6.73653 6.42188 8.32383C7.2479 7.72135 8.2714 7.36442 9.38061 7.36442C12.1208 7.36442 14.3418 9.54171 14.3418 12.2276C14.3418 14.9132 12.1208 17.0906 9.38061 17.0906C8.2714 17.0906 7.2479 16.7338 6.42188 16.1312C7.63471 17.7181 9.56843 18.745 11.7471 18.745C15.4195 18.745 18.3968 15.8264 18.3968 12.2277C18.3968 8.62812 15.4195 5.70996 11.7471 5.70996Z"
                  fill="white"
                />
                <path
                  d="M8.38128 12.2454C8.38128 10.743 9.62407 9.52506 11.1564 9.52506C11.3844 9.52506 11.6061 9.55253 11.8181 9.60351C11.1678 9.01582 10.2993 8.65625 9.34475 8.65625C7.32912 8.65625 5.69531 10.2578 5.69531 12.2334C5.69531 14.2088 7.32912 15.8105 9.34475 15.8105C10.2822 15.8105 11.1366 15.464 11.783 14.8946C11.5814 14.9402 11.372 14.9649 11.1564 14.9649C9.62407 14.965 8.38128 13.7479 8.38128 12.2454Z"
                  fill="white"
                />
                <defs>
                  <linearGradient id="paint0_linear_4871_1915" x1="1.7341" y1="-0.923077" x2="26.9738" y2="2.85836" gradientUnits="userSpaceOnUse">
                    <stop offset="0.242717" stopColor="#7A5AFB" />
                    <stop offset="1" stopColor="#1E60EC" />
                  </linearGradient>
                </defs>
              </svg> */}
            </div>

            <div className="flex flex-col">
              <div className="flex flex-col gap-1">
                <span className="flex items-center gap-1 text-h16 font-bold lining-nums text-semantics-white">
                  0.00
                  <span className="font-inter text-p12 font-normal text-dark-74">ORUX</span>
                </span>
                <span className="font-inter text-p12 font-normal text-dark-74">≈ $0.00 USD</span>
              </div>

              <div className="mt-2 block">
                <a
                  className="gradient-link flex items-center gap-1 text-h12 font-bold"
                  title="Click to get ECLIP"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://oruxai.gitbook.io/documentation/tokenomics-and-rewards/usdorux-token/staking"
                >
                  Get ORUX
                  {/* arrow svg */}
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M3 9.99989C3 9.80097 3.07902 9.61021 3.21967 9.46956C3.36032 9.3289 3.55109 9.24989 3.75 9.24989H14.388L10.23 5.28989C10.1557 5.22245 10.0956 5.14077 10.0534 5.0497..."
                      fill="url(#paint0_linear_2948_319)"
                    />
                    <defs>
                      <linearGradient id="paint0_linear_2948_319" x1="9.99976" y1="3.98437" x2="9.99976" y2="16.0154" gradientUnits="userSpaceOnUse">
                        <stop offset="0.343379" stopColor="#AB97FB" />
                        <stop offset="1" stopColor="#C7BAFC" />
                      </linearGradient>
                    </defs>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
