import Link from 'next/link';
import { Flex, Heading, Text, IconButton } from '@chakra-ui/react';
import { FaLongArrowAltRight } from 'react-icons/fa';
const Card = ({
  item,
  headingSize,
  textSize,
  width,
  height,
  paddingRight,
  paddingLeft,
  borderRadius,
  ...rest
}) => {
  const { count, title, description, href, isShadow } = item;

  return (
    <Flex
      w={width}
      h={height}
      direction="column"
      align="flex-start"
      justify="flex-start"
      pr={paddingRight}
      pl={paddingLeft}
      borderRadius={borderRadius}
      boxShadow={isShadow ? 'lg' : 'none'}
      my="10px"
      {...rest}
    >
      <Text fontWeight="bold">{count}</Text>
      <Heading textAlign="left" fontSize={headingSize} mt="20px" mb="40px">
        {title}
      </Heading>
      <Text textAlign="left" fontSize={textSize} mb="20px">
        {description}
      </Text>
      {href && (
        <Link href={href}>
          <a>
            Afla mai mult <FaLongArrowAltRight style={{ marginLeft: '15px' }} />
          </a>
        </Link>
      )}
    </Flex>
  );
};

export default Card;
