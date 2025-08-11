import { Group, Stack, Title } from "@mantine/core";
import React from "react";
import { AnimatedTestimonials } from "../ui/AnimatedTestimonials";
import { testimonials } from "@/constants/testimonials";

const References = () => {
  return (
    <section>
      <Stack p={100} py={50}>
        {/* <Group wrap="nowrap" gap={"xl"} align="start"> */}
        <Title flex={1} tt={"uppercase"}>
          References /
        </Title>
        {/* </Group> */}
        <AnimatedTestimonials testimonials={testimonials} />
      </Stack>
    </section>
  );
};

export default References;
