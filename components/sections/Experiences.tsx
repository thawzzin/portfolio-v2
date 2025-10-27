import { experiences } from "@/constants/experiences";
import { Stack, Text, Timeline, Title } from "@mantine/core";
import React from "react";
import SplitText from "../reusable/SplitText";

const Experiences = () => {
  return (
    <Stack p={100} py={50} gap={50}>
      <SplitText
        text="Experiences /"
        className="text-6xl uppercase font-semibold text-[#D1D1C7] flex-1"
        delay={100}
        ease="power3.out"
        splitType="chars"
        from={{ opacity: 0, y: 40 }}
        to={{ opacity: 1, y: 0 }}
        threshold={0.1}
        rootMargin="-100px"
      />
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
