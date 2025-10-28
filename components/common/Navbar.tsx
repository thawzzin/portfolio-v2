import { Group, Text } from "@mantine/core";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="hidden fixed z-50 left-1/2 -translate-x-1/2 md:flex justify-center items-center p-4 text-[#D1D1C7]">
      <Group className="w-fit p-5 rounded-2xl backdrop-blur-lg backdrop-saturate-150 bg-white/5 border-[1px] border-solid border-white/15">
        <Link href="#">
          <Text
            c={"white.4"}
            fz={16}
            className="cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Home
          </Text>
        </Link>
        <Link href="#about">About</Link>
        <Link href="#projects">Projects</Link>
        <Link href="#skills">Skills</Link>
        <Link href="#contact">Contact</Link>
      </Group>
    </div>
  );
};

export default Navbar;
