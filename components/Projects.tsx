import data from "../public/data.json";
import Title from "./Title";
import { GitHubIcon, VisitIcon } from "./icons";
import Image from "next/image";
import React from "react";

const Projects = () => {
  return (
    <div id="work" className="md:ml-20">
      <Title num={3} title="Some Things I’ve Built" />

      <div className="flex flex-col">
        {data.projects.map((project, i) => (
          <article
            key={i}
            className="flex flex-col items-center mt-10 md:flex-row"
          >
            <div className="relative md:w-[450px] w-[350px] ml-4 h-[250px] rounded-lg">
              <Image
                src={project.image}
                alt={project.name}
                layout="fill"
                className="rounded-lg"
                objectFit="contain"
              />
            </div>

            <div className="ml-2 md:ml-20 md:w-1/3">
              <h3 className="mt-5 text-3xl font-semibold text-neongreen">
                {project.name}
              </h3>
              <p className="mt-2 sm:mt-5 text-textdark">{project.about}</p>
              <div className="flex justify-between mt-3 font-fira">
                {project.tech.map((title) => {
                  <p>{title}</p>;
                })}
              </div>

              <div className="flex mt-4 space-x-4">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={project.links.GitHub}
                  className="flex items-center px-5 py-2 duration-100 border-2 rounded-lg fill-current stroke-current hover:bg-neongreen hover:border-neongreen hover:backdrop-blur-lg border-neongreen group-hover:text-white hover:text-white text-neongreen"
                >
                  <GitHubIcon />

                  <span className="ml-2">GitHub</span>
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={project.links.Live}
                  className="flex items-center px-5 py-2 duration-100 border-2 rounded-lg fill-current stroke-current text-darkerblue bg-neongreen border-neongreen hover:bg-transparent hover:text-neongreen"
                >
                  <VisitIcon />
                  <span className="ml-2">Visit</span>
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Projects;
