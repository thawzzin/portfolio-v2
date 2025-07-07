import { experiences } from "@/constants/experiences";
import { Stack, Text, Timeline, Title } from "@mantine/core";
import React from "react";

const Experiences = () => {
  return (
    <Stack p={100} py={50} gap={50}>
      <Title flex={1} tt={"uppercase"}>
        Experiences /
      </Title>
      <Stack gap={60}>
        <Timeline bulletSize={24} lineWidth={2}>
          {experiences.map((experience, index) => (
            <Timeline.Item
              key={index}
              bullet={
                <Text className="-translate-y-[1px]" c={"blue.0"}>
                  &diams;
                </Text>
              }
              title={<Text>{experience.company}</Text>}
            >
              <Title order={2}>{experience.position}</Title>
              <Text>{experience.duration}</Text>
            </Timeline.Item>
          ))}
        </Timeline>
      </Stack>
    </Stack>
  );
};

export default Experiences;
