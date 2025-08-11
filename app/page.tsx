"use client";

import About from "@/components/sections/About";
import Experiences from "@/components/sections/Experiences";
import Hero from "@/components/sections/Hero";
import References from "@/components/sections/References";
import Skills from "@/components/sections/Skills";
import Works from "@/components/sections/Works";
import { Container, Divider, Stack, Text, Title } from "@mantine/core";
import { motion, useScroll, useTransform } from "motion/react";

export default function Home() {
  return (
    <Stack bg={"blue.0"} mih={"100vh"} c={"white"} pos={"relative"}>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 1,
        }}
      >
        <Hero />
      </div>
      <motion.div
        style={{
          position: "absolute",
          zIndex: 2,
          top: "100vh",
          // maxHeight: "100vh",
          width: "100%",
          borderRadius: "30px 30px 0 0",
          borderTop: "1px solid #28427b",
          backgroundColor: "#0d1526",
        }}
      >
        <About />
        <Works />
        <Skills />
        <Experiences />
        <References/>
      </motion.div>
    </Stack>
  );
}
