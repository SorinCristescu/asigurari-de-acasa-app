import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Select as ChakraSelect, Text } from '@chakra-ui/react';

const Select = ({
  options,
  size,
  isLink,
  width,
  fontSize,
  fontWeight,
  placeholder,
}) => {
  const [link, setLink] = useState('');
  const router = useRouter();
  // useEffect(() => {
  //   router.push(link);
  // }, [link]);

  const handleLink = (e) => {
    setLink(e.target.value);
  };

  return (
    <ChakraSelect
      width={width}
      mx="10px"
      placeholder={placeholder}
      size={size}
      variant="unstyled"
      fontSize={fontSize}
      fontWeight={fontWeight}
      // onClick={handleLink}
      // onChange={handleLink}
    >
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          <Text>{option.title}</Text>
        </option>
      ))}
    </ChakraSelect>
  );
};

export default Select;
