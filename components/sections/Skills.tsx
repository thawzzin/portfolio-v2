import { Stack, Group, Title } from "@mantine/core";
import React from "react";
import FloatingSkills from "../common/FloatingSkills";
import Image from "next/image";
import { skillGroups } from "@/constants/skills";

const Skills = () => {
  return (
    <section id="about">
      <Stack p={100} py={50} tt={"uppercase"} gap={"4rem"} pos={"relative"}>
        <Title flex={1}>Skills /</Title>

        {/* <FloatingSkills/> */}

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
    </section>
  );
};

export default Skills;
