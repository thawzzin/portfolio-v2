import React, { useRef } from "react";
import { Button, Divider, Stack, Text, Title } from "@mantine/core";
import Reveal from "../reusable/Reveal";
import { useScroll, useTransform } from "motion/react";
import { motion } from "motion/react";
import ArrowButton from "../reusable/ArrowButton";
import Stars from "../common/StarsBg";
import StarsBg from "../common/StarsBg";
import Image from "next/image";

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
    <div className="hero py-10 px-20 space-y-20 min-h-screen fixed w-full flex items-end">
      <StarsBg />
      <motion.div
        style={{ opacity, scale }}
        className="absolute top-10 left-20"
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
            <Text mb={-70}>It&apos;s me</Text>
            <Title fz={200} fw={"bold"}>
              Thaw Zin
            </Title>
            <Divider size={5} my={30} w={"70%"} color="white.4" />
            <Text fz={20} w={"40%"}>
              Code, coffee, creativity — mix them together and you get web
              experiences people actually enjoy.
            </Text>
          </Stack>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
