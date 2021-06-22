import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import PageHead from '../../components/layout/PageHead';
import Link from 'next/link';
import { Flex, Text, Heading, Wrap, WrapItem } from '@chakra-ui/react';
import BlogCard from '../../components/ui/BlogCard';

const Blog = ({ posts }) => {
  const subtitleRef = useRef(null);
  const titleRef = useRef(null);
  const numberRef = useRef(null);
  const postRef = useRef([]);

  useEffect(() => {
    if (posts && posts.length !== 0) {
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
    }
  }, [titleRef, subtitleRef, numberRef, postRef]);

  return (
    <>
      <PageHead title="asigurari de acasa - Blog" />
      {posts && posts.length !== 0 ? (
        <Flex
          w="100%"
          pt="150px"
          direction="column"
          align="center"
          justify="center"
        >
          <Heading ref={titleRef} as="h1" fontSize="100px" mb="50px">
            Din lumea asigurarilor
          </Heading>
          <Text ref={numberRef} fontSize="10px">
            articole ({posts.length})
          </Text>
          <Wrap justify="center" my="50px" spacing="30px" w="100%">
            {posts?.map((post, index) => {
              return (
                <WrapItem
                  key={post.id}
                  ref={(el) => (postRef.current[index] = el)}
                >
                  <BlogCard post={post} />
                </WrapItem>
              );
            })}
          </Wrap>
        </Flex>
      ) : (
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
          <Text fontSize="24px" mt="100px">
            Nu a fost gasita nici o postare momentan!
          </Text>
        </Flex>
      )}
    </>
  );
};

export default Blog;

export async function getServerSideProps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/posts`);
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
}
