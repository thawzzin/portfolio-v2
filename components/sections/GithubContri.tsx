import { Stack, Title } from "@mantine/core";
import React from "react";
import GitHubCalendar from "react-github-calendar";

const GithubContri = () => {
  return (
    <section>
      <Stack p={100} py={50} tt={"uppercase"} gap={"4rem"} pos={"relative"} c={"#D1D1C7"}>
        <Stack className="mx-auto" gap={20}>
          <Title order={2} flex={1}>
            GitHub Contribution Graph
          </Title>
          <GitHubCalendar username="thawzzin" blockSize={15} />
        </Stack>
      </Stack>
    </section>
  );
};

export default GithubContri;
