import React, { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

// FlipLink Component with Wavy Flip Effect
const FlipLink = ({ children, href }) => {
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      href={href}
      className="relative block text-lg font-semibold uppercase"
    >
      <div className="inline-block">
        {children.split("").map((l, i) => (
          <motion.span
            key={i}
            variants={{
              initial: { rotateX: 0, y: 0 },
              hovered: { rotateX: 180, y: -5 },
            }}
            transition={{ duration: 0.6, ease: "easeInOut", delay: 0.05 * i }}
            className="inline-block"
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
};

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-10 w-full font-['Founders_Grotesk_X-Condensed']   text-white px-12 py-4 z-50 flex justify-between items-center">
      {/* Logo */}
      <div className="text-3xl flex items-center gap-2 font-['Founders_Grotesk_X-Condensed'] font-bold">
  <span>Portfolio</span>
</div>

      {/* Desktop Links */}
      <div className="hidden md:flex gap-10">
        {["Home", "Projects", "About", "Contact"].map((item, index) => (
          <FlipLink key={index} href={`#${item.toLowerCase()}`}>{item}</FlipLink>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-16 left-0 w-full bg-zinc-800 text-white flex flex-col items-center py-6 space-y-4 md:hidden"
        >
          {["Home", "Projects", "About", "Contact"].map((item, index) => (
            <FlipLink key={index} href={`#${item.toLowerCase()}`}>{item}</FlipLink>
          ))}
        </motion.div>
      )}
    </nav>
  );
}

export default Navbar;
