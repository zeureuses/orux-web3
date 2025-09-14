import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaTelegramPlane } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>

{/* Desktop Navbar */}
<nav className="hidden lg:block absolute fixed top-0 left-0 right-0 z-50 w-full h-[100px] bg-gradient-to-b from-[#0E0928] to-transparent px-4">
  <div className="container mx-auto flex items-center justify-between pt-[25px] relative h-full">
    {/* Left: Logo + members */}
    <div className="flex items-center flex-1">
      <Link href="/" title="Click to go home" className="">
        <Image
          src="/images/logo.png"
          alt="CRUX Logo"
          width={140}
          height={60}
          className="h-[60px] w-auto"
        />
      </Link>

      <div className="mx-3 h-7 w-[1px] bg-[#443873]" />

      <div className="flex cursor-pointer items-center gap-2 rounded-full bg-[#191644] px-2 py-0.5">
        <div className="flex items-center gap-1.5">
          <div className="h-6 w-6 rounded-full bg-blue-500" />
          <div className="-ml-4 h-6 w-6 rounded-full bg-gray-400" />
          <div className="-ml-4 h-6 w-6 rounded-full bg-yellow-500" />
          <div className="-ml-4 h-6 w-6 rounded-full bg-green-500" />
        </div>
        <div className="pr-2 font-inter text-sm text-[#FBF8FA]">
          Worldwide Users
        </div>
      </div>
    </div>

    {/* Center: Navigation links - Centered relative to the flex container */}
    <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-6 mt-2">
      <Link href="/" className="text-sm font-medium text-gray-300 hover:text-gray-100 transition-colors">
        Home
      </Link>
      <Link href="/dashboard?tab=overview" className="text-sm font-medium text-gray-300 hover:text-gray-100 transition-colors">
        Dashboard
      </Link>
      <Link href="/dashboard?tab=stake" className="text-sm font-medium text-gray-300 hover:text-gray-100 transition-colors">
        Stake
      </Link>
      <Link href="https://docs.oruxai.com/" className="text-sm font-medium text-gray-300 hover:text-gray-100 transition-colors">
        Docs
      </Link>
      <Link
        target="_blank"
        rel="noopener noreferrer"
        href="https://forms.fillout.com/t/skbMAxUX2bus"
        className="flex items-center gap-1 bg-gradient-to-r from-[#846BEA] to-[#5882DA] bg-clip-text text-sm font-semibold text-transparent hover:opacity-80 transition-opacity"
      >
        Apply For IDO
      </Link>
    </div>

    {/* Right: Social links */}
    <div className="flex items-center justify-end flex-1">
      <div className="flex items-center gap-3 h-full rounded-xl px-4 py-3">
        <Link
          href="http://t.me/oruxAI"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-8 h-8 rounded-full bg-black hover:bg-gray-800 transition-colors"
          aria-label="Visit our Telegram channel"
        >
          <FaTelegramPlane className="w-4 h-4 text-white" />
        </Link>

        <Link
          href="https://x.com/Orux_AI"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-8 h-8 rounded-full bg-black hover:bg-gray-800 transition-colors"
          aria-label="Visit our X (Twitter) profile"
        >
          <BsTwitterX className="w-4 h-4 text-white" />
        </Link>
      </div>
    </div>
  </div>
</nav>

      {/* Mobile Navbar */}
      <header className="lg:hidden fixed inset-x-0 top-0 z-50 flex w-full items-center justify-between bg-[#0E0928] px-4 py-3">
        <Link href="/" title="Click to go home" className="shrink-0">
          <Image
            src="/images/logo.png"
            alt="CRUX Logo"
            width={100}
            height={32}
            className="h-[32px] w-auto"
          />
        </Link>

        <div className="flex items-center gap-2">
          <div className="relative inline-flex items-center gap-3">
            <div className="flex items-center gap-3 h-full rounded-xl px-4 py-3">
              <Link
                href="https://t.me/your-telegram-channel"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-8 h-8 rounded-full bg-black hover:bg-gray-800 transition-colors"
              >
                <FaTelegramPlane className="w-4 h-4 text-white" />
              </Link>

              <Link
                href="https://x.com/your-twitter-handle"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-8 h-8 rounded-full bg-black hover:bg-gray-800 transition-colors"
              >
                <BsTwitterX className="w-4 h-4 text-white" />
              </Link>
            </div>
          </div>

          {/* Hamburger menu toggler */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex items-center p-2 hover:opacity-80"
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3 6a1 1 0 011-1h16a1 1 0 110 2H4a1 1 0 01-1-1zM3 12a1 1 0 011-1h16a1 1 0 110 2H4a1 1 0 01-1-1zM3 18a1 1 0 011-1h16a1 1 0 110 2H4a1 1 0 01-1-1z"
                fill="#ffffff"
              />
            </svg>
          </button>
        </div>
      </header>

      {/* Slide-down mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed top-16 inset-x-0 z-40 bg-[#0E0928] p-4 space-y-4">
          <Link href="/" className="block text-gray-100">Home</Link>
          <Link href="/dashboard" className="block text-gray-100">Dashboard</Link>
          <Link href="/dashboard?tab=stake" className="block text-gray-100">Stake</Link>
          <Link href="https://docs.oruxai.com/" className="block text-gray-100">Docs</Link>
          <Link
            href="https://forms.fillout.com/t/skbMAxUX2bus"
            className="block text-gray-100"
          >
            Apply For IDO
          </Link>
        </div>
      )}
    </>
  );
}