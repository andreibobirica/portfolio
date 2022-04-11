import data from "../public/data.json";
import Title from "./Title";
import { motion } from "framer-motion";
import Image from "next/image";

const Skills = () => {
  return (
    <div id="skills" className="mt-20 md:ml-20">
      <Title num={4} title="Skills" />

      <div className="flex flex-wrap items-center justify-center mt-10 -ml-10 space-x-6 space-y-4 md:space-x-10 sm:-ml-0 md:items-start md:justify-start">
        {data.skills.map((skill, i) => (
          <motion.a
            key={i}
            className={`${
              i === 0 ? "ml-10 md:ml-0" : ""
            } cursor-pointer relative w-20 h-20`}
            href={skill.link}
            target="_blank"
            rel="noreferrer"
            whileHover={{
              scale: [1, 1.3, 1.15],
              zIndex: 1,
              transition: {
                duration: 1,
              },
            }}
          >
            <Image
              src={skill.src}
              alt={skill.name}
              layout="fill"
              objectFit="contain"
            />
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default Skills;
