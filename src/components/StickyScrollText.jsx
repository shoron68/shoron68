import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Container from "./Container";

const StickyScrollText = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);

  return (
    <Container>
      <section className="lg:h-[150vh] relative" ref={ref}>
      <div className="sticky top-0 lg:h-screen h-[100dvh] flex items-center overflow-hidden w-full">
        <motion.h1
          className="text-[50px] sm:text-[60px] md:text-[90px] lg:text-[110px] font-Plaster text-[#f4ffed] whitespace-nowrap px-4"
          style={{ x }}
        >
          I AM AS UNIQUE AS MY DESIGN
        </motion.h1>
      </div>
    </section>
    </Container>
  );
};

export default StickyScrollText;
