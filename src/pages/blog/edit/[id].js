import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PageHead from '../../../components/layout/PageHead';
import { FaImage } from 'react-icons/fa';
import { Formik, Form } from 'formik';
import { useRouter } from 'next/router';
import Image from 'next/image';
import * as Yup from 'yup';
import Input from '../../../components/ui/Input';
import Modal from '../../../components/ui/Modal';
import TextArea from '../../../components/ui/TextArea';
import {
  Button,
  Heading,
  Text,
  Flex,
  Input as ChakraInput,
  FormControl,
  FormLabel,
} from '@chakra-ui/react';

const EditBlogPost = ({ post }) => {
  const [showModal, setShowModal] = useState(false);
  const [image, setImage] = useState(null);
  const router = useRouter();
  const [imagePreview, setImagePreview] = useState(
    post.image_url ? post.image_url.formats.thumbnail.url : null
  );
  const initialValues = {
    name: post.name,
    description: post.description,
    text: post.text,
    // image: ''
  };
  const validationSchema = Yup.object({
    name: Yup.string().required('Required!'),
    description: Yup.string().required('Required!'),
    text: Yup.string().required('Required!'),
  });

  const onSubmit = async (values, onSubmitProps) => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/posts/${post.id}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      }
    );

    if (!res.ok) {
      toast.error('Ceva nu a functionat corect!');
    } else {
      const post = await res.json();
      onSubmitProps.setSubmitting(false);
      onSubmitProps.resetForm();
      toast.success('Postare a fost modificata cu succes!');
      router.push(`/blog/${post.slug}`);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault;
    const formData = new FormData();
    formData.append('files', image);
    formData.append('ref', 'posts');
    formData.append('refId', post.id);
    formData.append('field', 'image');

    console.log('form data', formData);
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/upload`, {
      method: 'POST',
      body: formData,
      headers: { 'Content-Type': 'application/json' },
    });

    if (res.ok) {
      console.log('res ok');
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/posts/${post.id}`
      );
      const data = await res.json();

      setImagePreview(data.image_url.formats.thumbnail.url);
      setShowModal(false);
      toast.success('Postare a fost modificata cu succes!');
    }
  };

  const handleFileChange = (e) => {
    e.preventDefault();
    setImage(e.target.files[0]);
  };

  return (
    <>
      <PageHead titlu="asigurare de acasa - Editeaza postare pe blog" />

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
        <Modal
          show={showModal}
          onClose={() => setShowModal(false)}
          onClick={handleSubmit}
        >
          <Flex
            direction="column"
            w="100%"
            h="100%"
            align="center"
            justify="center"
          >
            <Heading fontSize="24px">Upload foto</Heading>
            <form>
              <FormControl>
                <FormLabel>File</FormLabel>
                <ChakraInput
                  type="file"
                  onChange={handleFileChange}
                  mb="50px"
                />
              </FormControl>
            </form>
          </Flex>
        </Modal>
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
                  Editeaza postarea
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
                Modifica
              </Button>
            </Form>
          )}
        </Formik>
        <Heading fontSize="18px" my="10px">
          Foto postare
        </Heading>
        {imagePreview ? (
          <Image width={170} height={100} src={imagePreview} />
        ) : (
          <div>
            <Text>Nu exista foto </Text>
          </div>
        )}
        <Button
          my="10px"
          w="170px"
          size="md"
          variant="solid"
          borderRadius="0"
          bg="#4D4DFF"
          color="#FFF9F2"
          onClick={() => setShowModal(true)}
        >
          <FaImage />
          <Text ml="10px">Modifica foto</Text>
        </Button>
      </Flex>
    </>
  );
};

export default EditBlogPost;

export async function getServerSideProps({ params: { id } }) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/posts/${id}`);
  const post = await res.json();
  return {
    props: {
      post,
    },
  };
}
