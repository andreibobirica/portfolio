import { useDimensions } from "../hooks/useDimensions";
import Logo from "./Logo";
import { MenuToggle, Navigation } from "./header";
import { motion, useCycle } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-scroll";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const Header = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);
  const [handleShow, setHandleShow] = useState(false);

  useEffect(() => {
    const listener = () => {
      if (window.scrollY > 80) {
        setHandleShow(true);
      } else setHandleShow(false);
    };
    window.addEventListener("scroll", listener);

    return () => {
      window.removeEventListener("scroll", listener);
    };
  }, []);

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

  return (
    <nav
      className={`px-8 md:px-24 fixed md:py-4 py-6 bg-bgblue/60 backdrop-filter backdrop-blur-xl w-full top-0 z-50 flex justify-between items-center ${
        handleShow ? "shadow-2xl" : ""
      }`}
    >
      <Link
        activeClass="active"
        to="intro"
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}
        href="intro"
        title="Avneesh"
      >
        <Logo className="cursor-pointer" />
      </Link>

      <motion.nav
        className="absolute top-0 left-0 w-full md:hidden"
        initial={false}
        animate={isOpen ? "open" : "closed"}
        custom={height}
        ref={containerRef}
      >
        <motion.div className="background" variants={sidebar} />
        <Navigation />
        <MenuToggle toggle={() => toggleOpen()} />
      </motion.nav>

      <ol className="hidden space-x-8 md:flex">
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
      </ol>
    </nav>
  );
};

export default Header;
