import { useRouter } from 'next/router';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Input from './Input';
import { Button, Flex } from '@chakra-ui/react';

const SigninForm = ({ login }) => {
  const router = useRouter();

  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Adresa de email nu are formatul corect!')
      .required('Adresa de email este obligatorie!'),
    password: Yup.string().required('Parola este obligatorie!'),
  });

  const onSubmit = async (values, onSubmitProps) => {
    login(values);
    // const res = await fetch('/api/mailchimp', {
    //   method: 'POST',
    //   body: JSON.stringify(values),
    //   headers: { 'Content-Type': 'application/json' },
    // });
    // if (!res.ok) {
    //   toast.error('Ceva nu a functionat corect!');
    // } else {
    //   onSubmitProps.setSubmitting(false);
    //   onSubmitProps.resetForm();
    //   setConsent(false);
    //   toast.success('Informatia a fost trimisa cu success!');
    //   router.push('/success');
    // }
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({
        errors,
        values,
        isValid,
        onSubmitProps,
        dirty,
        isSubmitting,
        setSubmitting,
        resetForm,
        handleChange,
      }) => {
        return (
          <Form>
            <Input w="300px" type="email" label="Email" name="email" />
            <Input w="300px" type="password" label="Password" name="password" />
            <Button
              isLoading={isSubmitting}
              loadingText="Se trimite!"
              w="300px"
              size="lg"
              variant="solid"
              borderRadius="0"
              bg="#4D4DFF"
              _hover={{ bg: '#3333FF', color: '#FFF9F2' }}
              color="#FFF9F2"
              type="submit"
              disabled={!(isValid && dirty) || isSubmitting}
              mt="10px"
            >
              Login
            </Button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default SigninForm;
