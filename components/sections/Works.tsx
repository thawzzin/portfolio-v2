import { Group, Stack, Title } from "@mantine/core";
import { useInView } from "motion/react";
import Image from "next/image";
import React, { useRef } from "react";
import { motion } from "motion/react";

const works = [
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
];

const Works = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "0px 0px -600px 0px" });

  return (
    <section id="projects" className="min-h-screen">
      <Stack px={100} py={"xl"}>
        <Group wrap="nowrap" gap={"xl"} align="start">
          <Title tt={"uppercase"} flex={1}>
            Selected Works /
          </Title>
          <Title order={4} w={"50%"}>
            &quot;A showcase of web applications I&apos;ve built, blending clean
            code with intuitive design.&quot;
          </Title>
        </Group>
        <Group align="start" className="relative" mt={"xl"}>
          <motion.div
            initial={{ y: -10 }}
            animate={{ y: 0 }}
            exit={{ y: 10 }}
            transition={{ duration: 0.3 }}
            className="sticky top-0 flex-1"
          >
            <Title fz={"10rem"} flex={1} pos={"sticky"} top={0}>
              &diams;{isInView ? 3 : 1}
            </Title>
          </motion.div>
          <Stack w={"60%"}>
            {works.map((work) => (
              <div
                key={work.id}
                className="h-[calc(100vh-100px)] bg-gray-200"
                ref={ref}
              >
                <Image
                  src={"/images/work-dummy.png"}
                  alt="work"
                  width={1920}
                  height={1080}
                />
              </div>
            ))}
          </Stack>
        </Group>
      </Stack>
    </section>
  );
};

export default Works;
