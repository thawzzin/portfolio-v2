import { Anchor, Group, Stack, Text, Title } from "@mantine/core";
import React from "react";
import { IconButton } from "../reusable/IconButton";
import { socials } from "@/constants/contact";

const Contact = () => {
  return (
    <section id="about">
      <Stack p={100} py={50}>
        <Group wrap="nowrap" gap={"xl"} align="start">
          <Title flex={1} tt={"uppercase"}>
            Contact /
          </Title>

          <Stack w={"50%"} mt={20}>
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
        </Group>
      </Stack>
    </section>
  );
};

export default Contact;
