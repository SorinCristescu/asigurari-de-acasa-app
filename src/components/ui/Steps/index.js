import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';

import {
  Flex,
  Spacer,
  Center,
  Text,
  Heading,
  Box,
  Button,
  IconButton,
} from '@chakra-ui/react';
import classes from './Steps.module.css';

const Steps = ({ steps }) => {
  const arrow = useRef(null);
  const title = useRef(null);
  const text = useRef(null);
  const counter = useRef(null);
  const timer = useRef();

  const [count, setCount] = useState(0);
  const length = steps.length;

  useEffect(() => {
    timer.current = setInterval(() => {
      // if (count === 0) {
      next();
      // }
    }, 6500);
    return () => {
      clearInterval(timer.current);
    };
  }, [count]);

  useEffect(() => {
    gsap.fromTo(
      [arrow.current],
      {
        height: '50px',
      },
      {
        duration: 5,
        height: '232px',
        ease: 'power1.inOut',
      }
    );
    gsap.fromTo(
      [counter.current, title.current, text.current],
      {
        y: '-20px',
        opacity: 0,
      },
      {
        duration: 1.5,
        y: '0px',
        opacity: 1,
        stagger: {
          amount: 0.8,
        },
        ease: 'power1.inOut',
      }
    );
  }, [count]);

  const next = () => {
    setCount(count === length - 1 ? 0 : count + 1);
  };
  const prev = () => {
    setCount(count === 0 ? length - 1 : count - 1);
  };

  return (
    <Flex
      w="100%"
      h="50vh"
      align="center"
      justify="center"
      position="relative"
      mt="150px"
    >
      <svg
        ref={arrow}
        className={classes.arrow}
        width="8"
        height="232"
        viewBox="0 0 8 232"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.64645 231.354C3.84171 231.549 4.15829 231.549 4.35355 231.354L7.53553 228.172C7.7308 227.976 7.7308 227.66 7.53553 227.464C7.34027 227.269 7.02369 227.269 6.82843 227.464L4 230.293L1.17157 227.464C0.976311 227.269 0.659728 227.269 0.464466 227.464C0.269204 227.66 0.269204 227.976 0.464466 228.172L3.64645 231.354ZM3.5 0L3.5 231H4.5L4.5 0L3.5 0Z"
          fill="#BFBFBF"
        />
      </svg>
      <Heading
        ref={counter}
        style={{ position: 'absolute', top: '-70px', left: '0', zIndex: '0' }}
        fontSize="100px"
        color="#BFBFBF"
      >
        {steps[count].count}
      </Heading>
      <Flex
        w="100px"
        h="300px"
        direction="column"
        align="flex-end"
        justify="space-between"
        style={{ position: 'absolute', top: '0px', right: '0' }}
      >
        <IconButton
          onClick={prev}
          variant="ghost"
          colorScheme="#4D4DFF"
          fontSize="20px"
          isRound
        >
          <svg
            width="15"
            height="20"
            viewBox="0 0 22 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.5288 0.195312L0.528824 10.1953C0.268387 10.4557 0.268387 10.8776 0.528824 11.138C0.789262 11.3984 1.21114 11.3984 1.47151 11.138L10.3335 2.276L10.3335 31.3333C10.3335 31.7018 10.6317 32 11.0002 32C11.3687 32 11.6669 31.7018 11.6669 31.3333L11.6669 2.276L20.5288 11.138C20.7893 11.3984 21.2111 11.3984 21.4715 11.138C21.6017 11.0078 21.6668 10.8372 21.6668 10.6666C21.6668 10.4961 21.6017 10.3255 21.4715 10.1952L11.4715 0.19525C11.2111 -0.0651254 10.7893 -0.065125 10.5288 0.195312Z"
              fill="black"
            />
          </svg>
        </IconButton>
        <IconButton
          onClick={next}
          variant="ghost"
          colorScheme="#4D4DFF"
          fontSize="50px"
          isRound
        >
          <svg
            width="15"
            height="20"
            viewBox="0 0 22 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.5288 31.8047L0.528824 21.8047C0.268387 21.5443 0.268387 21.1224 0.528824 20.862C0.789262 20.6016 1.21114 20.6016 1.47151 20.862L10.3335 29.724L10.3335 0.666687C10.3335 0.298187 10.6317 0 11.0002 0C11.3687 0 11.6669 0.298187 11.6669 0.666687L11.6669 29.724L20.5288 20.862C20.7893 20.6016 21.2111 20.6016 21.4715 20.862C21.6017 20.9922 21.6668 21.1628 21.6668 21.3334C21.6668 21.5039 21.6017 21.6745 21.4715 21.8048L11.4715 31.8048C11.2111 32.0651 10.7893 32.0651 10.5288 31.8047Z"
              fill="black"
            />
          </svg>
        </IconButton>
      </Flex>
      <Box
        style={{ position: 'absolute', top: '0', left: '100px' }}
        w="60%"
        h="50vh"
      >
        <Box>
          <Heading
            ref={title}
            textAlign="left"
            fontSize="48px"
            mb="50px"
            style={{ zIndex: '2' }}
          >
            {steps[count].title}
          </Heading>
          <Text ref={text} textAlign="left">
            {steps[count].text}
          </Text>
        </Box>
      </Box>
    </Flex>
  );
};

export default Steps;
