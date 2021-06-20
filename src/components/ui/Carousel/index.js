import React, { useState, useEffect, useRef, cloneElement } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import styles from './Carousel.module.css';

function ArrowLeft(props) {
  const disabeld = props.disabled ? styles.arrowDisabled : '';
  return (
    <svg
      onClick={props.onClick}
      className={`${styles.arrow} ${styles.arrowLeft} ${disabeld}`}
      width="22"
      height="32"
      viewBox="0 0 22 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.5288 0.195312L0.528824 10.1953C0.268387 10.4557 0.268387 10.8776 0.528824 11.138C0.789262 11.3984 1.21114 11.3984 1.47151 11.138L10.3335 2.276L10.3335 31.3333C10.3335 31.7018 10.6317 32 11.0002 32C11.3687 32 11.6669 31.7018 11.6669 31.3333L11.6669 2.276L20.5288 11.138C20.7893 11.3984 21.2111 11.3984 21.4715 11.138C21.6017 11.0078 21.6668 10.8372 21.6668 10.6666C21.6668 10.4961 21.6017 10.3255 21.4715 10.1952L11.4715 0.19525C11.2111 -0.0651254 10.7893 -0.065125 10.5288 0.195312Z"
        fill="black"
      />
    </svg>
  );
}

function ArrowRight(props) {
  const disabeld = props.disabled ? styles.arrowDisabled : '';
  return (
    <svg
      onClick={props.onClick}
      className={`${styles.arrow} ${styles.arrowRight} ${disabeld}`}
      width="22"
      height="32"
      viewBox="0 0 22 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.5288 31.8047L0.528824 21.8047C0.268387 21.5443 0.268387 21.1224 0.528824 20.862C0.789262 20.6016 1.21114 20.6016 1.47151 20.862L10.3335 29.724L10.3335 0.666687C10.3335 0.298187 10.6317 0 11.0002 0C11.3687 0 11.6669 0.298187 11.6669 0.666687L11.6669 29.724L20.5288 20.862C20.7893 20.6016 21.2111 20.6016 21.4715 20.862C21.6017 20.9922 21.6668 21.1628 21.6668 21.3334C21.6668 21.5039 21.6017 21.6745 21.4715 21.8048L11.4715 31.8048C11.2111 32.0651 10.7893 32.0651 10.5288 31.8047Z"
        fill="black"
      />
    </svg>
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
    // loop: true,
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
    }, 4000);
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
