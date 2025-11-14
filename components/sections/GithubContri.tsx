import { Stack, Title } from "@mantine/core";
import React from "react";
import GitHubCalendar from "react-github-calendar";
import SplitText from "../reusable/SplitText";
import Reveal from "../reusable/Reveal";

const GithubContri = () => {
  return (
    <section className="hidden xl:block">
      <Stack
        px={{ xs: 20, md: 100 }}
        tt={"uppercase"}
        gap={"4rem"}
        pos={"relative"}
        c={"#D1D1C7"}
      >
        <Stack className="mx-auto" gap={20}>
          {/* <Title order={2} flex={1}>
            GitHub Contribution Graph
          </Title> */}
          <SplitText
            text="GitHub Contribution Graph"
            className="text-4xl md:text-6xl uppercase font-semibold text-[#D1D1C7] flex-1"
            delay={50}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
          />
          <Reveal>
            <GitHubCalendar username="thawzzin" blockSize={15} />
          </Reveal>
        </Stack>
      </Stack>
    </section>
  );
};

export default GithubContri;
