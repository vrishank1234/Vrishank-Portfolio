import React, { useRef } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { FaArrowUpLong } from "react-icons/fa6";
import { FiMousePointer } from "react-icons/fi";

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

const TiltCard = () => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e) => {
    if (!ref.current) return [0, 0];

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transform,
      }}
      className="relative h-96 w-72 rounded-xl bg-gradient-to-br mr-20 mt-11 bg-green-500">
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-5 grid place-content-center rounded-xl bg-zinc-100 shadow-lg">
        <img
          src="https://ochi.design/wp-content/uploads/2022/05/1.Discovery-194x194.png" // Replace with your image URL
          alt="Tilt Card"
          style={{
            transform: "translateZ(75px)",
          }}
          className="w-32 h-32 object-cover mx-auto rounded-md"
        />
        <p
          style={{
            transform: "translateZ(50px)",
          }}
          className="text-center text-2xl mt-4 text-black uppercase font-['Neue_Montreal'] font-semibold">
          Look Out ⤵
        </p>
      </div>
    </motion.div>
  );
};

function LandingPage() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-0.3"
      className="w-full h-screen bg-zinc-900 pt-1"
    >
      <div className="flex flex-col lg:flex-row items-center justify-between mt-52 px-20">
        <div className="textstructure">
          {["I Create", "Eye Pleasing", "Web Design"].map((item, index) => {
            return (
              <div key={index} className="masker">
                <div className="w-fit flex items-end overflow-hidden">
                  {index === 1 && (
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "9vw" }}
                      transition={{
                        ease: [0.76, 0, 0.24, 1],
                        duration: 1, }}
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
        <div className="mt-12 lg:mt-0 lg:ml-12">
          <TiltCard />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
