import React from "react";
import Header from "../common/Header";
import { Button, Stack, Text, Title } from "@mantine/core";

const Hero = () => {
  return (
    <div className="hero p-5 space-y-20 min-h-screen">
      <Header />
      <Stack ta={"center"} w={"50%"} mx={"auto"} gap={"xl"}>
        <Text>BUILDING VISIONS INTO PIXELS</Text>
        <Title order={1}>
          Designing Intuitive & <br /> Responsive Web Interfaces
        </Title>
        <Text>
          Hi! I’m Thaw Zin, a Frontend Developer turning complex ideas into
          delightful user experiences — with clean code, sleek design, and
          modern tech.
        </Text>
        <Button w={"fit-content"} mx={"auto"} variant="outline">
          View Projects
        </Button>
      </Stack>
    </div>
  );
};

export default Hero;
