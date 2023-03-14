import React from "react";
import { motion } from "framer-motion";
type Props = {};

function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{opacity:1}}
      transition={{duration:1.5}}
      className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h2 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl ">
        {" "}
        About{" "}
      </h2>
      <motion.img
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        src="https://pbs.twimg.com/profile_images/1634229831000027136/SGHVSziK_400x400.jpg"
        className="-mb-20 md:mb-0 flex-shrink-0 mt-16 md:mt-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[300px] xl:h-[300px]"
      />
      <div className="space-y-10 px-0 md:px-10 text-center ">
        <h4 className="text-4xl font-semibold">
          Here is <span className="underline decoration-red-500"> little </span>{" "}
          background
        </h4>
      <p className="text-base -mt-20 md:mt-0">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio delectus
        quasi assumenda nulla qui non autem, asperiores a reiciendis
        consequuntur vel reprehenderit? Obcaecati aspernatur aut quisquam
        corporis doloribus, nihil odio molestiae, ea eos, tempore non voluptas.
        Animi, laboriosam. Nobis alias eum fugiat omnis laboriosam sequi saepe
        sapiente? Amet, voluptatum sed.
      </p>
      </div>
    </motion.div>
  );
}

export default About;
