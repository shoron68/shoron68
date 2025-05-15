import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Container from "./Container";

const StickyScrollText = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);

  return (
    <Container>


    <section ref={containerRef} className="h-[300vh]">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <motion.h1
          style={{ x }}
          className="text-[50px] sm:text-[60px] font-Plaster md:text-[90px] lg:text-[110px] font-bold text-[#f4ffed] whitespace-nowrap px-4"
        >
          I AM AS UNIQUE AS MY DESIGN
        </motion.h1>
      </div>
    </section>
    </Container>
  );
};

export default StickyScrollText;
