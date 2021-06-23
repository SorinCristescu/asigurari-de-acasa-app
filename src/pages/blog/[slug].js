import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PageHead from '../../components/layout/PageHead';
import { useRouter } from 'next/router';
import Markdown from 'markdown-to-jsx';

import MailchimpForm from '../../components/ui/MailchimpForm';

import Link from 'next/link';
import Image from 'next/image';
import Moment from 'react-moment';
import {
  Flex,
  Text,
  Heading,
  IconButton,
  Center,
  UnorderedList,
  ListItem,
} from '@chakra-ui/react';
import { FaPencilAlt, FaTimes, FaLongArrowAltLeft } from 'react-icons/fa';

const Header = ({ children, ...props }) => (
  <Heading my="20px" {...props}>
    {children}
  </Heading>
);

const Paragraph = ({ children, ...props }) => (
  <Text my="20px" {...props}>
    {children}
  </Text>
);

const List = ({ children, ...props }) => (
  <UnorderedList {...props}>{children}</UnorderedList>
);

const Li = ({ children, ...props }) => (
  <ListItem my="10px" fontSize="16px" fontWeight="semibold" {...props}>
    {children}
  </ListItem>
);

const BlogPost = ({ post }) => {
  const router = useRouter();
  console.log('post', post);
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
        w={{ base: '100%', sm: '100%', md: '100%', lg: '60%' }}
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

        <Heading
          textAlign={{ base: 'left', sm: 'left', md: 'center', lg: 'center' }}
          fontSize={{ base: '32px', sm: '32px', md: '48px', lg: '48px' }}
          mt="50px"
        >
          {post.name ? post.name : ''}
        </Heading>
        <Text
          w="full"
          fontSize="12px"
          my="30px"
          textAlign={{ base: 'left', sm: 'left', md: 'center', lg: 'center' }}
        >
          <Moment format="YYYY/MM/DD">{post.createdAt}</Moment>
        </Text>
        {/* <Flex
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
        </Flex> */}
        <Flex
          direction="column"
          // align="flex-start"
          // justify="space-between"
          textAlign="left"
        >
          <Markdown
            options={{
              forceBlock: true,
              overrides: {
                h1: {
                  component: Header,
                  props: {
                    className: 'foo',
                  },
                },
                p: {
                  component: Paragraph,
                  props: {
                    className: 'foo',
                  },
                },
                li: {
                  component: Li,
                  props: {
                    className: 'foo',
                  },
                },
                ul: {
                  component: List,
                  props: {
                    className: 'foo',
                  },
                },
              },
            }}
          >
            {post.text ? post.text : ''}
          </Markdown>
        </Flex>
        <Center w="100%" h="100px">
          <Link href="/blog">
            <a style={{ fontSize: '16px' }}>
              <FaLongArrowAltLeft style={{ marginRight: '10px' }} /> Vezi toate
              postarile
            </a>
          </Link>
        </Center>

        <MailchimpForm />
      </Flex>
    </>
  );
};

export default BlogPost;

export async function getServerSideProps({ query: { slug } }) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/posts?slug=${slug}`
  );
  const posts = await res.json();

  return {
    props: {
      post: posts[0],
    },
  };
}
