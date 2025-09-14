"use client";

import { motion } from "framer-motion";

export default function WalletLoading() {
  const dotVariants = {
    animate: {
      y: [0, -6, 0],
      opacity: [0.6, 1, 0.6],
      transition: {
        duration: 0.6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="flex h-full w-full items-center justify-center rounded-lg">
      <div className="flex flex-col items-center text-center p-6">
        <h1 className="text-xl font-bold text-white">Connecting Wallet</h1>

        <div className="mt-3 flex space-x-1 text-2xl font-bold text-white">
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              className="inline-block"
              variants={dotVariants}
              animate="animate"
              transition={{ delay: i * 0.2 }}
            >
              •
            </motion.span>
          ))}
        </div>

        <p className="mt-3 text-sm text-gray-200">
          Please confirm the connection in your wallet
        </p>
      </div>
    </div>
  );
}
