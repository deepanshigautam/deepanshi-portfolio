import { skillsData } from "@/utils/data/skills";
import { skillsImage } from "@/utils/skill-image";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <div id="skills" className="relative z-50 border-t my-12 lg:my-24 border-[#d0d0d0]">
      

      <div className="flex justify-center my-5 lg:py-8">
  <div className="flex items-center">
    <span className="w-24 h-[2px] bg-[#c0c0c0]"></span>
    <span className="relative text-black text-4xl font-bold p-2 px-5 rounded-lg">
      Skills
    </span>
    <span className="w-24 h-[2px] bg-[#c0c0c0]"></span>
  </div>
</div>


      <div className="w-full my-12" ref={ref}>
        <Marquee
          gradient={false}
          speed={80}
          pauseOnHover={true}
          pauseOnClick={true}
          delay={0}
          play={true}
          direction="left"
        >
          {skillsData.map((skill, id) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 20 }} // Initial state
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} // Animation when in view
              transition={{ duration: 0.5, delay: id * 0.1 }} // Staggered delay
              className="w-36 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative cursor-pointer"
            >
              <div className="h-full w-full rounded-lg border border-[#d0d0d0] bg-[#f0f0f0] shadow-none shadow-gray-300 group-hover:border-blue-400 transition-all duration-500 transform group-hover:scale-[1.15]">
                <div className="flex -translate-y-[1px] justify-center">
                  <div className="w-3/4">
                    <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-blue-400 to-transparent" />
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-3 p-6">
                  <div className="h-8 sm:h-10">
                    <Image
                      src={skillsImage(skill)?.src}
                      alt={skill}
                      width={40}
                      height={40}
                      className="h-full w-auto rounded-lg"
                    />
                  </div>
                  <p className="text-black text-sm sm:text-lg">{skill}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}

export default Skills;
