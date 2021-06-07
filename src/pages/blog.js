import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import PageHead from '../components/layout/PageHead';
import Link from 'next/link';
import Image from 'next/image';
import { Flex, Text, Heading, Button, Wrap, WrapItem } from '@chakra-ui/react';
import Card from '../components/ui/Card';

const posts = [
  { count: 1, title: 'weqwr', description: 'fef' },
  { count: 2, title: 'qefef', description: 'fdfdf' },
  { count: 3, title: 'fff', description: 'sdfwefd' },
  { count: 4, title: 'dfef', description: 'sdfwef' },
  { count: 5, title: 'weqwr', description: 'fef' },
  { count: 6, title: 'qefef', description: 'fdfdf' },
  { count: 7, title: 'fff', description: 'sdfwefd' },
  { count: 8, title: 'dfef', description: 'sdfwef' },
  { count: 9, title: 'adfwef', description: 'dfewfw' },
  { count: 10, title: 'adfwef', description: 'dfewfw' },
];
const Blog = () => {
  const subtitleRef = useRef(null);
  const titleRef = useRef(null);
  const numberRef = useRef(null);
  const postRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      [
        titleRef.current,
        subtitleRef.current,
        numberRef.current,
        postRef.current,
      ],
      {
        y: '50px',
        opacity: 0,
      },
      {
        duration: 1.5,
        y: '0px',
        opacity: 1,
        ease: 'power3.inOut',
        stagger: {
          amount: 0.8,
        },
      }
    );
  }, [titleRef, subtitleRef, numberRef, postRef]);
  return (
    <>
      <PageHead title="asigurari de acasa - Blog" />
      <Flex
        w="100%"
        pt="150px"
        direction="column"
        align="center"
        justify="center"
      >
        <Heading ref={titleRef} as="h1" fontSize="100px" mb="50px">
          Blog
        </Heading>
        <Text ref={subtitleRef} fontSize="24px">
          In lumea asigurarilor
        </Text>
        <Text ref={numberRef} fontSize="10px">
          articole ({posts.length})
        </Text>
        <Wrap
          my="50px"
          spacing="30px"
          w="100%"
          direction="row"
          align="flex-start"
          justify="space-between"
        >
          {posts?.map((post, index) => {
            return (
              <WrapItem
                key={post.count}
                ref={(el) => (postRef.current[index] = el)}
              >
                <Card
                  item={post}
                  width="220px"
                  height="250px"
                  headingSize="24px"
                  padding="20px"
                  // mx="10px"
                />
              </WrapItem>
            );
          })}
        </Wrap>
      </Flex>
    </>
  );
};

export default Blog;
