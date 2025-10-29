import { Anchor, Flex, Group, Stack, Text, Title } from "@mantine/core";
import React from "react";
import { IconButton } from "../reusable/IconButton";
import { socials } from "@/constants/contact";
import SplitText from "../reusable/SplitText";
import Reveal from "../reusable/Reveal";
import BlurText from "../reusable/BlurText";

const Contact = () => {
  return (
    <section id="contact">
      <Stack>
        <Flex
          direction={{ xs: "column", md: "row" }}
          wrap="nowrap"
          gap={"xl"}
          align="start"
        >
          <SplitText
            text="Contact /"
            className="text-4xl md:text-6xl uppercase font-semibold text-[#D1D1C7] flex-1"
            delay={100}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
          />

          <Stack w={{ xs: "100%", md: "50%" }} mt={20}>
            <Stack gap={0}>
              <Text>Phone</Text>
              <Title order={5}>
                <BlurText>+66923901688</BlurText>
              </Title>
              <Title order={5}>
                <BlurText>+959788686252</BlurText>
              </Title>
            </Stack>
            <Stack gap={0}>
              <Text>Email</Text>
              <Anchor href="mailto:thawzzin.dev@gmail.com">
                <Title order={5}>
                  <BlurText>thawzzin.dev@gmail.com</BlurText>
                </Title>
              </Anchor>
            </Stack>
            <Stack gap={0}>
              <Text>Socials</Text>
              <Group mt={2}>
                {socials.map((social: any, index: number) => (
                  <Anchor key={index} href={social.url} className="hover:rotate-[360deg] hover:scale-125 transition-all duration-700">
                    <IconButton
                      name={social.logoName}
                      size={32}
                      color="#D1D1C7"
                    />
                  </Anchor>
                ))}
              </Group>
            </Stack>
          </Stack>
        </Flex>
      </Stack>
    </section>
  );
};

export default Contact;
