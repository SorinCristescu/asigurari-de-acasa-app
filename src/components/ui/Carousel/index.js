import React, { useState, useEffect, useRef, cloneElement } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import styles from './Carousel.module.css';
import { IconButton } from '@chakra-ui/react';
import { FaLongArrowAltUp, FaLongArrowAltDown } from 'react-icons/fa';

const Carousel = ({ children, items, width, height }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [pause, setPause] = useState(false);
  const timer = useRef();
  const [sliderRef, slider] = useKeenSlider({
    initial: 0,
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide);
    },
    loop: true,
    spacing: 20,
    // centered: true,
    vertical: true,
    duration: 1000,
    // speed: 5,
    dragStart: () => {
      setPause(true);
    },
    dragEnd: () => {
      setPause(false);
    },
  });
  useEffect(() => {
    sliderRef.current.addEventListener('mouseover', () => {
      setPause(true);
    });
    sliderRef.current.addEventListener('mouseout', () => {
      setPause(false);
    });
  }, [sliderRef]);

  useEffect(() => {
    timer.current = setInterval(() => {
      if (!pause && slider) {
        slider.next();
      }
    }, 10000);
    return () => {
      clearInterval(timer.current);
    };
  }, [pause, slider]);

  const keenSlider = `keen-slider`;
  const keenSliderSlide = `keen-slider__slide`;

  return (
    <>
      <div
        className={styles.wrapper}
        style={{ width: `${width}`, height: `${height}` }}
      >
        <div ref={sliderRef} className={keenSlider}>
          {items.map((item, index) => (
            <div key={index} className={keenSliderSlide}>
              {cloneElement(children, { item: item })}
            </div>
          ))}
        </div>
        {slider && (
          <div className={styles.navigation}>
            <IconButton
              isRound
              size="md"
              variant="ghost"
              position="absolute"
              cursor="pointer"
              color="#808080"
              right="10px"
              top="0"
              onClick={(e) => e.stopPropagation() || slider.prev()}
              icon={<FaLongArrowAltUp />}
            />
            <IconButton
              isRound
              size="md"
              variant="ghost"
              color="#808080"
              onClick={(e) => e.stopPropagation() || slider.next()}
              position="absolute"
              cursor="pointer"
              right="10px"
              bottom="0"
              icon={<FaLongArrowAltDown />}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default Carousel;
