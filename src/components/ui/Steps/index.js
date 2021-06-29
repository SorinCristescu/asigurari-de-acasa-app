import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { Flex, Text, Heading, Box, IconButton } from '@chakra-ui/react';
import { FaLongArrowAltUp, FaLongArrowAltDown } from 'react-icons/fa';

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
      next();
    }, 17500);
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
        duration: 16,
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
      h={{
        base: '70vh',
        sm: '70vh',
        md: '50vh',
        lg: '50vh',
        xl: '50vh',
      }}
      align="center"
      justify="center"
      position="relative"
      mt="150px"
    >
      <Box
        position="absolute"
        top={{
          base: '80px',
          sm: '80px',
          md: '50px',
          lg: '50px',
          xl: '50px',
        }}
        left={{
          base: '30px',
          sm: '30px',
          md: '50px',
          lg: '50px',
          xl: '50px',
        }}
      >
        <svg
          ref={arrow}
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
      </Box>

      <Heading
        ref={counter}
        position="absolute"
        top={{
          base: '0px',
          sm: '0px',
          md: '-70px',
          lg: '-70px',
          xl: '-70px',
        }}
        left="0"
        zIndex="0"
        // style={{ position: 'absolute', top: '-70px', left: '0', zIndex: '0' }}
        fontSize={{
          base: '50px',
          sm: '50px',
          md: '90px',
          lg: '100px',
          xl: '100px',
        }}
        color="#4D4DFF"
      >
        {steps[count].count}
      </Heading>
      <Flex
        w="100px"
        h={{
          base: '70vh',
          sm: '70vh',
          md: '50vh',
          lg: '50vh',
          xl: '50vh',
        }}
        direction="column"
        align="flex-end"
        justify="space-between"
        position="absolute"
        top="0px"
        right="0"
        zIndex="1"
      >
        <IconButton
          onClick={prev}
          variant="ghost"
          color="#808080"
          isRound
          icon={<FaLongArrowAltUp />}
          zIndex="1"
        />
        <IconButton
          onClick={next}
          variant="ghost"
          color="#808080"
          isRound
          icon={<FaLongArrowAltDown />}
          zIndex="0"
        />
      </Flex>
      <Box
        position="absolute"
        top={{
          base: '30px',
          sm: '30px',
          md: '0px',
          lg: '0px',
          xl: '0px',
        }}
        left={{
          base: '50px',
          sm: '50px',
          md: '100px',
          lg: '100px',
          xl: '100px',
        }}
        h="50vh"
      >
        <Box>
          <Heading
            ref={title}
            textAlign="left"
            fontSize={{
              base: '32px',
              sm: '32px',
              md: '48px',
              lg: '48px',
              xl: '48px',
            }}
            w={{
              base: '90%',
              sm: '90%',
              md: '60%',
              lg: '60%',
              xl: '60%',
            }}
            mb="50px"
            zIndex="2"
          >
            {steps[count].title}
          </Heading>
          <Text
            ref={text}
            textAlign="left"
            w={{
              base: '90%',
              sm: '90%',
              md: '60%',
              lg: '60%',
              xl: '60%',
            }}
          >
            {steps[count].text}
          </Text>
        </Box>
      </Box>
    </Flex>
  );
};

export default Steps;
