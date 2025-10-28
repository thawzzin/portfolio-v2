import { Anchor, Flex, Group, Stack, Text, Title } from "@mantine/core";
import React from "react";
import { IconButton } from "../reusable/IconButton";
import { socials } from "@/constants/contact";
import SplitText from "../reusable/SplitText";

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
              <Title order={5}>+66923901688</Title>
              <Title order={5}>+959788686252</Title>
            </Stack>
            <Stack gap={0}>
              <Text>Email</Text>
              <Anchor href="mailto:thawzzin.dev@gmail.com">
                <Title order={5}>thawzzin.dev@gmail.com</Title>
              </Anchor>
            </Stack>
            <Stack gap={0}>
              <Text>Socials</Text>
              <Group mt={2}>
                {socials.map((social: any, index: number) => (
                  <Anchor key={index} href={social.url}>
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
