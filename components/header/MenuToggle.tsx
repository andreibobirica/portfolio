import { motion } from "framer-motion";
import * as React from "react";
import { FC } from "react";

interface pathProps {
  variants?: {
    open: {
      d?: string;
      opacity?: number;
    };
    closed: {
      d?: string;
      opacity?: number;
    };
  };
  d?: string;
  transition?: {
    duration?: number;
  };
}

interface MenuToggleProps {
  toggle: React.MouseEventHandler<HTMLButtonElement>;
}

const Path = (props: pathProps) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
);

const MenuToggle: FC<MenuToggleProps> = ({ toggle }) => (
  <button
    className="absolute flex items-center justify-center w-12 h-12 border-none rounded-full outline-none cursor-pointer select-none fill-current text-neongreen bg-neongreen top-6 md:top-4 right-7"
    onClick={toggle}
  >
    <svg width="23" height="21" viewBox="0 0 23 21">
      <title>hamburger-icon</title>
      <Path
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" },
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" },
        }}
      />
    </svg>
  </button>
);

export default MenuToggle;
