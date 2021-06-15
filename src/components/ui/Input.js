import {
  Input as ChakraInput,
  FormControl,
  FormLabel,
  FormErrorMessage,
} from '@chakra-ui/react';
import { Field } from 'formik';

const Input = (props) => {
  const { label, name, ...rest } = props;
  return (
    <Field name={name}>
      {({ field, form }) => {
        return (
          <FormControl
            isInvalid={form.errors[name] && form.touched[name]}
            mb="20px"
          >
            <FormLabel htmlFor={name}>{label}</FormLabel>
            <ChakraInput id={name} {...rest} {...field} borderRadius="0" />
            <FormErrorMessage>{form.errors[name]}</FormErrorMessage>
          </FormControl>
        );
      }}
    </Field>
  );
};

export default Input;
