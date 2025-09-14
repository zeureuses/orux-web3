"use client"

import React from "react";

const FloatingCircle = ({
  h = "120px",
  w = "120px",
  top = "100px",
  left = "-240px",
  bgImage = "/images/svg-floating-circle-2.svg",
}) => {
  return (
    <div>
      <style jsx>{`
        @keyframes float {
          0%, 100% {
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

      <div
        className={`absolute animate-float bg-[url(${bgImage})] bg-contain bg-no-repeat z-10`}
        style={{
          left,
          top,
          height: h,
          width: w,
        }}
      />
    </div>
  );
};

export default FloatingCircle;
