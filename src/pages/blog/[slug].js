import { useRef, useEffect } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PageHead from '../../components/layout/PageHead';
import { useRouter } from 'next/router';
import ReactMarkdown from 'react-markdown';
import MailchimpForm from '../../components/ui/MailchimpForm';

import Link from 'next/link';
import Image from 'next/image';
import Moment from 'react-moment';
import { Flex, Text, Heading, IconButton, Center } from '@chakra-ui/react';
import { FaPencilAlt, FaTimes } from 'react-icons/fa';

const BlogPost = ({ post }) => {
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
      <PageHead
        title={`asigurari de acasa - ${post.name ? post.name : ''}`}
        description={post.description ? post.description : ''}
        keywords={post.keywords ? post.keywords : ''}
      />
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
        <Image
          src={
            post.image_url
              ? post.image_url.formats.medium.url
              : '/images/default.jpg'
          }
          width={960}
          height={600}
        />

        <Heading textAlign="center" fontSize="48px" mt="50px">
          {post.name ? post.name : ''}
        </Heading>
        <Text fontSize="12px" mb="50px">
          <Moment format="YYYY/MM/DD">
            {post.createdAt ? post.createdAt : ''}
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
            <Link href={`/blog/edit/${post.id}`}>
              <a>
                <FaPencilAlt />
              </a>
            </Link>
            <Text>Editeaza</Text>
          </Flex>

          <Flex h="50px" direction="row" align="center" justify="center">
            <IconButton size="md" variant="ghost" onClick={deleteHandler}>
              <FaTimes />
            </IconButton>
            <Text ml="10px">Sterge</Text>
          </Flex>
        </Flex>
        <Flex
          direction="column"
          // align="flex-start"
          // justify="space-between"
          textAlign="left"
        >
          <ReactMarkdown>{post.text ? post.text : ''}</ReactMarkdown>
        </Flex>
        <Center w="100%" h="100px">
          <Link href="/blog">
            <a>
              <Text fontSize="24px">{'< '} Back</Text>
            </a>
          </Link>
        </Center>
        <Center w="100%" h="100vh">
          <MailchimpForm />
        </Center>
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
