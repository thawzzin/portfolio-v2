import React, { useRef } from "react";
import { Button, Divider, Group, Stack, Text, Title } from "@mantine/core";
import Reveal from "../reusable/Reveal";
import { useScroll, useTransform } from "motion/react";
import { motion } from "motion/react";
import StarsBg from "../common/StarsBg";
import Image from "next/image";
import { Instrument_Serif } from "next/font/google";
import Navbar from "../common/Navbar";
import { ReactTyped } from "react-typed";
import ScrollSign from "../common/ScrollSign";
import BlurText from "../reusable/BlurText";

const Instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic"],
});

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["center center", "end start"], // when to trigger
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);

  return (
    <div className="hero py-5 md:py-10 px-5 md:pl-20 md:pr-10 space-y-20 min-h-screen fixed w-full flex items-end">
      <StarsBg />
      <motion.div
        style={{ opacity, scale }}
        className="absolute top-10 left-5 md:left-20"
      >
        <Image
          src={"/images/logo3.png"}
          alt="logo"
          width={50}
          height={50}
          unoptimized
        />
      </motion.div>
      <div ref={ref} className="flex-1">
        <motion.div style={{ y, opacity, scale }}>
          <Stack w={"100%"}>
            <Reveal className="-mb-7 md:-mb-12" delay={3.5}>
              <Text fs={"italic"}>It&apos;s me</Text>
            </Reveal>
            <Title
              fz={{ xs: 100, md: 200 }}
              // fw={"bold"}
              fs={"italic"}
              className={Instrument.className}
            >
              <BlurText delay={3.5}>ThawZin</BlurText>
            </Title>
            <Reveal delay={3.5}>
              <Text
                fs={"italic"}
                lts={4}
                tt={"uppercase"}
                fz={{ xs: 18, md: 20 }}
                fw={"bold"}
              >
                Your trusty <br className="md:hidden" />
                <ReactTyped
                  strings={[
                    "Web Developer",
                    "Frontend Developer",
                    "Full-Stack Developer",
                  ]}
                  loop
                  typeSpeed={40}
                />
              </Text>
            </Reveal>
            <Reveal width="100%" delay={3.5}>
              <Divider size={5} my={30} w={"70%"} color="white.4" />
              <div className="flex flex-wrap gap-y-10 justify-center md:justify-between items-end">
                <Text fz={20} w={{ xs: "100%", md: "40%" }}>
                  Code, coffee, creativity — mix them together and you get web
                  experiences people actually enjoy.
                </Text>
                <ScrollSign />
              </div>
            </Reveal>
          </Stack>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
