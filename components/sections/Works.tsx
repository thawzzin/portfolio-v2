import { Flex, Group, Stack, Title } from "@mantine/core";
import { useAnimation, useInView } from "motion/react";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { works } from "@/constants/works";
import SplitText from "../reusable/SplitText";
import WorkCard from "../common/WorkCard";

const Works = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "0px 0px -600px 0px" });

  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView]);

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
          <Title order={4} w={{ md: "50%" }}>
            &quot;A showcase of web applications I&apos;ve built, blending clean
            code with intuitive design.&quot;
          </Title>
        </Flex>
        {works.map((work) => (
          <WorkCard key={work.title} work={work} />
        ))}
      </Stack>
    </section>
  );
};

export default Works;
