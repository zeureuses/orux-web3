"use client";

// Connect wallet sharshalai
import React, { useCallback, useEffect, useState } from "react";
import { ethers } from "ethers";


import Link from "next/link";
import MyBalances from "../components/dashboardComps/myBalances";
import TierVotingCard from "../components/dashboardComps/tierVotingCard";
import TotalHoldings from "../components/dashboardComps/totalHoldings";

// ▸ Replace these placeholder icons with your real SVG components
const DashboardIcon = () => <span>📊</span>;
const StakeIcon = () => <span>💎</span>;
const MoreIcon = () => <span>⋯</span>;
const WalletIcon = () => <span>��</span>;

export default function DashboardPage() {
  const [moreMenuOpen, setMoreMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("overview"); // <── controls tab view

  // Connect wallet sharshalai
  const [provider, setProvider] = useState(null);
  const [address, setAddress] = useState(null);
  const [chainId, setChainId] = useState(null);
  const [connecting, setConnecting] = useState(false);
  const [error, setError] = useState(null);

  // Set up provider and listeners on the client
  useEffect(() => {
    if (typeof window !== "undefined" && window.ethereum) {
      const p = new ethers.BrowserProvider(window.ethereum, "any");
      setProvider(p);

      const onAccountsChanged = (accounts) => setAddress(accounts[0] || null);
      const onChainChanged = (hexId) => setChainId(parseInt(hexId, 16));

      window.ethereum.on("accountsChanged", onAccountsChanged);
      window.ethereum.on("chainChanged", onChainChanged);

      return () => {
        if (!window.ethereum) return;
        window.ethereum.removeListener("accountsChanged", onAccountsChanged);
        window.ethereum.removeListener("chainChanged", onChainChanged);
      };
    }
  }, []);

  const connectWallet = useCallback(async () => {
    setError(null);
    if (!provider) {
      setError("No MetaMask wallet detected.");
      return;
    }
    setConnecting(true);
    try {
      // Ask MetaMask for permission
      await provider.send("eth_requestAccounts", []);

      // Get signer + address
      const signer = await provider.getSigner();
      const addr = await signer.getAddress();
      setAddress(addr);

      // Get current chain
      const net = await provider.getNetwork();
      setChainId(Number(net.chainId));

      console.log("Connected:", addr, "on chain", net.chainId.toString());
    } catch (e) {
      console.error(e);
      setError(e?.message || "Failed to connect wallet.");
    } finally {
      setConnecting(false);
    }
  }, [provider]);



  return (
    <main className="bg-[#060923] flex flex-col min-h-screen w-full">
      {/* ======= NAVIGATION BAR ======= */}
      <div className="fixed left-0 right-0 top-0 z-50">
        <div className="border-b border-white/10 bg-gradient-to-b from-[#0E0928] to-transparent px-4 backdrop-blur-2xl">
          <div className="container mx-auto flex h-[72px] items-center justify-between">
            {/* Left: Logo and main navigation */}
            <div className="flex flex-row items-center gap-8">
              <Link href="/" className="text-2xl font-bold text-white">
                LOGO
              </Link>
              <div className="h-[24px] w-[1px] bg-white bg-opacity-10" />

              <div className="flex items-center gap-5">
                <button
                  onClick={() => setActiveTab("overview")}
                  className={`text-sm font-medium flex items-center gap-2 px-3 py-2 rounded-full transition-all ${
                    activeTab === "overview"
                      ? "text-white text-opacity-100 font-bold bg-white/5"
                      : "text-white text-opacity-70 hover:text-opacity-100 hover:bg-white/5"
                  }`}
                >
                  <DashboardIcon /> Overview
                </button>

                <button
                  onClick={() => setActiveTab("kyc")}
                  className={`text-sm font-medium flex items-center gap-2 px-3 py-2 rounded-full transition-all ${
                    activeTab === "kyc"
                      ? "text-white text-opacity-100 font-bold bg-white/5"
                      : "text-white text-opacity-70 hover:text-opacity-100 hover:bg-white/5"
                  }`}
                >
                  KYC
                </button>

                <button
                  onClick={() => setActiveTab("stake")}
                  className={`text-sm font-medium flex items-center gap-2 px-3 py-2 rounded-full transition-all ${
                    activeTab === "stake"
                      ? "text-white text-opacity-100 font-bold bg-white/5"
                      : "text-white text-opacity-70 hover:text-opacity-100 hover:bg-white/5"
                  }`}
                >
                  <StakeIcon /> Stake
                </button>


                {/* More dropdown */}
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setMoreMenuOpen(!moreMenuOpen)}
                    className="flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium text-white text-opacity-70 hover:bg-white/5"
                  >
                    More <MoreIcon />
                  </button>
                  {moreMenuOpen && (
                    <div className="absolute top-full right-0 mt-2 w-48 bg-[#0E0928]/95 backdrop-blur-sm border border-white/10 rounded-lg shadow-lg py-2">
                      <Link
                        href="/docs"
                        className="block px-4 py-2 text-sm text-white hover:bg-white/5"
                      >
                        Documentation
                      </Link>
                      <Link
                        href="/support"
                        className="block px-4 py-2 text-sm text-white hover:bg-white/5"
                      >
                        Support
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Right: Connect Wallet */}
            <button
              onClick={connectWallet}  // Ce pakeiceu
              disabled={connecting}
              className="inline-flex items-center gap-2 h-[48px] px-4 rounded-3xl border-[1.5px] border-[#7A5AFB] bg-black/20 text-white font-bold text-sm hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-blue-500/20"
            >
              <WalletIcon />{" "} 
              {/* Ce pakeiceu */}
              {address ? "Wallet Connected" : "Connect Wallet"} 
            </button>
          </div>
        </div>
      </div>

      {/* ======= MAIN CONTENT ======= */}
      <div className="container mx-auto mt-20 flex-1 px-4 md:mt-36">
        {activeTab === "overview" && (
          <>
            <h2 className="mb-2 text-3xl font-bold text-white">Overview</h2>
            <h1>{address ? address : ""}</h1>
            <p className="mb-10 text-2xl text-gray-400">
              Track all your investments in Eclipse Ecosystem in one place.
            </p>

            {/* ce pakeiceu */}
            {address ? (
              <div className="mb-14 bg-[#1D1A46] flex flex-col gap-8 md:grid md:grid-cols-12 md:items-start">
                <TotalHoldings />
                <TierVotingCard />
                <MyBalances />
              </div>
            ) : (
              <div className="flex flex-col items-center rounded-xl bg-[#1D1A46] py-12 md:rounded-[40px]">
                <div className="w-24 h-24 rounded-full bg-[#211F52] mb-6" />
                <h3 className="mt-2 text-2xl font-bold text-gray-100">
                  Connect your wallet
                </h3>
                <p className="mt-2 text-center text-sm text-gray-300">
                  Please connect your wallet to view your dashboard.
                </p>
                <button
                  onClick={connectWallet}
                  disabled={connecting}
                  className="mt-6 rounded-xl bg-gradient-to-r from-[#7A5AFB] to-[#1E60EC] px-6 py-3 font-bold text-white"
                >
                  {connecting ? "Connecting..." : "Connect wallet"}
                </button>
              </div>
            )}
          </>
        )}

        {activeTab === "kyc" && (
          <>
            <h2 className="mb-2 text-3xl font-bold text-white">KYC</h2>
            <p className="mb-10 text-2xl text-gray-400">
              Verify your identity to participate in the ecosystem.
            </p>
            <div className="mb-20 flex flex-col items-center rounded-xl bg-[#1D1A46] py-12 md:rounded-[40px]">
              <svg
                width="185"
                height="149"
                viewBox="0 0 185 149"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="93" cy="74.8242" r="62" fill="#211F52"></circle>
                <g clipPath="url(#clip0_2634_1591)">
                  <rect
                    x="57.3906"
                    y="53.0615"
                    width="71.666"
                    height="42.999"
                    fill="#120C36"
                  ></rect>
                  <path
                    d="M60.3479 51.1016H125.652C128.876 51.1016 131.5 53.7252 131.5 56.9494V92.6377C131.5 95.8619 128.876 98.4856 125.652 98.4856H60.3479C57.1237 98.4856 54.5 95.8619 54.5 92.6377V56.9494C54.5 53.7252 57.1237 51.1016 60.3479 51.1016ZM125.652 94.7504C126.817 94.7504 127.765 93.8028 127.765 92.6371V56.9494C127.765 55.7842 126.817 54.8367 125.652 54.8367H60.3479C59.1826 54.8367 58.2352 55.7842 58.2352 56.9494V92.6371C58.2352 93.8028 59.1825 94.7504 60.3479 94.7504H125.652Z"
                    fill="#98B9FF"
                    stroke="#120C36"
                  ></path>
                  <path
                    d="M75.846 65.7531C76.6766 64.9219 77.7685 64.5075 78.8578 64.5075C79.9472 64.5075 81.0391 64.922 81.8702 65.7531C83.5312 67.4141 83.5312 70.1164 81.8702 71.7774C80.2087 73.4389 77.5071 73.439 75.846 71.7775M85.0574 73.8137L84.6674 74.2919L85.216 74.5743C87.5178 75.7591 89.4887 77.5738 90.8425 79.8577C91.9377 81.705 91.9553 83.9215 90.887 85.7972L91.3214 86.0447C89.8087 88.8165 87.872 88.8165 85.6984 88.8165H72.0172C69.8431 88.8165 67.9068 87.6903 66.828 85.7971C65.7597 83.9215 65.7779 81.7051 66.8731 79.8578C68.2269 77.5738 70.1978 75.7591 72.4995 74.5743L73.0482 74.2919L72.6582 73.8137C70.0996 70.6772 70.2821 66.0346 73.2045 63.1122C76.3215 59.9952 81.3947 59.9952 84.5111 63.1122C87.4335 66.0346 87.616 70.6772 85.0574 73.8137ZM70.0736 83.9481C70.2604 84.2754 70.8417 85.0813 72.0172 85.0813H85.6984C86.8725 85.0813 87.4545 84.2766 87.6413 83.9483C87.8233 83.6299 88.2103 82.7423 87.6293 81.7621C85.8 78.6767 82.4404 76.7605 78.8578 76.7605C75.2746 76.7605 71.915 78.6767 70.0857 81.7621C69.5042 82.7432 69.8931 83.6313 70.0736 83.9481Z"
                    fill="#98B9FF"
                    stroke="#120C36"
                  ></path>
                  <path
                    d="M103.242 63.9727H119.645C120.677 63.9727 121.513 64.8088 121.513 65.8399C121.513 66.8717 120.677 67.7078 119.645 67.7078H103.242C102.211 67.7078 101.375 66.8719 101.375 65.8399C101.375 64.8087 102.211 63.9727 103.242 63.9727Z"
                    fill="#98B9FF"
                    stroke="#120C36"
                  ></path>
                  <path
                    d="M103.242 72.9258H119.645C120.677 72.9258 121.513 73.7619 121.513 74.7931C121.513 75.8248 120.677 76.6609 119.645 76.6609H103.242C102.211 76.6609 101.375 75.825 101.375 74.7931C101.375 73.7618 102.211 72.9258 103.242 72.9258Z"
                    fill="#98B9FF"
                    stroke="#120C36"
                  ></path>
                  <path
                    d="M103.242 81.8789H116.145C117.177 81.8789 118.013 82.7151 118.013 83.7462C118.013 84.778 117.176 85.6141 116.145 85.6141H103.242C102.211 85.6141 101.375 84.7781 101.375 83.7462C101.375 82.7149 102.211 81.8789 103.242 81.8789Z"
                    fill="#98B9FF"
                    stroke="#120C36"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_2634_1591">
                    <rect
                      width="78"
                      height="78"
                      fill="white"
                      transform="translate(54 35.8242)"
                    ></rect>
                  </clipPath>
                </defs>
              </svg>

              <h2 className="mt-7 text-center text-[28px] font-bold leading-[33px] text-gray-100">
                Complete KYC to be considered
              </h2>

              <p className="mt-2 px-4 text-center font-inter text-[16px] leading-5 text-semantics-white md:px-0">
                You must have some NTRN in your wallet to complete zk.me KYC.
              </p>
              <p className="mt-2 max-w-[385px] px-4 text-center font-inter text-sm leading-5 text-gray-200 md:px-0">
                Whitelist applications require basic KYC to be submitted.
              </p>
              <p className="mt-2 max-w-[385px] px-4 text-center font-inter text-sm leading-5 text-gray-200 md:px-0">
                If you have already done a zk.me KYC before on another platform
                then you just need to sign a transaction.
              </p>
              <p className="mt-2 max-w-[385px] px-4 text-center font-inter text-sm leading-5 text-gray-200 md:px-0">
                If not, it'll only take ~2 mins and you'll never need to do it
                again, anywhere.
              </p>
              <p className="mt-2 max-w-[385px] px-4 text-center font-inter text-sm leading-5 text-gray-200 md:px-0">
                If you have any issues with zk.me, you can try Synaps as a
                backup option. Only one is required.
              </p>

              <div className="mt-10 flex flex-col items-center space-y-4">
                <button className="flex cursor-pointer items-center justify-center text-gray-100 bg-gradient-to-r from-[#7A5AFB] to-[#1E60EC] rounded-xl px-[25px] py-[13px] text-base font-bold leading-[19px]">
                  KYC through zk.me
                </button>
                <button className="flex cursor-pointer items-center justify-center text-gray-100 bg-gradient-to-r from-[#7A5AFB] to-[#1E60EC] rounded-xl px-[20px] py-[13px] text-base font-bold leading-[19px]">
                  KYC through Synaps
                </button>
              </div>
            </div>
          </>
        )}

        {activeTab === "stake" && (
          <>
            <h2 className="mb-2 text-3xl font-bold text-white">Stake</h2>
            <p className="mb-10 text-2xl text-gray-400">
              Stake your tokens to earn rewards and participate in governance.
            </p>
            <div className="flex flex-col items-center rounded-xl bg-[#1D1A46] py-12 md:rounded-[40px]">
              <div className="w-24 h-24 rounded-full bg-[#211F52] mb-6" />
              <h3 className="mt-2 text-2xl font-bold text-gray-100">
                Stake Coming Soon
              </h3>
              <p className="mt-2 text-center text-sm text-gray-300">
                Staking functionality will be available soon.
              </p>
            </div>
          </>
        )}
      </div>
    </main>
  );
}