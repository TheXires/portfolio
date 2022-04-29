import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import React, { useState } from 'react';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import styles from '../../styles/project/imageSlider.module.css';

interface Props {
  images: string[];
}

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 500 : -500,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 500 : -500,
      opacity: 0,
    };
  },
};

function ImageSlider({ images }: Props) {
  const [current, setCurrent] = useState<number>(0);
  const [direction, setDirection] = useState(1);

  const next = () => {
    setDirection(1);
    if (images.length - 1 > current) {
      setCurrent(current + 1);
    } else {
      setCurrent(0);
    }
  };

  const prev = () => {
    setDirection(-1);
    if (current > 0) {
      setCurrent(current - 1);
    } else {
      setCurrent(images.length - 1);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={current}
            className={styles.image}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              opacity: { duration: 0.2 },
            }}
          >
            <Image src={`${images[current]}`} height={600} width={800} objectFit="contain" />
          </motion.div>
        </AnimatePresence>
        <div className={styles.button} onClick={prev}>
          <FiArrowLeft size={24} color="white" />
        </div>
        <div className={styles.button} onClick={next}>
          <FiArrowRight size={24} color="white" />
        </div>
      </div>
    </div>
  );
}

export default ImageSlider;

const a = [
  {
    url: 'asdad',
    width: 34,
    height: 334,
  },
];
