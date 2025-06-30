import { Group, NavLink } from "@mantine/core";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="flex justify-center items-center p-4 ">
      <Group className="w-fit p-5 rounded-2xl backdrop-blur-lg backdrop-saturate-150 bg-white/5 border-[1px] border-solid border-white/15">
        <Link href="#home">
          Home
        </Link>
        <Link href="#about">About</Link>
        <Link href="#projects">Projects</Link>
        <Link href="#skills">Skills</Link>
        <Link href="#contact">Contact</Link>
      </Group>
    </div>
  );
};

export default Header;
