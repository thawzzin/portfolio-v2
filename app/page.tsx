"use client";

import Menu from "@/components/common/Menu";
import StaggeredMenu from "@/components/common/Menu";
import Navbar from "@/components/common/Navbar";
import SmoothScroll from "@/components/common/SmoothScroll";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Experiences from "@/components/sections/Experiences";
import GithubContri from "@/components/sections/GithubContri";
import Hero from "@/components/sections/Hero";
import References from "@/components/sections/References";
import Skills from "@/components/sections/Skills";
import Works from "@/components/sections/Works";
import { Stack } from "@mantine/core";

export default function Home() {
  return (
    <>
      <SmoothScroll>
        {/* <div className="fixed top-0 right-20 z-50">
          <Menu />
        </div> */}
        
        <Hero />
        <Stack
          style={{
            position: "absolute",
            zIndex: 2,
            top: "100vh",
            // maxHeight: "100vh",
            width: "100%",
            borderRadius: "30px 30px 0 0",
            borderTop: "1px solid #28427b",
            backgroundColor: "#0d1526",
          }}
          px={{ xs: 20, md: 100 }}
          py={30}
          className="space-y-12 md:space-y-24"
        >
          <About />
          <Works />
          <Skills />
          <Experiences />
          <References />
          <GithubContri />
          <Contact />
        </Stack>
      </SmoothScroll>
    </>
  );
}
