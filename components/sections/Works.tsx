import { Flex, Group, Stack, Title } from "@mantine/core";
import { useAnimation, useInView } from "motion/react";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { works } from "@/constants/works";
import SplitText from "../reusable/SplitText";
import WorkCard from "../common/WorkCard";
import Reveal from "../reusable/Reveal";

const Works = () => {
  return (
    <section id="projects" className="min-h-screen">
      <Stack>
        <Flex direction={{ xs: "column", md: "row" }} gap={"xl"} align="start">
          <SplitText
            text="Selected Works /"
            className="text-4xl md:text-6xl uppercase font-semibold text-[#D1D1C7] flex-1"
            delay={100}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
          />
          <SplitText
            text='"A showcase of web applications I&apos;ve built, blending clean
            code with intuitive design."'
            className="text-xl font-semibold text-[#D1D1C7] flex-1"
            delay={20}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
          />
        </Flex>
        {works.map((work) => (
          <WorkCard key={work.title} work={work} />
        ))}
      </Stack>
    </section>
  );
};

export default Works;
