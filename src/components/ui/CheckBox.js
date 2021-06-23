import { Checkbox, FormControl, FormErrorMessage } from '@chakra-ui/react';
import { Field } from 'formik';

const CheckBox = (props) => {
  const { children, name, ...rest } = props;
  return (
    <Field name={name}>
      {({ field, form }) => {
        return (
          <FormControl
            isInvalid={form.errors[name] && form.touched[name]}
            mb="20px"
          >
            <Checkbox
              id={name}
              {...rest}
              {...field}
              borderRadius="0"
              colorScheme="facebook"
              spacing={5}
              size="lg"
              mt="10px"
              mb="30px"
              fontSize="14px"
            >
              {children}
            </Checkbox>
            <FormErrorMessage>{form.errors[name]}</FormErrorMessage>
          </FormControl>
        );
      }}
    </Field>
  );
};

export default CheckBox;
