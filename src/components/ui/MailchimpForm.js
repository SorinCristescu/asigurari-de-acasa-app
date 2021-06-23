import React from 'react';
import Link from 'next/link';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import Input from './Input';
import TextArea from './TextArea';
import Select from './Select';
import CheckBox from './CheckBox';
import { Button, Heading, Box, Flex, Text } from '@chakra-ui/react';
import { insurances } from '../../utils/insurances';
import { FaPaperPlane } from 'react-icons/fa';

const FormContainer = () => {
  const [checked, setChecked] = React.useState(false);
  const initialValues = {
    name: '',
    email: '',
    phone: '',
    message: '',
    insuranceType: '',
    consent: checked,
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
    consent: Yup.boolean().isValid(
      true,
      'Consimtamantul pentru politica de confidentialitate este obligatoriu!'
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
    <Flex
      pt="100px"
      direction="column"
      w="100%"
      align="center"
      justify="center"
    >
      <Heading
        as="h2"
        fontSize={{ base: '32px', sm: '32px', md: '48px', lg: '48px' }}
        noOfLines={6}
        w={{ base: '100%', sm: '100%', md: '60%', lg: '60%' }}
        mb="50px"
        textAlign={{ base: 'left', sm: 'left', md: 'center', lg: 'center' }}
      >
        Solicita oferta pentru tipul de asigurare dorit.
      </Heading>
      <Box w={{ base: '100%', sm: '70%', md: '50%', lg: '40%' }} mb="100px">
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
              <CheckBox
                isChecked={checked}
                onChange={() => setChecked(!checked)}
                borderRadius="0"
                name="consent"
                value={checked}
              >
                Am luat la cunostiinta despre
                <Link href="/politica-de-confidentialitate">
                  <a>Politica de Confidentialitate</a>
                </Link>
              </CheckBox>
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
                rightIcon={<FaPaperPlane />}
              >
                Trimite
              </Button>
            </Form>
          )}
        </Formik>
      </Box>
    </Flex>
  );
};

export default FormContainer;
