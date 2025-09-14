import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="hidden lg:block absolute fixed top-0 left-0 right-0 z-50 w-full h-[150px] bg-gradient-to-b from-[#0E0928] to-transparent px-4">
        <div className="container mx-auto flex items-center justify-between pt-[25px]">
          {/* Left: Logo + members */}
          <div className="flex items-center">
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

          {/* Center: Navigation links */}
          <div className="flex items-center gap-6">
            <Link href="/" className="text-sm font-medium text-gray-300 hover:text-gray-100">Home</Link>
            <Link href="/dashboard" className="text-sm font-medium text-gray-300 hover:text-gray-100">Dashboard</Link>
            <Link href="/launchpad" className="text-sm font-medium text-gray-300 hover:text-gray-100">Launchpad</Link>
            <Link href="/stake" className="text-sm font-medium text-gray-300 hover:text-gray-100">Stake</Link>
            <a href="https://equinox.eclipsefi.io/" className="text-sm font-medium text-gray-300 hover:text-gray-100">Equinox</a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://airtable.com/appocm8m9oZWPJv0t/pagBaVi0C6GsDZ6o5/form"
              className="flex items-center gap-1 bg-gradient-to-r from-[#846BEA] to-[#5882DA] bg-clip-text text-sm font-semibold text-transparent"
            >
              Apply For IDO
            </a>
          </div>

          {/* Right: Launch button */}
          <button
            type="button"
            className="relative inline-flex w-28 items-center justify-center rounded-xl bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 p-[2px]"
          >
            <span className="w-full bg-[#060923] h-full rounded-xl text-sm font-bold leading-[16px] text-gray-100 py-3 flex items-center justify-center">
              Launch App
            </span>
          </button>
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
          <button
            title="Connect Wallet"
            className="inline-flex h-12 items-center gap-2 rounded-3xl border border-purple-500 bg-black/40 px-3 font-bold text-sm text-white transition-colors hover:bg-gradient-to-r hover:from-purple-500 hover:to-indigo-500 active:text-transparent active:bg-clip-text"
          >
            Connect Wallet
          </button>

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
          <Link href="/launchpad" className="block text-gray-100">Launchpad</Link>
          <Link href="/stake" className="block text-gray-100">Stake</Link>
          <a href="https://equinox.eclipsefi.io/" className="block text-gray-100">Equinox</a>
          <a
            href="https://airtable.com/appocm8m9oZWPJv0t/pagBaVi0C6GsDZ6o5/form"
            className="block text-gray-100"
          >
            Apply For IDO
          </a>
        </div>
      )}
    </>
  );
}