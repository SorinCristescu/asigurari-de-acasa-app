import React, { useState, useEffect, useRef, cloneElement } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import styles from './Carousel.module.css';
import { IconButton } from '@chakra-ui/react';
import { FaLongArrowAltUp, FaLongArrowAltDown } from 'react-icons/fa';

function ArrowLeft(props) {
  const disabeld = props.disabled ? styles.arrowDisabled : '';
  return (
    <IconButton
      isRound
      size="md"
      variant="ghost"
      color="#808080"
      onClick={props.onClick}
      className={`${styles.arrow} ${styles.arrowLeft} ${disabeld}`}
      icon={<FaLongArrowAltUp />}
    />
  );
}

function ArrowRight(props) {
  const disabeld = props.disabled ? styles.arrowDisabled : '';
  return (
    <IconButton
      isRound
      size="md"
      variant="ghost"
      color="#808080"
      onClick={props.onClick}
      className={`${styles.arrow} ${styles.arrowRight} ${disabeld}`}
      icon={<FaLongArrowAltDown />}
    />
  );
}

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
    // spacing: 15,
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
            <ArrowLeft
              onClick={(e) => e.stopPropagation() || slider.prev()}
              disabled={currentSlide === 0}
            />
            <ArrowRight
              onClick={(e) => e.stopPropagation() || slider.next()}
              disabled={currentSlide === slider.details().size - 1}
            />
          </div>
        )}
      </div>
      {/* {slider && (
        <div className={styles.dots}>
          {[...Array(slider.details().size).keys()].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  slider.moveToSlideRelative(idx);
                }}
                className={`${styles.dot} ${
                  currentSlide === idx ? 'styles.active' : ''
                }`}
              />
            );
          })}
        </div>
      )} */}
    </>
  );
};

export default Carousel;
