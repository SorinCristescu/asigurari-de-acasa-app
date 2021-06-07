import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Input from './Input';
import TextArea from './TextArea';
import { Button, Heading, Text } from '@chakra-ui/react';

const options = [
  {
    value: 'first',
    label: 'First option',
  },
  {
    value: 'second',
    label: 'Second option',
  },
];

const FormContainer = () => {
  const initialValues = {
    name: '',
    email: '',
    phone: '',
    message: '',
  };
  const validationSchema = Yup.object({
    name: Yup.string().required('Required!'),
    email: Yup.string()
      .email('Adresa de email nu are formatul corect')
      .required('Required!'),
    phone: Yup.string().required('Required!'),
    message: Yup.string().required('Required!'),
  });

  const onSubmit = (values, onSubmitProps) => {
    console.log(values);

    // await fetch('/api/auth/signup', {
    //     method: 'POST',
    //     body: JSON.stringify({
    //       email: values.email,
    //       password: values.password,
    //     }),
    //     headers: { 'Content-Type': 'application/json' },
    //   });
    onSubmitProps.setSubmitting(false);
    onSubmitProps.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ isValid, onSubmitProps, dirty, isSubmitting }) => (
        <Form style={{ width: '400px' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '20px',
            }}
          >
            <Heading as="h3" size="lg">
              Doresc asigurare
            </Heading>
            <Heading as="h3" size="lg" ml="5px">
              de locuinta
            </Heading>
          </div>

          <Input type="text" label="Nume" name="name" />
          <Input type="email" label="Email" name="email" />
          <Input type="phone" label="Telefon" name="phone" />
          <TextArea label="Mesaj" name="message" />
          <Button
            w="full"
            size="lg"
            variant="solid"
            borderRadius="0"
            bg="#4D4DFF"
            color="#FFF9F2"
            // colorScheme="red"
            type="submit"
            disabled={!(isValid && dirty) || isSubmitting}
          >
            Trimite
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default FormContainer;
