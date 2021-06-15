import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PageHead from '../../components/layout/PageHead';
import { useRouter } from 'next/router';

import Link from 'next/link';
import Image from 'next/image';
import Moment from 'react-moment';
import { Flex, Text, Heading, IconButton } from '@chakra-ui/react';
import { FaPencilAlt, FaTimes } from 'react-icons/fa';

const BlogPost = ({ post }) => {
  const { name, image_url, createdAt, text, id } = post;
  const router = useRouter();
  const deleteHandler = async (e) => {
    if (confirm('Are you sure?')) {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/posts/${id}`,
        {
          method: 'DELETE',
        }
      );

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message);
      } else {
        toast.success('Postarea a fost stearsa!');
        router.push('/blog');
      }
    }
  };

  return (
    <>
      <PageHead title={`asigurari de acasa - ${post.name}`} />
      <Flex
        pt="100px"
        w="60%"
        direction="column"
        align="center"
        justify="flex-start"
      >
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        {post?.image_url && (
          <Image
            src={
              image_url
                ? post.image_url.formats.medium.url
                : '/images/default.jpg'
            }
            width={960}
            height={600}
          />
        )}
        <Heading textAlign="center" fontSize="48px" mt="50px">
          {name}
        </Heading>
        <Text fontSize="12px" mb="50px">
          <Moment
            format="YYYY/MM/DD"
            // fromNow
          >
            {createdAt}
          </Moment>
        </Text>
        <Flex
          w="350px"
          h="50px"
          direction="row"
          align="center"
          justify="space-between"
          mb="50px"
        >
          <Flex h="50px" direction="row" align="center" justify="flex-start">
            <Link href={`/blog/edit/${id}`}>
              <a>
                <FaPencilAlt />
              </a>
            </Link>
            <Text>Edit post</Text>
          </Flex>

          <Flex h="50px" direction="row" align="center" justify="center">
            <IconButton size="md" variant="ghost" onClick={deleteHandler}>
              <FaTimes />
            </IconButton>
            <Text ml="10px">Delete post</Text>
          </Flex>
        </Flex>

        <Text fontSize="18px" mb="50px">
          {text}
        </Text>
        <Link href="/blog">
          <a>
            <Text fontSize="24px">{'< '} Back</Text>
          </a>
        </Link>
      </Flex>
    </>
  );
};

export default BlogPost;

export async function getStaticPaths() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/posts`);
  const posts = await res.json();
  const paths = posts.map((post) => ({
    params: {
      slug: post.slug,
    },
  }));
  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/posts?slug=${slug}`
  );
  const posts = await res.json();

  return {
    props: {
      post: posts[0],
      revalidate: 1,
    },
  };
}
