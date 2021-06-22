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
              _hover={{ color: '#3333FF' }}
              _expanded={{ color: '#3333FF' }}
              placeholder={placeholder}
              size={size}
              variant="unstyled"
              fontSize={fontSize}
              fontWeight={fontWeight}
              onChange={onChange}
              value={value}
              id={name}
              {...rest}
              {...field}
            >
              {options.map((option) => (
                <option key={option.count} value={option.value}>
                  {option.title}
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
