import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const Loader = ({ onFinish }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsExpanded(true);
      setTimeout(() => {
        setIsVisible(false);
        onFinish();
      }, 1000);
    }, 3000);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
  className="fixed inset-0 bg-black flex items-center justify-center z-50 overflow-hidden"
  initial={{ opacity: 1 }}
  exit={{ opacity: 0, transition: { duration: 1 } }}
>
  <motion.div
    className="bg-[#80ed99] rounded-full"
    initial={{ width: 64, height: 64 }}
    animate={
      isExpanded
        ? {
            width: '3500px',
            height: '3500px',
            transition: { duration: 1, ease: 'easeInOut' },
          }
        : {
            scale: [1, 1.5, 1],
            transition: { repeat: Infinity, duration: 1 },
          }
    }
  />
</motion.div>

      )}
    </AnimatePresence>
  );
};

export default Loader;