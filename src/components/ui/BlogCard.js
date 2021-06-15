import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import { Flex, Heading, Text, Button } from '@chakra-ui/react';
import Moment from 'react-moment';

const BlogCard = ({ post }) => {
  const { id, name, slug, createdAt, description, image_url, user } = post;
  console.log('post', post);
  const [isHover, setIsHover] = useState(false);
  const router = useRouter();
  const redirectHandler = () => {
    router.replace(`/blog/${slug}`);
  };
  const dateToFormat = '1976-04-19T12:59-0500';
  return (
    <Flex
      onClick={redirectHandler}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      cursor="pointer"
      // m="auto"
      w="900px"
      h="150px"
      direction="row"
      align="center"
      justify="center"
    >
      <Image
        src={
          image_url ? image_url.formats.thumbnail.url : '/images/default.jpg'
        }
        alt="Post thumbnail"
        width={200}
        height={150}
      />
      <Flex
        // bg={isHover ? '#4D4DFF' : 'transparent'}

        w="100%"
        h="150px"
        direction="column"
        align="flex-start"
        justify="flex-start"
        p="20px"
      >
        <Heading
          color={isHover && '#4D4DFF'}
          fontSize="24px"
          textAlign="left"
          mb="10px"
        >
          {name}
        </Heading>
        <Text fontSize="16px" textAlign="left" mb="10px">
          {description}
        </Text>
        <Text fontSize="12px" textAlign="left">
          <Moment
            format="YYYY/MM/DD"
            // fromNow
          >
            {createdAt}
          </Moment>
        </Text>
      </Flex>
    </Flex>
  );
};

export default BlogCard;
