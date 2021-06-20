import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import { Flex, Heading, Text, Button, Wrap, WrapItem } from '@chakra-ui/react';
import Moment from 'react-moment';

const BlogCard = ({ post }) => {
  const { name, slug, createdAt, description, image_url } = post;
  const [isHover, setIsHover] = useState(false);
  const router = useRouter();
  const redirectHandler = () => {
    router.replace(`/blog/${slug}`);
  };

  return (
    <Flex
      onClick={redirectHandler}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      cursor="pointer"
      // m="auto"
      w="250px"
      h="350px"
      direction="column"
      align="flex-start"
      justify="flex-start"
      bg={isHover && '#4D4DFF'}
      color={isHover && '#FFFFFF'}
      boxShadow="lg"
    >
      <Image
        src={
          image_url ? image_url.formats.thumbnail.url : '/images/default.jpg'
        }
        alt="Post thumbnail"
        width={250}
        height={150}
      />
      <Flex
        w="100%"
        h="200px"
        direction="column"
        align="flex-start"
        justify="space-between"
      >
        <Heading fontSize="20px" textAlign="left" m="10px">
          {name ? name : ''}
        </Heading>
        <Text fontSize="16px" textAlign="left" m="10px">
          {description ? description : ''}
        </Text>
        <Text fontSize="12px" textAlign="left" m="10px">
          <Moment format="YYYY/MM/DD">{createdAt ? createdAt : ''}</Moment>
        </Text>
      </Flex>
    </Flex>
  );
};

export default BlogCard;
