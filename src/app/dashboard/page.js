"use client";

// Connect wallet sharshalai
import React, { useCallback, useEffect, useState, Suspense } from "react";
import { ethers } from "ethers";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

import Link from "next/link";
import MyBalances from "../components/dashboardComps/myBalances";
import TierVotingCard from "../components/dashboardComps/tierVotingCard";
import TotalHoldings from "../components/dashboardComps/totalHoldings";
import WalletLoading from "../components/dashboardComps/walletLoading";
import StakeCards from "../components/dashboardComps/stakeCards";
import CosmicEssence from "../components/dashboardComps/cosmicEssence";
import StakingComponent from "../components/dashboardComps/stakingComponent";
import StakingHistory from "../components/dashboardComps/stakingHistory";
import Footer from "../components/footer";

import { RiDashboardLine } from 'react-icons/ri';
import { FaCoins } from 'react-icons/fa';
import { MdVerifiedUser } from 'react-icons/md';

import { FaBars, FaTimes } from 'react-icons/fa';


const DashboardIcon = () => <RiDashboardLine className="w-4 h-4" />
const StakeIcon = () => <FaCoins className="w-4 h-4" />
const KYCIcon = () => <MdVerifiedUser className="w-4 h-4" />

function DashboardContent() {
  const searchParams = useSearchParams();
  const [moreMenuOpen, setMoreMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("overview"); // <── controls tab view

  // Connect wallet sharshalai
  const [provider, setProvider] = useState(null);
  const [address, setAddress] = useState(null);
  const [chainId, setChainId] = useState(null);
  const [connecting, setConnecting] = useState(false);
  const [error, setError] = useState(null);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);


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

  // Set active tab based on URL parameter
  useEffect(() => {
    const tab = searchParams.get('tab');
    if (tab && ['overview', 'kyc', 'stake'].includes(tab)) {
      setActiveTab(tab);
    }
  }, [searchParams]);

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
    <>
      <main className="bg-[#060923] flex flex-col min-h-screen w-full">
        {/* ======= NAVIGATION BAR ======= */}
        <div className="fixed left-0 right-0 top-0 z-50">
          <div className="border-b border-white/10 bg-[#1D1A46] px-4 backdrop-blur-2xl">
            <div className="container mx-auto flex h-[72px] items-center justify-between">
              {/* Left: Logo + Desktop Navigation */}
              <div className="flex items-center gap-4 sm:gap-8">
                <Link href="/" title="Click to go home">
                  <Image
                    src="/images/logo.png"
                    alt="CRUX Logo"
                    width={140}
                    height={60}
                    className="h-[50px] w-auto"
                  />
                </Link>

                <div className="hidden sm:block h-[24px] w-[1px] bg-white bg-opacity-10" />

                {/* Desktop Nav */}
                <div className="hidden sm:flex items-center gap-4">
                  <button
                    onClick={() => setActiveTab("overview")}
                    className={`text-sm font-medium flex items-center gap-2 px-3 py-2 rounded-full transition-all ${activeTab === "overview"
                      ? "text-white font-bold bg-white/5"
                      : "text-white text-opacity-70 hover:text-opacity-100 hover:bg-white/5"
                      }`}
                  >
                    <DashboardIcon /> Overview
                  </button>

                  <button
                    onClick={() => setActiveTab("kyc")}
                    className={`text-sm font-medium flex items-center gap-2 px-3 py-2 rounded-full transition-all ${activeTab === "kyc"
                      ? "text-white font-bold bg-white/5"
                      : "text-white text-opacity-70 hover:text-opacity-100 hover:bg-white/5"
                      }`}
                  >
                    <KYCIcon /> KYC
                  </button>

                  <button
                    onClick={() => setActiveTab("stake")}
                    className={`text-sm font-medium flex items-center gap-2 px-3 py-2 rounded-full transition-all ${activeTab === "stake"
                      ? "text-white font-bold bg-white/5"
                      : "text-white text-opacity-70 hover:text-opacity-100 hover:bg-white/5"
                      }`}
                  >
                    <StakeIcon /> Stake
                  </button>

                  {/* More Dropdown */}
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => setMoreMenuOpen(!moreMenuOpen)}
                      className="flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium text-white text-opacity-70 hover:bg-white/5"
                    >
                      More
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
                          href="/twitter"
                          className="block px-4 py-2 text-sm text-white hover:bg-white/5"
                        >
                          Twitter
                        </Link>
                        <Link
                          href="/telegram"
                          className="block px-4 py-2 text-sm text-white hover:bg-white/5"
                        >
                          Telegram
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Right: Wallet + Hamburger (Mobile) */}
              <div className="flex items-center gap-3">
                {/* Desktop Wallet Button */}
                <button
                  onClick={connectWallet}
                  disabled={connecting}
                  className="hidden sm:inline-flex items-center gap-2 h-[40px] sm:h-[48px] px-4 rounded-3xl border-[1.5px] border-[#7A5AFB] bg-black/20 text-white font-bold text-sm hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-blue-500/20"
                >
                  {address ? "Wallet Connected" : "Connect Wallet"}
                </button>

                {/* Hamburger Toggle (Mobile) */}
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="sm:hidden text-white focus:outline-none"
                >
                  {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>
              </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
              <div className="sm:hidden flex flex-col gap-2 py-4 border-t border-white/10">
                <button
                  onClick={() => {
                    setActiveTab("overview");
                    setMobileMenuOpen(false);
                  }}
                  className={`text-sm px-4 py-2 flex items-center gap-2 ${activeTab === "overview"
                    ? "text-white font-bold bg-white/10"
                    : "text-white text-opacity-70 hover:text-opacity-100 hover:bg-white/5"
                    }`}
                >
                  <DashboardIcon /> Overview
                </button>

                <button
                  onClick={() => {
                    setActiveTab("kyc");
                    setMobileMenuOpen(false);
                  }}
                  className={`text-sm px-4 py-2 flex items-center gap-2 ${activeTab === "kyc"
                    ? "text-white font-bold bg-white/10"
                    : "text-white text-opacity-70 hover:text-opacity-100 hover:bg-white/5"
                    }`}
                >
                  <KYCIcon /> KYC
                </button>

                <button
                  onClick={() => {
                    setActiveTab("stake");
                    setMobileMenuOpen(false);
                  }}
                  className={`text-sm px-4 py-2 flex items-center gap-2 ${activeTab === "stake"
                    ? "text-white font-bold bg-white/10"
                    : "text-white text-opacity-70 hover:text-opacity-100 hover:bg-white/5"
                    }`}
                >
                  <StakeIcon /> Stake
                </button>

                {/* Mobile Wallet Button */}
                <button
                  onClick={connectWallet}
                  disabled={connecting}
                  className="mt-2 mx-4 inline-flex items-center gap-2 h-[44px] px-4 rounded-3xl border-[1.5px] border-[#7A5AFB] bg-black/20 text-white font-bold text-sm hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-blue-500/20"
                >
                  {address ? "Wallet Connected" : "Connect Wallet"}
                </button>

                {/* Mobile More Links */}
                <div className="flex flex-col mt-2 border-t border-white/10 pt-2">
                  <Link
                    href="/docs"
                    className="block px-4 py-2 text-sm text-white hover:bg-white/5"
                  >
                    Documentation
                  </Link>
                  <Link
                    href="/twitter"
                    className="block px-4 py-2 text-sm text-white hover:bg-white/5"
                  >
                    Twitter
                  </Link>
                  <Link
                    href="/telegram"
                    className="block px-4 py-2 text-sm text-white hover:bg-white/5"
                  >
                    Telegram
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>


        {/* ======= MAIN CONTENT ======= */}
        <div className="container mx-auto mt-20 flex-1 px-4 md:mt-36">
          {activeTab === "overview" && (
            <>
              <h2 className="mb-2 text-2xl sm:text-3xl font-bold text-white">Overview</h2>
              <p className="mb-6 sm:mb-10 text-lg sm:text-2xl text-gray-400">
                Track all your investments in Eclipse Ecosystem in one place.
              </p>

              {/* ce pakeiceu */}
              {address ? (
                <div className="h-full w-full">
                  <div className="h-full w-full">
                    <h1 className="pb-4 text-xl font-bold text-gray-400">
                      <h2 className="mb-2 text-md sm:text-1xl font-bold text-white">Crypto address:</h2>
                      <p className="mb-6 sm:mb-10 text-sm sm:text-lg text-gray-400">
                        {address ? address : ""}
                      </p>
                    </h1>
                    <div className="mb-14 flex flex-col gap-8 w-full">
                      {/* Row of cards */}
                      <div className="flex flex-row gap-4 w-full">
                        <div className="w-full">
                          <TotalHoldings />
                        </div>
                        <div className="w-full">
                          <TierVotingCard />
                        </div>
                        <div className="w-full">
                          <MyBalances />
                        </div>
                      </div>

                      <div className="h-full w-full">
                        <h2 className="text-2xl text-white font-bold mb-2">My positions</h2>
                        {/* Extra info box */}
                        <div className="flex flex-col bg-[#1D1A46] items-center justify-center py-6 px-4 rounded-lg">
                          <svg
                            width="185"
                            height="148"
                            viewBox="0 0 185 148"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx="93" cy="74" r="62" fill="#211F52"></circle>
                            <path
                              d="M119.436 109.021H66.5325C62.379 109.021 59 106.023 59 102.338V67.7563C59 64.0717 62.379 61.0741 66.5325 61.0741H119.436C123.589 61.0741 126.968 64.0717 126.968 67.7563V102.354C126.968 106.039 123.607 109.021 119.436 109.021Z"
                              fill="#120C36"
                              stroke="#98B9FF"
                              strokeWidth="2.5"
                            ></path>
                            <path
                              d="M115.064 94.166H127.065C128.714 94.166 130.03 92.8326 130.03 91.2008V80.3049C130.03 78.6556 128.697 77.3397 127.065 77.3397H115.064C110.414 77.3397 106.642 81.112 106.642 85.7616C106.642 90.3937 110.414 94.166 115.064 94.166Z"
                              fill="#485186"
                              stroke="#98B9FF"
                              strokeWidth="2.5"
                            ></path>
                            <path
                              d="M114.889 89.1085C116.75 89.1085 118.258 87.6003 118.258 85.7397C118.258 83.8792 116.75 82.371 114.889 82.371C113.029 82.371 111.521 83.8792 111.521 85.7397C111.521 87.6003 113.029 89.1085 114.889 89.1085Z"
                              fill="#98B9FF"
                            ></path>
                            <path
                              d="M96.9356 51.2816C95.7478 50.1008 94.1368 49.4375 92.457 49.4375C90.7773 49.4375 89.1663 50.1008 87.9785 51.2816"
                              stroke="#98B9FF"
                              strokeWidth="2.5"
                              strokeLinecap="round"
                            ></path>
                            <path
                              d="M103.258 45.2246C100.393 42.3571 96.5076 40.7461 92.4564 40.7461C88.4052 40.7461 84.5199 42.3571 81.6553 45.2246"
                              stroke="#98B9FF"
                              strokeWidth="2.5"
                              strokeLinecap="round"
                            ></path>
                            <path
                              d="M109.581 38.1129C105.039 33.5586 98.8794 31 92.4568 31C86.0341 31 79.8745 33.5586 75.333 38.1129"
                              stroke="#98B9FF"
                              strokeWidth="2.5"
                              strokeLinecap="round"
                            ></path>
                            <path
                              d="M92.5694 80C90.5637 80 88.7836 80.9451 87.667 82.4063C88.4274 81.8517 89.3697 81.5231 90.3908 81.5231C92.9134 81.5231 94.958 83.5275 94.958 86.0001C94.958 88.4724 92.9134 90.4769 90.3908 90.4769C89.3697 90.4769 88.4274 90.1485 87.667 89.5937C88.7835 91.0546 90.5637 92 92.5694 92C95.9501 92 98.6911 89.3131 98.6911 86.0002C98.6911 82.6864 95.9501 80 92.5694 80Z"
                              fill="white"
                            ></path>
                            <path
                              d="M92.5694 80C90.5637 80 88.7836 80.9451 87.667 82.4063C88.4274 81.8517 89.3697 81.5231 90.3908 81.5231C92.9134 81.5231 94.958 83.5275 94.958 86.0001C94.958 88.4724 92.9134 90.4769 90.3908 90.4769C89.3697 90.4769 88.4274 90.1485 87.667 89.5937C88.7835 91.0546 90.5637 92 92.5694 92C95.9501 92 98.6911 89.3131 98.6911 86.0002C98.6911 82.6864 95.9501 80 92.5694 80Z"
                              fill="#98B9FF"
                            ></path>
                            <path
                              d="M89.4727 86.01C89.4727 84.6268 90.6168 83.5056 92.0274 83.5056C92.2374 83.5056 92.4414 83.5309 92.6366 83.5778C92.0379 83.0368 91.2384 82.7058 90.3596 82.7058C88.5041 82.7058 87 84.1802 87 85.9989C87 87.8174 88.5041 89.2919 90.3596 89.2919C91.2227 89.2919 92.0092 88.9729 92.6043 88.4488C92.4187 88.4908 92.2259 88.5135 92.0274 88.5135C90.6168 88.5136 89.4727 87.3931 89.4727 86.01Z"
                              fill="white"
                            ></path>
                            <path
                              d="M89.4727 86.01C89.4727 84.6268 90.6168 83.5056 92.0274 83.5056C92.2374 83.5056 92.4414 83.5309 92.6366 83.5778C92.0379 83.0368 91.2384 82.7058 90.3596 82.7058C88.5041 82.7058 87 84.1802 87 85.9989C87 87.8174 88.5041 89.2919 90.3596 89.2919C91.2227 89.2919 92.0092 88.9729 92.6043 88.4488C92.4187 88.4908 92.2259 88.5135 92.0274 88.5135C90.6168 88.5136 89.4727 87.3931 89.4727 86.01Z"
                              fill="#98B9FF"
                            ></path>
                          </svg>

                          <h2 className="mt-2 text-lg font-bold text-gray-100 text-center">
                            Empty portfolio.
                          </h2>
                          <p className="mt-2 text-center text-sm w-[70%] text-gray-300">
                            Start whitelisting to an upcoming IDO.
                          </p>
                          <Link
                            href="https://forms.fillout.com/t/skbMAxUX2bus"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Click to get ECLIP"
                            className="flex mt-6 cursor-pointer items-center justify-center text-gray-100 bg-gradient-to-r from-[#7A5AFB] to-[#1E60EC] rounded-xl px-[25px] py-[13px] text-base font-bold leading-[19px]"
                          >
                            Verify
                          </Link>
                        </div>
                      </div>



                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col h-[60vh] items-center justify-center rounded-xl bg-[#1D1A46] py-12 md:rounded-[40px]">
                  {connecting ? (
                    <>
                      <WalletLoading></WalletLoading>
                    </>
                  ) : (
                    <>
                      <div className="flex flex-col items-center justify-center md:hidden">
                        <svg width="185" height="148" viewBox="0 0 185 148" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="93" cy="74" r="62" fill="#211F52"></circle><path d="M119.436 109.021H66.5325C62.379 109.021 59 106.023 59 102.338V67.7563C59 64.0717 62.379 61.0741 66.5325 61.0741H119.436C123.589 61.0741 126.968 64.0717 126.968 67.7563V102.354C126.968 106.039 123.607 109.021 119.436 109.021Z" fill="#120C36" stroke="#98B9FF" strokeWidth="2.5"></path><path d="M115.064 94.166H127.065C128.714 94.166 130.03 92.8326 130.03 91.2008V80.3049C130.03 78.6556 128.697 77.3397 127.065 77.3397H115.064C110.414 77.3397 106.642 81.112 106.642 85.7616C106.642 90.3937 110.414 94.166 115.064 94.166Z" fill="#485186" stroke="#98B9FF" strokeWidth="2.5"></path><path d="M114.889 89.1085C116.75 89.1085 118.258 87.6003 118.258 85.7397C118.258 83.8792 116.75 82.371 114.889 82.371C113.029 82.371 111.521 83.8792 111.521 85.7397C111.521 87.6003 113.029 89.1085 114.889 89.1085Z" fill="#98B9FF"></path><path d="M96.9356 51.2816C95.7478 50.1008 94.1368 49.4375 92.457 49.4375C90.7773 49.4375 89.1663 50.1008 87.9785 51.2816" stroke="#98B9FF" strokeWidth="2.5" strokeLinecap="round"></path><path d="M103.258 45.2246C100.393 42.3571 96.5076 40.7461 92.4564 40.7461C88.4052 40.7461 84.5199 42.3571 81.6553 45.2246" stroke="#98B9FF" strokeWidth="2.5" strokeLinecap="round"></path><path d="M109.581 38.1129C105.039 33.5586 98.8794 31 92.4568 31C86.0341 31 79.8745 33.5586 75.333 38.1129" stroke="#98B9FF" strokeWidth="2.5" strokeLinecap="round"></path><path d="M92.5694 80C90.5637 80 88.7836 80.9451 87.667 82.4063C88.4274 81.8517 89.3697 81.5231 90.3908 81.5231C92.9134 81.5231 94.958 83.5275 94.958 86.0001C94.958 88.4724 92.9134 90.4769 90.3908 90.4769C89.3697 90.4769 88.4274 90.1485 87.667 89.5937C88.7835 91.0546 90.5637 92 92.5694 92C95.9501 92 98.6911 89.3131 98.6911 86.0002C98.6911 82.6864 95.9501 80 92.5694 80Z" fill="white"></path><path d="M92.5694 80C90.5637 80 88.7836 80.9451 87.667 82.4063C88.4274 81.8517 89.3697 81.5231 90.3908 81.5231C92.9134 81.5231 94.958 83.5275 94.958 86.0001C94.958 88.4724 92.9134 90.4769 90.3908 90.4769C89.3697 90.4769 88.4274 90.1485 87.667 89.5937C88.7835 91.0546 90.5637 92 92.5694 92C95.9501 92 98.6911 89.3131 98.6911 86.0002C98.6911 82.6864 95.9501 80 92.5694 80Z" fill="#98B9FF"></path><path d="M89.4727 86.01C89.4727 84.6268 90.6168 83.5056 92.0274 83.5056C92.2374 83.5056 92.4414 83.5309 92.6366 83.5778C92.0379 83.0368 91.2384 82.7058 90.3596 82.7058C88.5041 82.7058 87 84.1802 87 85.9989C87 87.8174 88.5041 89.2919 90.3596 89.2919C91.2227 89.2919 92.0092 88.9729 92.6043 88.4488C92.4187 88.4908 92.2259 88.5135 92.0274 88.5135C90.6168 88.5136 89.4727 87.3931 89.4727 86.01Z" fill="white"></path><path d="M89.4727 86.01C89.4727 84.6268 90.6168 83.5056 92.0274 83.5056C92.2374 83.5056 92.4414 83.5309 92.6366 83.5778C92.0379 83.0368 91.2384 82.7058 90.3596 82.7058C88.5041 82.7058 87 84.1802 87 85.9989C87 87.8174 88.5041 89.2919 90.3596 89.2919C91.2227 89.2919 92.0092 88.9729 92.6043 88.4488C92.4187 88.4908 92.2259 88.5135 92.0274 88.5135C90.6168 88.5136 89.4727 87.3931 89.4727 86.01Z" fill="#98B9FF"></path></svg>
                        <h2 className="mt-2 text-lg font-bold text-gray-100 text-center">
                          Sorry, this feature is not available on mobile.
                        </h2>
                        <p className="mt-2 text-center text-sm w-[70%] text-gray-300">
                          Please use a desktop computer to view your dashboard.
                        </p>
                      </div>


                      {/* Desktop view */}
                      <div className="hidden md:flex flex-col items-center justify-center">
                        <svg width="185" height="148" viewBox="0 0 185 148" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="93" cy="74" r="62" fill="#211F52"></circle><path d="M119.436 109.021H66.5325C62.379 109.021 59 106.023 59 102.338V67.7563C59 64.0717 62.379 61.0741 66.5325 61.0741H119.436C123.589 61.0741 126.968 64.0717 126.968 67.7563V102.354C126.968 106.039 123.607 109.021 119.436 109.021Z" fill="#120C36" stroke="#98B9FF" strokeWidth="2.5"></path><path d="M115.064 94.166H127.065C128.714 94.166 130.03 92.8326 130.03 91.2008V80.3049C130.03 78.6556 128.697 77.3397 127.065 77.3397H115.064C110.414 77.3397 106.642 81.112 106.642 85.7616C106.642 90.3937 110.414 94.166 115.064 94.166Z" fill="#485186" stroke="#98B9FF" strokeWidth="2.5"></path><path d="M114.889 89.1085C116.75 89.1085 118.258 87.6003 118.258 85.7397C118.258 83.8792 116.75 82.371 114.889 82.371C113.029 82.371 111.521 83.8792 111.521 85.7397C111.521 87.6003 113.029 89.1085 114.889 89.1085Z" fill="#98B9FF"></path><path d="M96.9356 51.2816C95.7478 50.1008 94.1368 49.4375 92.457 49.4375C90.7773 49.4375 89.1663 50.1008 87.9785 51.2816" stroke="#98B9FF" strokeWidth="2.5" strokeLinecap="round"></path><path d="M103.258 45.2246C100.393 42.3571 96.5076 40.7461 92.4564 40.7461C88.4052 40.7461 84.5199 42.3571 81.6553 45.2246" stroke="#98B9FF" strokeWidth="2.5" strokeLinecap="round"></path><path d="M109.581 38.1129C105.039 33.5586 98.8794 31 92.4568 31C86.0341 31 79.8745 33.5586 75.333 38.1129" stroke="#98B9FF" strokeWidth="2.5" strokeLinecap="round"></path><path d="M92.5694 80C90.5637 80 88.7836 80.9451 87.667 82.4063C88.4274 81.8517 89.3697 81.5231 90.3908 81.5231C92.9134 81.5231 94.958 83.5275 94.958 86.0001C94.958 88.4724 92.9134 90.4769 90.3908 90.4769C89.3697 90.4769 88.4274 90.1485 87.667 89.5937C88.7835 91.0546 90.5637 92 92.5694 92C95.9501 92 98.6911 89.3131 98.6911 86.0002C98.6911 82.6864 95.9501 80 92.5694 80Z" fill="white"></path><path d="M92.5694 80C90.5637 80 88.7836 80.9451 87.667 82.4063C88.4274 81.8517 89.3697 81.5231 90.3908 81.5231C92.9134 81.5231 94.958 83.5275 94.958 86.0001C94.958 88.4724 92.9134 90.4769 90.3908 90.4769C89.3697 90.4769 88.4274 90.1485 87.667 89.5937C88.7835 91.0546 90.5637 92 92.5694 92C95.9501 92 98.6911 89.3131 98.6911 86.0002C98.6911 82.6864 95.9501 80 92.5694 80Z" fill="#98B9FF"></path><path d="M89.4727 86.01C89.4727 84.6268 90.6168 83.5056 92.0274 83.5056C92.2374 83.5056 92.4414 83.5309 92.6366 83.5778C92.0379 83.0368 91.2384 82.7058 90.3596 82.7058C88.5041 82.7058 87 84.1802 87 85.9989C87 87.8174 88.5041 89.2919 90.3596 89.2919C91.2227 89.2919 92.0092 88.9729 92.6043 88.4488C92.4187 88.4908 92.2259 88.5135 92.0274 88.5135C90.6168 88.5136 89.4727 87.3931 89.4727 86.01Z" fill="white"></path><path d="M89.4727 86.01C89.4727 84.6268 90.6168 83.5056 92.0274 83.5056C92.2374 83.5056 92.4414 83.5309 92.6366 83.5778C92.0379 83.0368 91.2384 82.7058 90.3596 82.7058C88.5041 82.7058 87 84.1802 87 85.9989C87 87.8174 88.5041 89.2919 90.3596 89.2919C91.2227 89.2919 92.0092 88.9729 92.6043 88.4488C92.4187 88.4908 92.2259 88.5135 92.0274 88.5135C90.6168 88.5136 89.4727 87.3931 89.4727 86.01Z" fill="#98B9FF"></path></svg>
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
                    </>
                  )}
                </div>
              )}
            </>
          )}

          {activeTab === "kyc" && (
            <div className="h-[60vh] w-full ">

              <h2 className="mb-2 text-2xl sm:text-3xl font-bold text-white">KYC</h2>
              <p className="mb-6 sm:mb-10 text-lg sm:text-2xl text-gray-400">
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

                <h3 className="mt-2 text-2xl font-bold text-gray-100">
                  Complete KYC to be considered
                </h3>

                <p className="mt-2 text-center text-sm w-[50%] text-gray-300">
                  If you have any issues with zk.me, you can try Synaps as a
                  backup option. Only one is required.
                </p>


                <div className="mt-10 flex flex-col items-center space-y-4">
                  <Link
                    href="https://forms.fillout.com/t/skbMAxUX2bus"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Click to get ECLIP"
                    className="flex cursor-pointer items-center justify-center text-gray-100 bg-gradient-to-r from-[#7A5AFB] to-[#1E60EC] rounded-xl px-[25px] py-[13px] text-base font-bold leading-[19px]"
                  >
                    Verify
                  </Link>


                </div>
              </div>
            </div>
          )}

          {activeTab === "stake" && (
            <>
              <h2 className="mb-2 text-2xl sm:text-3xl font-bold text-white">Stake</h2>
              <p className="mb-6 sm:mb-10 text-lg sm:text-2xl text-gray-400">
                Stake your tokens to earn rewards and participate in governance.
              </p>
              <div className="flex flex-col gap-6 sm:gap-8">
                <StakeCards />
                <CosmicEssence />
                <StakingComponent />
                <StakingHistory />
              </div>
            </>
          )}

        </div>
      </main>
      <Footer></Footer>
    </>
  );
}

export default function DashboardPage() {
  return (
    <Suspense fallback={
      <div className="bg-[#060923] flex flex-col min-h-screen w-full items-center justify-center">
        <div className="text-white text-lg">Loading...</div>
      </div>
    }>
      <DashboardContent />
    </Suspense>
  );
}
