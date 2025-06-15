import { Divider, Group, Stack, Text, Title } from "@mantine/core";
import React from "react";

const About = () => {
  return (
    <section id="about">
      <Stack bg={"blue.0"} px={100} py={"xl"}>
        <Group wrap="nowrap" gap={"xl"} align="start">
          <Stack gap={0} flex={1}>
            <Title order={1} tt={"uppercase"}>
              About Me /
            </Title>
          </Stack>

          <Stack w={"50%"}>
            <Title order={3}>Hi, I am Thaw Zin, a web developer.</Title>
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
