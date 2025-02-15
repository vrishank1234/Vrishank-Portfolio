import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Preloader = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0); // Progress state
  const [scale, setScale] = useState(1); // Scale state to control scaling

  useEffect(() => {
    // Simulate a loading process
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval); // Stop the interval when it reaches 100%
          setLoading(false); // Set loading to false when complete
          setScale(0); // Set scale to 0 to shrink the loader
          return 100;
        }
        return prev + 1; // Increase progress by 1% each interval
      });
    }, 30); // Adjust the interval time to control the speed

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-zinc-900">
      {loading ? (
        <div className="w-80 h-80 flex flex-col items-center justify-center">
          {/* Progress Bar */}
          <motion.div
            className="relative w-full h-2 bg-green-500 rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{
              duration: 0.1,
              ease: "linear",
            }}
          />
          <motion.div initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 10, ease: "easeOut"  }} className="mt-4 text-white text-xl">{progress}%</motion.div>
        </div>
      ) : (
        <motion.div
          className="w-full h-screen flex items-center justify-center bg-zinc-900"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 2, ease: "easeIn"  }}
        >
          <div className="text-white text-9xl font-['Founders_Grotesk_X-Condensed'] uppercase">Portfolio Loaded</div>
        </motion.div>
      )}
    </div>
  );
};

export default Preloader;
