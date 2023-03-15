import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";

type Props = {};

const Experience = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{opacity:1}}
      transition={{duration:1.5}}
      className="h-screen overflow-hidden flex flex-col md:flex-row text-left max-w-full px-10 justify-evenly mx-auto items-center snap-center relative"
    >
      <h3 className="absolute top-24  uppercase tracking-[20px] text-2xl text-gray-500">
        Experience
      </h3>
      <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-mandatory ">

      <ExperienceCard />
      <ExperienceCard />
      <ExperienceCard />
      <ExperienceCard />
      </div>
    </motion.div>
  );
};

export default Experience;
