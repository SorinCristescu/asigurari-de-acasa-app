import { useState } from 'react';
import {
  Textarea,
  FormControl,
  FormLabel,
  FormErrorMessage,
} from '@chakra-ui/react';
import { Field } from 'formik';

const TextArea = ({ placeholder, label, name, ...rest }) => {
  let [value, setValue] = useState('');

  let handleInputChange = (e) => {
    let inputValue = e.target.value;
    setValue(inputValue);
  };

  return (
    <Field name={name}>
      {({ field, form }) => {
        return (
          <FormControl
            isInvalid={form.errors[name] && form.touched[name]}
            mb="20px"
          >
            <FormLabel fontWeight="bold" fontSize="14px" htmlFor={name}>
              {label}
            </FormLabel>
            <Textarea
              id={name}
              placeholder={placeholder}
              onChange={handleInputChange}
              borderRadius="0"
              {...rest}
              {...field}
            />
            <FormErrorMessage>{form.errors[name]}</FormErrorMessage>
          </FormControl>
        );
      }}
    </Field>
  );
};

export default TextArea;
