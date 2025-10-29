import { Group, Stack, Title } from "@mantine/core";
import React from "react";
import { AnimatedTestimonials } from "../ui/AnimatedTestimonials";
import { testimonials } from "@/constants/testimonials";
import SplitText from "../reusable/SplitText";
import Reveal from "../reusable/Reveal";

const References = () => {
  return (
    <section>
      <Stack>
        <SplitText
          text="References /"
          className="text-4xl md:text-6xl uppercase font-semibold text-[#D1D1C7] flex-1"
          delay={100}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
        />
        
          <AnimatedTestimonials testimonials={testimonials} />
      </Stack>
    </section>
  );
};

export default References;
