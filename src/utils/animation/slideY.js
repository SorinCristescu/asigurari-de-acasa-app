import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const SlideY = ({ id, componentRef, children, start, end, markers }) => {
  if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
  }

  useEffect(() => {
    gsap.fromTo(
      [componentRef.current],
      {
        y: '50px',
        opacity: '0',
        x: '0',
      },
      {
        duration: 1.5,
        y: '0px',
        opacity: '1',
        x: '0',
        ease: 'power3.inOut',
        scrollTrigger: {
          trigger: `#${id}`,
          //pin: true, // pin the trigger element while active
          start: `${start}`, // when the top of the trigger hits the top of the viewport
          end: `${end}`, // end after scrolling 500px beyond the start
          scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
        },
      }
    );
  }, [componentRef]);

  return (
    <div
      id={id}
      ref={componentRef}
      style={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {children}
    </div>
  );
};

export default SlideY;
