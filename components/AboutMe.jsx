import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Code, Brush, Database, Zap } from "lucide-react"
import Particles from "./Particles"

const AboutMe = () => {
  const [activeSkill, setActiveSkill] = useState(null)

  const skills = [
    { name: "Frontend", icon: <Code size={24} />, color: "bg-blue-500", details: "React, Vue, Angular" },
    { name: "Design", icon: <Brush size={24} />, color: "bg-purple-500", details: "Figma, Adobe XD, Sketch" },
    { name: "Backend", icon: <Database size={24} />, color: "bg-green-500", details: "Node.js, Python, SQL" },
    { name: "Performance", icon: <Zap size={24} />, color: "bg-yellow-500", details: "Optimization, Caching, SEO" },
  ]

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="w-80 h-80 mx-auto lg:mx-0 rounded-full overflow-hidden border-4 border-white shadow-2xl backdrop-blur-lg">
              <img
                src="src/assets/image copy 7.png?height=320&width=320"
                alt="Vrishank Kirpane"
                className="w-full h-full object-cover"
              />
            </div>
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className={`absolute ${skill.color} rounded-full p-4 cursor-pointer shadow-lg flex items-center justify-center`}
                style={{
                  top: `${39 + 50 * Math.sin((index * Math.PI) / 2)}%`,
                  left: `${25 + 50 * Math.cos((index * Math.PI) / 2)}%`,
                }}
                whileHover={{ scale: 1.1 }}
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                onClick={() => setActiveSkill(skill.name)}
              >
                {skill.icon}
              </motion.div>
            ))}
          </motion.div>

          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl font-bold mb-6"
            >
              Vrishank Kirpane
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-gray-300 leading-relaxed text-2xl mb-8"
            >
              I'm a multifaceted developer and designer, blending creativity with technical expertise. My passion lies
              in crafting digital experiences that are not just functional, but delightful. Hover over the skill bubbles
              to explore my areas of expertise!
            </motion.p>

            <AnimatePresence mode="wait">
              {activeSkill && (
                <motion.div
                  key={activeSkill}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="mb-8 p-4 bg-white bg-opacity-10 rounded-lg backdrop-blur-sm"
                >
                  <h3 className="text-2xl font-bold mb-2">{activeSkill}</h3>
                  <p className="text-gray-300">
                    {skills.find((s) => s.name === activeSkill)?.details}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe
