import {
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
} from '@chakra-ui/react';
import { Field } from 'formik';

export default (props) => {
  const { label, name, ...rest } = props;
  return (
    <Field name={name}>
      {({ field, form }) => {
        return (
          <FormControl
            isValid={form.errors[name] && form.touched[name]}
            mb="20px"
          >
            <FormLabel ftmlFor={name}>{label}</FormLabel>
            <Input id={name} {...rest} {...field} borderRadius="0" />
            <FormErrorMessage>{form.errors[name]}</FormErrorMessage>
          </FormControl>
        );
      }}
    </Field>
  );
};
