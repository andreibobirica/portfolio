import { motion } from "framer-motion";
import * as React from "react";
import { FC } from "react";
import { Link } from "react-scroll";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
    zIndex: 50,
    display: "flex",
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
    zIndex: 0,
    display: "none",
  },
};

const headerItems = [
  {
    name: "About",
    href: "about",
  },
  {
    name: "Testimonials",
    href: "testimonials",
  },
  {
    name: "Work",
    href: "work",
  },
  {
    name: "Skills",
    href: "skills",
  },
  {
    name: "Blog",
    href: "blog",
  },
  {
    name: "Contact",
    href: "contact",
  },
];

const MenuItem: FC = () => {
  return (
    <motion.ul
      className="flex flex-col min-h-screen pt-5 pl-10 mt-0 mb-5 -mr-10 space-y-5 list-none bg-bgblue backdrop-blur-md"
      variants={variants}
    >
      {headerItems.map((item, i) => (
        <li
          key={i}
          className="border-b-2 border-transparent cursor-pointer text-text hover:border-neongreen"
        >
          <Link
            activeClass="active"
            to={item.href}
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            href={item.href}
          >
            <span className="text-neongreen">{i + 1}. </span>
            {item.name}
          </Link>
        </li>
      ))}
    </motion.ul>
  );
};

export default MenuItem;
