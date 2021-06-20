import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PageHead from '../../components/layout/PageHead';
import { Formik, Form } from 'formik';
import { useRouter } from 'next/router';
import * as Yup from 'yup';
import Input from '../../components/ui/Input';
import TextArea from '../../components/ui/TextArea';
import { Button, Heading, Text, Flex } from '@chakra-ui/react';

const AddBlogPost = () => {
  const router = useRouter();
  const initialValues = {
    name: '',
    description: '',
    text: '',
    // image: ''
  };
  const validationSchema = Yup.object({
    name: Yup.string().required('Required!'),
    description: Yup.string().required('Required!'),
    text: Yup.string().required('Required!'),
    // image: Yup.string().required('Required!'),
  });

  const onSubmit = async (values, onSubmitProps) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/posts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    });

    if (!res.ok) {
      toast.error('Ceva nu a functionat corect!');
    } else {
      const post = await res.json();
      onSubmitProps.setSubmitting(false);
      onSubmitProps.resetForm();
      toast.success('O noua postare pe blog a fost creata cu succes!');
      router.push(`/blog/${post.slug}`);
    }
  };

  return (
    <>
      <PageHead titlu="asigurare de acasa - Adauga postare pe blog" />

      <Flex
        w="100%"
        pt="150px"
        direction="column"
        align="center"
        justify="center"
      >
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ isValid, onSubmitProps, dirty, isSubmitting }) => (
            <Form style={{ width: '100%' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '20px',
                }}
              >
                <Heading
                  as="h3"
                  size="lg"
                  mb="50px"
                  textAlign="center"
                  w="full"
                >
                  Adauga o postare pe blog
                </Heading>
              </div>
              <Flex
                direction="row"
                w="100%"
                align="center"
                justify="space-between"
              >
                <Input width="400px" type="text" label="Titlu" name="name" />
                <Input
                  width="400px"
                  type="text"
                  label="Descriere"
                  name="description"
                />
              </Flex>

              <TextArea height="40vh" label="Text" name="text" />
              <Button
                w="400px"
                size="lg"
                variant="solid"
                borderRadius="0"
                bg="#4D4DFF"
                color="#FFF9F2"
                // colorScheme="red"
                type="submit"
                disabled={!(isValid && dirty) || isSubmitting}
              >
                Publica
              </Button>
            </Form>
          )}
        </Formik>
      </Flex>
    </>
  );
};

export default AddBlogPost;
