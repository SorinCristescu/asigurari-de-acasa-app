import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { Flex, Text, Heading, Box, IconButton } from '@chakra-ui/react';
import { FaLongArrowAltUp, FaLongArrowAltDown } from 'react-icons/fa';
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
    }, 13500);
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
        duration: 12,
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
          fill="#4D4DFF"
        />
      </svg>
      <Heading
        ref={counter}
        style={{ position: 'absolute', top: '-70px', left: '0', zIndex: '0' }}
        fontSize="100px"
        color="#4D4DFF"
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
          color="#808080"
          isRound
          icon={<FaLongArrowAltUp />}
        />
        <IconButton
          onClick={next}
          variant="ghost"
          color="#808080"
          isRound
          icon={<FaLongArrowAltDown />}
        />
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
