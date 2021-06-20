import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import Input from './Input';
import TextArea from './TextArea';
import Select from './Select';
import { Button, Heading, Text } from '@chakra-ui/react';
import { insurances } from '../../utils/insurances';

const FormContainer = () => {
  const initialValues = {
    name: '',
    email: '',
    phone: '',
    message: '',
    insurance: '',
  };
  const validationSchema = Yup.object({
    name: Yup.string().required('Numele este obligatoriu!'),
    insurance: Yup.string().required('Alege un tip de asigurare dorit!'),
    email: Yup.string()
      .email('Adresa de email nu are formatul corect!')
      .required('Adresa de email este obligatorie!'),
    phone: Yup.string().required('Numarul de telefon este obligatoriu!'),
    message: Yup.string().required('Mesajul este obligatoriu!'),
  });

  const onSubmit = async (values, onSubmitProps) => {
    console.log(values);
    const res = await fetch('/api/mailchimp', {
      method: 'POST',
      body: JSON.stringify(values),
      headers: { 'Content-Type': 'application/json' },
    });

    if (!res.ok) {
      toast.error('Ceva nu a functionat corect!');
    } else {
      onSubmitProps.setSubmitting(false);
      onSubmitProps.resetForm();
      toast.success('Informatia a fost trimisa cu success!');
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({
        values,
        isValid,
        onSubmitProps,
        dirty,
        isSubmitting,
        setSubmitting,
        resetForm,
      }) => (
        <Form style={{ width: '400px' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '20px',
            }}
          >
            <Heading as="h4" size="md">
              Doresc
            </Heading>
            <Select
              options={insurances}
              fontSize="20px"
              fontWeight="bold"
              width="400px"
              name="insurance"
            />
          </div>

          <Input type="text" label="Nume / Denumire firma" name="name" />
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
