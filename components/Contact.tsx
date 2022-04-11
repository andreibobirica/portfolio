import data from "../public/data.json";
import ContactButtons from "./ContactButtons";
import { LineSvg } from "./icons";
import Image from "next/image";
import React from "react";

const Contact = () => {
  return (
    <div
      id="contact"
      className="z-50 flex flex-col items-center justify-center w-screen mt-20"
    >
      <div className="flex items-center justify-center mt-10 space-x-5">
        <LineSvg className="relative w-20 h-1 md:w-60" />
        <h2 className="text-xl text-text md:text-4xl whitespace-nowrap">
          Get in Touch
        </h2>
        <LineSvg className="relative w-20 h-1 md:w-60" />
      </div>

      <div className="flex flex-wrap items-center justify-center mx-auto">
        {data.links.map((link, i) => (
          <div key={i}>
            <ContactButtons
              marginLeft={i === 0 ? "ml-0" : "ml-6 md:ml-10"}
              name={link.name}
              icon={link.icon}
              link={link.link}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
