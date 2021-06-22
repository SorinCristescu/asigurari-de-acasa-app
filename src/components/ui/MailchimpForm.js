import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import Input from './Input';
import TextArea from './TextArea';
import Select from './Select';
import { Button, Heading, Box } from '@chakra-ui/react';
import { insurances } from '../../utils/insurances';
import { FaPaperPlane } from 'react-icons/fa';

const FormContainer = () => {
  const initialValues = {
    name: '',
    email: '',
    phone: '',
    message: '',
    insuranceType: '',
  };
  const validationSchema = Yup.object({
    name: Yup.string().required('Numele este obligatoriu!'),
    // insurance: Yup.string().required('Alege un tip de asigurare dorit!'),
    email: Yup.string()
      .email('Adresa de email nu are formatul corect!')
      .required('Adresa de email este obligatorie!'),
    phone: Yup.string().required('Numarul de telefon este obligatoriu!'),
    message: Yup.string(),
    insuranceType: Yup.string().required(
      'Tipul de asigurare este obligatorie!'
    ),
  });

  const onSubmit = async (values, onSubmitProps) => {
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
    <Box w={{ base: '100%', sm: '70%', md: '50%', lg: '40%' }}>
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
          handleChange,
        }) => (
          <Form>
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
                width="full"
                cursor="pointer"
                name="insuranceType"
                value={values.insuranceType}
                onChange={handleChange}
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
              _hover={{ bg: '#3333FF', color: '#FFF9F2' }}
              // _focus={{ bg: '#4D4DFF' }}
              color="#FFF9F2"
              // colorScheme="red"
              type="submit"
              disabled={!(isValid && dirty) || isSubmitting}
            >
              Trimite <FaPaperPlane />
            </Button>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default FormContainer;
