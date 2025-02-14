import React from "react";
import { motion } from "framer-motion";
import Aurora from "./Aurora"; // Import Aurora

function LandingPage() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-0.3"
      className="relative w-full h-screen bg-zinc-900 pt-1 overflow-hidden"
    >
      {/* Aurora Background */}
      <div className="absolute inset-0 z-0">
        <Aurora colorStops={["#00d8ff", "#7cff67", "#ff00ff"]} amplitude={1.5} />
      </div>

      {/* Content */}
      <div className="relative flex flex-col lg:flex-row items-center justify-between mt-52 px-20 z-10">
        <div className="textstructure">
          {["Creating", "Eye Pleasing", "Web Design"].map((item, index) => {
            return (
              <div key={index} className="masker">
                <div className="w-fit flex items-end overflow-hidden">
                  {index === 1 && (
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "9vw" }}
                      transition={{
                        ease: [0.76, 0, 0.24, 1],
                        duration: 1,
                      }}
                      className="mr-[1vw] w-[8vw] rounded-md h-[5.7vw] -top[1.2vw] relative bg-green-500"
                    ></motion.div>
                  )}
                  <h1 className='pt-[2vw] -mb-[2vw] uppercase text-[9vw] leading-[.75] font-["Founders_Grotesk_X-Condensed"] font-bold'>
                    {item}
                  </h1>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
