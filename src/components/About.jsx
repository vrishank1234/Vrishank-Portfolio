import React from "react";
import { motion } from "framer-motion";

export const BouncyCardsFeatures = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 text-slate-800  font-['Neue_Montreal'] font-semibold">
      <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end ">
        <h2 className="max-w-lg text-20xl font-['Founders_Grotesk_X-Condensed'] font-bold md:text-7xl text-white font- uppercase">
          My Projects
        </h2>
      </div>
      <div className="mb-4 grid grid-cols-12 gap-4 ">
        <BounceCard className="col-span-12 md:col-span-4">
          <CardTitle>Apple Vision Pro</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl  p-4 transition-transform duration-[250ms] bg-gradient-to-br from-zinc-400 to-indigo-900 group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <img src="src/assets/image.png" alt="Feature demo" className="mx-auto mb-2 w-full h-full object-contain " />
            <span className="block text-center font-semibold text-indigo-10">
              FEATURE DEMO HERE
            </span>
          </div>
        </BounceCard>
        <BounceCard className="col-span-12 md:col-span-8">
          <CardTitle>Mental Health UI</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-green-400 to-violet-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
          <img src="src/assets/MacBook Pro 14_ - 1.png" alt="Feature demo" className="mx-auto mb-2 w-full h-full object-contain " />
            <span className="block text-center font-semibold text-orange-50">
              FEATURE DEMO HERE
            </span>
          </div>
        </BounceCard>
      </div>
      <div className="grid grid-cols-12 gap-4">
        <BounceCard className="col-span-12 md:col-span-8">
          <CardTitle>Deepfake Detctor</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-indigo-400 to-violet-800 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
          <img src="src/assets/image copy.png" alt="Feature demo" className="mx-auto mb-2 w-full h-full object-contain " />
            <span className="block text-center font-semibold text-emerald-50">
              FEATURE DEMO HERE
            </span>
          </div>
        </BounceCard>
        <BounceCard className="col-span-12 md:col-span-4">
          <CardTitle>Healthians</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-green-400 to-zinc-800 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
          <img src="src/assets/image copy 2.png" alt="Feature demo" className="mx-auto mb-2 w-full h-full object-contain " />
            <span className="block text-center font-semibold text-red-50">
              FEATURE DEMO HERE
            </span>
          </div>
        </BounceCard>
      </div>
    </section>
  );
};

const BounceCard = ({ className, children }) => {
  return (
    <motion.div
      whileHover={{ scale: 0.95, rotate: "-1deg" }}
      className={`group relative min-h-[300px] cursor-pointer overflow-hidden rounded-2xl bg-slate-100 p-8 ${className}`}
    >
      {children}
    </motion.div>
  );
};

const CardTitle = ({ children }) => {
  return (
    <h3 className="mx-auto text-center text-3xl font-semibold">{children}</h3>
  );
};

const About = () => {
  return <BouncyCardsFeatures />;
};

export default About;
