import { Select as ChakraSelect, Text, FormControl } from '@chakra-ui/react';
import { Field } from 'formik';

const Select = ({
  options,
  size,
  width,
  fontSize,
  fontWeight,
  placeholder,
  onChange,
  name,
  value,
  ...rest
}) => {
  return (
    <Field name={name}>
      {({ field, form }) => {
        return (
          <FormControl isInvalid={form.errors[name] && form.touched[name]}>
            <ChakraSelect
              width={width}
              mx="10px"
              placeholder={placeholder}
              size={size}
              variant="unstyled"
              fontSize={fontSize}
              fontWeight={fontWeight}
              // onClick={handleLink}
              onChange={isLink ? handleLink : onChange}
              value={value}
              id={name}
              {...rest}
              {...field}
            >
              {options.map((option, index) => (
                <option key={index} value={option.value}>
                  <Text>{option.title}</Text>
                </option>
              ))}
            </ChakraSelect>
          </FormControl>
        );
      }}
    </Field>
  );
};

export default Select;
