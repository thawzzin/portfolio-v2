import { Group, Stack, Text, Title } from "@mantine/core";
import React from "react";
import SplitText from "../reusable/SplitText";

const About = () => {
  return (
    <section id="about">
      <Stack p={100} py={50}>
        <Group wrap="nowrap" gap={"xl"} align="start">
          <SplitText
            text="About Me /"
            className="text-6xl uppercase font-semibold text-[#D1D1C7] flex-1"
            delay={100}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
          />

          <Stack w={"50%"}>
            <Title order={4}>Hi, I am Thaw Zin, a web developer.</Title>
            <Text>
              As an experienced web developer with computer science education
              background, I have a solid foundation in both frontend and backend
              technologies, along with experience working with frameworks and
              libraries like Reactjs, Nextjs and Nestjs to build user-friendly
              web applications. I am skilled in both front-end and back-end
              development, enabling me to create seamless and responsive
              applications that deliver a great user experience. I am always
              eager to improve my skills and stay updated on the latest
              technologies and best practices in the field.
              <br /> <br />I am confident in my ability to quickly learn and
              adapt to new technologies and challenges. With strong
              problem-solving skills and a passion for web development, I am
              committed to delivering high-quality work and contributing
              effectively to any team.
            </Text>
          </Stack>
        </Group>
      </Stack>
    </section>
  );
};

export default About;
