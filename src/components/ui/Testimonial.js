import { Flex, Heading, Text, Avatar } from '@chakra-ui/react';

const Testimonial = ({ testimonial }) => {
  const { name, src, text } = testimonial;
  return (
    <Flex
      direction="column"
      width="100%"
      height="450px"
      align="center"
      justify="center"
      px="100px"
    >
      <Avatar size="2xl" name={name} src={src} />
      <Text textAlign="center" my="30px">
        {text}{' '}
      </Text>
      <Heading fontSize="24px">{name}</Heading>
    </Flex>
  );
};

export default Testimonial;
