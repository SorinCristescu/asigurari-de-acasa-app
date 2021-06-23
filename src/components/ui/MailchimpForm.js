import React from 'react';
import Link from 'next/link';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import Input from './Input';
import TextArea from './TextArea';
import Select from './Select';
import CheckBox from './CheckBox';
import {
  Button,
  Heading,
  Box,
  Flex,
  Text,
  Checkbox,
  FormControl,
} from '@chakra-ui/react';
import { insurances } from '../../utils/insurances';
import { FaPaperPlane } from 'react-icons/fa';

const FormContainer = () => {
  const [consent, setConsent] = React.useState(false);
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
      setConsent(false);
      toast.success('Informatia a fost trimisa cu success!');
    }
  };

  const handleConsent = (e) => {
    setConsent(!consent);
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
                <FormControl
                  isInvalid={errors.consent && form.touched.consent}
                  mb="20px"
                >
                  <Checkbox
                    name="consent"
                    borderRadius="0"
                    colorScheme="facebook"
                    spacing={5}
                    size="lg"
                    mt="10px"
                    mb="30px"
                    fontSize="14px"
                    isChecked={consent}
                    onChange={handleConsent}
                  >
                    <Flex display="inline-block">
                      <Text fontSize="14px">
                        Bifand aceasta caseta, accept termenii si conditiile
                        privind prelucrarea datelor cu caracter personal din
                      </Text>
                      <span>
                        <Link href="/politica-de-confidentialitate">
                          <a style={{ fontSize: '14px' }}>
                            Politica de Confidentialitate
                          </a>
                        </Link>
                      </span>
                    </Flex>
                  </Checkbox>
                </FormControl>

                <Button
                  isLoading={isSubmitting}
                  loadingText="Se trimite!"
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
                  disabled={!(isValid && dirty && consent) || isSubmitting}
                  leftIcon={<FaPaperPlane />}
                >
                  Trimite
                </Button>
              </Form>
            );
          }}
        </Formik>
      </Box>
    </Flex>
  );
};

export default FormContainer;
