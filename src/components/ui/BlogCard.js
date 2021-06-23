import Image from 'next/image';
import Link from 'next/link';
import { Flex, Heading, Text, Button, Wrap, WrapItem } from '@chakra-ui/react';
import Moment from 'react-moment';
import { FaLongArrowAltRight } from 'react-icons/fa';

const BlogCard = ({ post }) => {
  const { name, slug, createdAt, description, image_url } = post;

  return (
    <Flex
      w="250px"
      h="350px"
      direction="column"
      align="flex-start"
      justify="flex-start"
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
        <Heading
          fontSize="20px"
          textAlign="left"
          m="10px"
          // color={isHover ? '#4D4DFF' : '#0D0D0D'}
        >
          {name ? name : ''}
        </Heading>
        <Text fontSize="16px" textAlign="left" m="10px">
          {description ? description : ''}
        </Text>

        <Link href={`/blog/${slug}`}>
          <a style={{ fontSize: '16px', marginLeft: '10px' }}>
            Citeste articol
            <FaLongArrowAltRight style={{ marginLeft: '10px' }} />
          </a>
        </Link>

        <Text fontSize="12px" textAlign="left" m="10px">
          <Moment format="YYYY/MM/DD">{createdAt}</Moment>
        </Text>
      </Flex>
    </Flex>
  );
};

export default BlogCard;
