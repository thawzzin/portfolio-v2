"use client";
import styles from "../../app/style.module.css";
import { useEffect, useRef } from "react";
import Lenis from "lenis";
import Image, { StaticImageData } from "next/image";
import { useTransform, motion, useScroll } from "framer-motion";
import { works } from "@/constants/works";
import { Button, Text } from "@mantine/core";
import ArrowButton from "../reusable/ArrowButton";
import Lottie from "@lottielab/lottie-player/react";

interface CardProps {
  index: number;
  work: {
    title: string;
    type: string;
    description: string;
    video: string;
    url?: string;
    githubUrl: string;
    img: string;
    icons: string[];
  };
}

const Card = ({ index, work }: CardProps) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  //   const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div ref={container} className={styles.cardContainer}>
      <motion.div
        style={{
          backgroundColor: "#0d1526",
          //   scale,
          top: `calc(-5vh + ${index * 100}px)`,
        }}
        className={`${styles.card} ${
          index !== 0 ? "border-t-[0.1px] border-[#393632]" : ""
        }`}
      >
        <h2>{work.title}</h2>
        <div className={styles.body}>
          <div className={styles.description}>
            <p>{work.description}</p>
            <ArrowButton text="View Demo" />
          </div>

          <div className={styles.imageContainer}>
            <motion.div className={styles.inner} style={{ scale: imageScale }}>
              {/* <Image fill src={`/images/${src}`} alt="image" /> */}
              {/* <video autoPlay muted loop>
                <source src={work.video} type="video/mp4" />
              </video> */}
              <div className="flex justify-around">
                <div
                  className={
                    work.type === "mobile"
                      ? `md:ml-10 md:w-60 md:h-[450px] w-32 h-56 rounded-2xl overflow-hidden border-black border-solid border-4`
                      : "md:ml-10 rounded-2xl overflow-hidden border-black border-solid border-4"
                  }
                >
                  <video
                    autoPlay
                    muted
                    loop
                    src={work.video}
                    className="w-full h-full object-fill"
                  ></video>
                </div>
                
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default function ScrollStack() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });

  return (
    <main ref={container} className={styles.main}>
      {works.map((work, index) => {
        const targetScale = 1 - (works.length - index) * 0.05;
        return <Card key={`p_${index}`} index={index} work={work} />;
      })}
    </main>
  );
}
