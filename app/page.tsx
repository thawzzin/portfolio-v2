import Hero from "@/components/sections/Hero";
import { Container, Stack, Text, Title } from "@mantine/core";

export default function Home() {
  return (
    <Stack bg={"black.0"} mih={"100vh"} c={"white"}>
      <Hero />
    </Stack>
  );
}
