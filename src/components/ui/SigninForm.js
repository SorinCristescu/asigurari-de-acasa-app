import { useRouter } from 'next/router';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Input from './Input';
import { Button, Flex } from '@chakra-ui/react';

const SigninForm = () => {
  const router = useRouter();

  const initialValues = {
    name: '',
    password: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Numele este obligatoriu!'),
    password: Yup.string().required('Parola este obligatorie!'),
  });

  const onSubmit = async (values, onSubmitProps) => {
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
            <Input type="text" label="Nume" name="name" />
            <Input type="password" label="Password" name="password" />
            <Button
              isLoading={isSubmitting}
              loadingText="Se trimite!"
              w="full"
              size="lg"
              variant="solid"
              borderRadius="0"
              bg="#4D4DFF"
              _hover={{ bg: '#3333FF', color: '#FFF9F2' }}
              color="#FFF9F2"
              type="submit"
              disabled={!(isValid && dirty && consent) || isSubmitting}
              //   leftIcon={<FaPaperPlane />}
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
