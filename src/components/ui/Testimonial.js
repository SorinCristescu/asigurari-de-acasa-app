import { Flex, Heading, Text, Avatar } from '@chakra-ui/react';

const Testimonial = ({ item }) => {
  const { name, src, text } = item;
  return (
    <Flex
      direction="column"
      width="100%"
      height="450px"
      align="center"
      justify="center"
      px={{ base: '0px', sm: '50px', md: '50px', lg: '50px', xl: '50px' }}
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
