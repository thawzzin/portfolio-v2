import { Stack, Group, Title, Grid, GridCol, Text } from "@mantine/core";
import React from "react";
import FloatingSkills from "../common/FloatingSkills";
import Image from "next/image";
import { skillGroups } from "@/constants/skills";
import SplitText from "../reusable/SplitText";

const Skills = () => {
  return (
    <section id="skills">
      <div className="hidden md:block">
        <Stack
          tt={{ xs: "none", md: "uppercase" }}
          gap={"4rem"}
          pos={"relative"}
        >
          <SplitText
            text="Skills /"
            className="text-4xl md:text-6xl uppercase font-semibold text-[#D1D1C7] flex-1"
            delay={100}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
          />

          {skillGroups.map((group, index) => (
            <Group key={index} wrap="nowrap" gap={"xl"} align="start">
              <Title order={2} flex={1}>
                {group.title}
              </Title>
              <Stack w={"60%"}>
                <Group className="!gap-x-14">
                  {group.skills.map((skill, index) => (
                    <Group key={index}>
                      <Image
                        src={skill.icon}
                        alt="skill"
                        width={30}
                        height={30}
                      />
                      <Title order={5}>{skill.name}</Title>
                    </Group>
                  ))}
                </Group>
              </Stack>
            </Group>
          ))}
        </Stack>
      </div>
      <div className="md:hidden flex flex-col gap-10 justify-center items-center">
        <SplitText
          text="Skills"
          className="text-3xl md:text-6xl capitalize font-semibold text-[#D1D1C7]"
          delay={100}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
        />
        <Grid>
          <GridCol span={4}>
            {skillGroups[0].skills.map((skill, index) => (
              <Text fw={500} key={index}>
                {skill.name}
              </Text>
            ))}
          </GridCol>
          <GridCol span={4}>
            {skillGroups[1].skills.map((skill, index) => (
              <Text fw={500} key={index}>
                {skill.name}
              </Text>
            ))}
          </GridCol>
          <GridCol span={4}>
            {skillGroups[2].skills.map((skill, index) => (
              <Text fw={500} key={index}>
                {skill.name}
              </Text>
            ))}
            <br />
            {skillGroups[3].skills.map((skill, index) => (
              <Text fw={500} key={index}>
                {skill.name}
              </Text>
            ))}
          </GridCol>
        </Grid>
      </div>
    </section>
  );
};

export default Skills;
