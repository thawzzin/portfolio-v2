import React, { ReactNode, useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "motion/react";

const Reveal = ({
  children,
  width = "fit-content",
  isSlide = false,
  className = "",
}: {
  children: ReactNode;
  width?: string;
  isSlide?: boolean;
  className?: string;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView]);

  return (
    <div
      ref={ref}
      className={`${className} relative overflow-hidden`}
      style={{ width: width }}
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>
      {isSlide && (
        <motion.div
          variants={{ hidden: { left: 0 }, visible: { left: "100%" } }}
          initial="hidden"
          animate={slideControls}
          transition={{ duration: 0.5, ease: "easeIn" }}
          className="absolute top-1 bottom-1 left-0 right-0 z-20 backdrop-blur-lg backdrop-saturate-150 bg-white/5 border-[1px] border-solid border-white/15"
        />
      )}
    </div>
  );
};

export default Reveal;
