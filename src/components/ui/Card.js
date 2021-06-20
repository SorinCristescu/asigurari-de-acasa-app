import { useRouter } from 'next/router';
import { Flex, Heading, Text, Button } from '@chakra-ui/react';

const Card = ({
  item,
  headingSize,
  textSize,
  width,
  height,
  padding,
  borderRadius,
  ...rest
}) => {
  const { count, title, description, href } = item;
  const router = useRouter();

  const redirectHandler = () => {
    if (href) {
      router.replace(href);
    }
  };

  return (
    <Flex
      w={width}
      h={height}
      // bg="#4D4DFF"
      // color="#FFF9F2"
      direction="column"
      align="flex-start"
      justify="flex-start"
      p={padding}
      borderRadius={borderRadius}
      boxShadow="lg"
      my="10px"
      {...rest}
    >
      <Text>{count}</Text>
      <Heading textAlign="left" fontSize={headingSize} mt="20px" mb="40px">
        {title}
      </Heading>
      <Text textAlign="left" fontSize={textSize} mb="20px">
        {description}
      </Text>
      {href && (
        <Button variant="link" onClick={redirectHandler}>
          Afla mai mult
        </Button>
      )}
    </Flex>
  );
};

export default Card;
