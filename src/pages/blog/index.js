import { useRef, useEffect } from 'react';
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
          <Heading
            ref={titleRef}
            as="h1"
            fontSize={{ base: '48px', sm: '48px', md: '80px', lg: '80px' }}
            textAlign={{ base: 'left', sm: 'left', md: 'center', lg: 'center' }}
            mb="50px"
          >
            Din lumea asigurarilor
          </Heading>
          <Text
            ref={numberRef}
            fontSize="10px"
            w="full"
            textAlign={{ base: 'left', sm: 'left', md: 'center', lg: 'center' }}
          >
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

// export async function getStaticProps({ params }) {
//   const { post } = params

//   const data = await fetch(
//     `${process.env.NEXT_PUBLIC_BASE_URL}/posts?slug=${post}`
//   )
//   const resData = await data.json()

//   const finalData = resData[0]

//   return {
//     props: { finalData },
//     revalidate: 10 //will regenerate page when request comes at every 10 seconds

//   }
// }

// export async function getStaticPaths() {
//   const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/posts`)
//   const posts = await res.json()

//   const paths = posts?.map(({ slug }) => ({
//     params: { post: slug }
//   }))

//   return {
//     paths,
//     fallback: 'blocking'
//   }
// }
