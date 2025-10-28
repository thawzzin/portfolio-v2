import React, { useRef } from "react";
import { Button, Stack, Text, Title } from "@mantine/core";
import Reveal from "../reusable/Reveal";
import { useScroll, useTransform } from "motion/react";
import { motion } from "motion/react";
import ArrowButton from "../reusable/ArrowButton";
import Stars from "../common/StarsBg";
import StarsBg from "../common/StarsBg";

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["center center", "end start"], // when to trigger
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);

  return (
    <div className="hero p-5 space-y-20 min-h-screen fixed w-full flex justify-center items-center">
      <StarsBg/>
      <div ref={ref}>
        <motion.div style={{ y, opacity, scale }}>
          <Stack
            align="center"
            ta={"center"}
            w={{ xs: "100%", md: "50%" }}
            mx={"auto"}
            gap={"xl"}
          >
            <Reveal>
              <Text fz={{ xs: 16, md: 18 }}>BUILDING VISIONS INTO PIXELS</Text>
            </Reveal>
            <Reveal>
              <Title fz={{ xs: 30, md: 40 }}>
                Designing Intuitive & <br /> Responsive Web Interfaces
              </Title>
            </Reveal>
            <Reveal>
              <Text fz={{ xs: 16, md: 18 }}>
                Hi! I’m Thaw Zin, a web developer turning complex ideas into
                delightful user experiences — with clean code, sleek design, and
                modern tech.
              </Text>
            </Reveal>
            <ArrowButton>
              <a href="#contact">contact me</a>
            </ArrowButton>
          </Stack>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
