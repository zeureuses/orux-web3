import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const resourceLinks = [
    {
      title: "Ambassador Program",
      href: "https://oruxai.gitbook.io/documentation/general-information/ambassador-program"
    },
    {
      title: "Key Risks", 
      href: "https://oruxai.gitbook.io/documentation/general-information/key-risks"
    },
    {
      title: "IDO Mechanics",
      href: "https://oruxai.gitbook.io/documentation/oruxai-mechanics/ido-mechanics"
    },
    {
      title: "Staking",
      href: "https://oruxai.gitbook.io/documentation/tokenomics-and-rewards/usdorux-token/staking"
    },
    {
      title: "FAQ",
      href: "https://oruxai.gitbook.io/documentation/tokenomics-and-rewards/faq"
    }
  ];

  const socialLinks = [
    {
      title: "X (Twitter)",
      href: "https://x.com/your-twitter-handle"
    },
    {
      title: "Telegram", 
      href: "https://t.me/your-telegram-channel"
    }
  ];

  return (
    <footer className="bg-gray-900 w-full text-white">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between md:items-start">
          {/* Logo Section */}
          <div className="mb-6 md:mb-0 md:flex-shrink-0 ">
            <Link href="/" title="Go to homepage" className="inline-block">
              <Image
                src="/images/logo.png"
                alt="CRUX Logo"
                width={140}
                height={60}
                className="h-[40px] md:h-[60px] w-auto"
                priority
              />
            </Link>
            <p className="mt-4 text-sm text-gray-400 max-w-xs">
              Building the future of decentralized finance through innovative blockchain solutions.
            </p>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12 flex-1 md:max-w-md">
            {/* Resources Column */}
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                Resources
              </h2>
              <ul className="space-y-3 text-gray-400 font-medium">
                {resourceLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer" 
                      className="hover:text-white hover:underline transition-colors duration-200"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Socials Column */}
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                Socials
              </h2>
              <ul className="space-y-3 text-gray-400 font-medium">
                {socialLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white hover:underline transition-colors duration-200"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-6 border-gray-700 sm:mx-auto lg:my-8" />

        {/* Copyright Section */}
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-400 sm:text-center">
            © 2025{" "}
            <Link 
              href="/" 
              className="hover:text-white hover:underline transition-colors duration-200"
            >
              OruxAI™
            </Link>
            . All Rights Reserved.
          </span>
          
          
          {/* <div className="flex mt-4 sm:mt-0 sm:justify-center space-x-6">
            <Link
              href="/privacy"
              className="text-sm text-gray-400 hover:text-white hover:underline transition-colors duration-200"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-gray-400 hover:text-white hover:underline transition-colors duration-200"
            >
              Terms of Service
            </Link>
          </div> */}
        </div>
      </div>
    </footer>
  );
}