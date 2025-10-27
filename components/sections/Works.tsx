import { Group, Stack, Title } from "@mantine/core";
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
      <Stack px={{ xs: 20, md: 100 }} py={"xl"}>
        <Group wrap="nowrap" gap={"xl"} align="start">
          <SplitText
            text="Selected Works /"
            className="text-6xl uppercase font-semibold text-[#D1D1C7] flex-1"
            delay={100}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
          />
          <Title order={4} w={"50%"}>
            &quot;A showcase of web applications I&apos;ve built, blending clean
            code with intuitive design.&quot;
          </Title>
        </Group>
        {/* <Group align="start" className="relative" mt={100}>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: -75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.5 }}
            className="sticky top-0 flex-1"
          >
            <Title fz={"15rem"} flex={1} pos={"sticky"} top={0}>
              &diams;3
            </Title>
          </motion.div>
          <Stack w={"60%"}>
            {works.map((work) => (
              <div key={work.title} className="h-[calc(100vh-100px)]" ref={ref}>
                <div
                  className={
                    work.type === "mobile"
                      ? "md:ml-10 md:w-60 md:h-[450px] w-32 h-56 rounded-2xl overflow-hidden border-black border-solid border-4 vid"
                      : "md:ml-10 rounded-2xl overflow-hidden border-black border-solid border-4 vid"
                  }
                >
                  <video
                    autoPlay
                    muted
                    loop
                    src={work.video}
                    className="w-full h-full object-fill"
                  ></video>
                </div>
              </div>
            ))}
          </Stack>
        </Group> */}
        {works.map((work) => (
          <WorkCard key={work.title} work={work} />
        ))}
      </Stack>
    </section>
  );
};

export default Works;
