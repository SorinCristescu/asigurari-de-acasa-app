import React, { useRef } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import Input from './Input';
import TextArea from './TextArea';
import Select from './Select';

import SlideY from '../../utils/animation/slideY';

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
  const headingFormRef = useRef(null);
  const select = useRef(null);
  const nameInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const phoneInputRef = useRef(null);
  const messageInputRef = useRef(null);
  const consentInputRef = useRef(null);
  const buttonRef = useRef(null);

  const router = useRouter();
  let { pathname } = router;
  const [consent, setConsent] = React.useState(false);

  const createInitialInsuranceType = () => {
    const initialInsuranceType = insurances
      .filter((insurance) => insurance.href === pathname)
      .map((insurance) => insurance.value);

    if (pathname === '/' || pathname === '/blog' || pathname === '/despre') {
      return insurances[0].value;
    } else {
      return initialInsuranceType;
    }
  };

  const initialValues = {
    name: '',
    email: '',
    phone: '',
    message: '',
    insuranceType: createInitialInsuranceType(),
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
      router.push('/success');
    }
  };

  const handleConsent = (e) => {
    setConsent(!consent);
  };

  return (
    <Flex
      id="form"
      pt="100px"
      direction="column"
      w="100%"
      align="center"
      justify="center"
    >
      <SlideY
        componentRef={headingFormRef}
        id="headingForm"
        start="top 80%"
        end="+=100"
        markers={false}
      >
        <Heading
          as="h2"
          fontSize={{ base: '32px', sm: '32px', md: '32px', lg: '32px' }}
          noOfLines={6}
          w={{ base: '100%', sm: '100%', md: '60%', lg: '60%' }}
          mb="30px"
          textAlign={{ base: 'left', sm: 'left', md: 'center', lg: 'center' }}
        >
          Solicita oferta pentru tipul de asigurare dorit.
        </Heading>
      </SlideY>
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
                <SlideY
                  componentRef={select}
                  id="select"
                  start="top 80%"
                  end="+=100"
                >
                  <div
                    style={{
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '10px',
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
                </SlideY>
                <SlideY
                  componentRef={nameInputRef}
                  id="name"
                  start="top 80%"
                  end="+=100"
                >
                  <Input
                    type="text"
                    label="Nume Prenume / Denumire firma"
                    name="name"
                  />
                </SlideY>
                <SlideY
                  componentRef={emailInputRef}
                  id="email"
                  start="top 80%"
                  end="+=100"
                >
                  <Input type="email" label="Email" name="email" />
                </SlideY>
                <SlideY
                  componentRef={phoneInputRef}
                  id="phone"
                  start="top 80%"
                  end="+=100"
                >
                  <Input type="phone" label="Telefon" name="phone" />
                </SlideY>
                <SlideY
                  componentRef={messageInputRef}
                  id="message"
                  start="top 80%"
                  end="+=100"
                  markers={false}
                >
                  <TextArea label="Mesaj" name="message" />
                </SlideY>
                <SlideY
                  componentRef={consentInputRef}
                  id="consent"
                  start="top 80%"
                  end="+=100"
                >
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
                      mt="0px"
                      mb="0px"
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
                </SlideY>
                <SlideY
                  componentRef={buttonRef}
                  id="button"
                  start="top 80%"
                  end="+=100"
                >
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
                    leftIcon={<FaPaperPlane />}
                  >
                    Trimite
                  </Button>
                </SlideY>
              </Form>
            );
          }}
        </Formik>
      </Box>
    </Flex>
  );
};

export default FormContainer;
