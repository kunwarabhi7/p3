import React from "react";
import { motion } from "framer-motion";
type Props = {};

const Project = (props: Props) => {
  const projects = [1, 2, 3, 4, 5];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 ">
        {projects.map((project, i) => (
          <div
            key={i}
            className="w-screen flex-shrink-0 snap-center h-screen flex flex-col space-y-5 items-center justify-center p-20 md:p-44  "
          >
            <motion.img
            initial={{y:-300 , opacity:0}}
            transition={{duration:1.2}}
            whileInView={{opacity:1,y:0}}
            viewport={{once:true}}
            src="data:image/jpeg;base64,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" />
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center ">
                <span className="underline decoration-red-500">
                  Case Study {i + 1} of {projects.length}:
                </span>
                UPS clone
              </h4>
            </div>
            <p className="text-lg text-center md:text-left">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Consequatur minima earum, eaque recusandae molestias, distinctio
              dolorum corrupti, illum commodi facere vel? Accusantium,
              distinctio repellendus! Corporis debitis dignissimos consequuntur
              repudiandae perferendis minus qui, consectetur officia repellendus
              beatae placeat eveniet nulla veniam!
            </p>
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
};

export default Project;
