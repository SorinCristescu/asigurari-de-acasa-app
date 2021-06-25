import { useRef, useEffect, useContext } from 'react';
import gsap from 'gsap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router';
import PageHead from '../components/layout/PageHead';
import { Flex, Text, Heading, Box, Wrap, WrapItem } from '@chakra-ui/react';
import SigninForm from '../components/ui/SigninForm';
import AuthContext from '../context/AuthContext';

const Signin = () => {
  const router = useRouter();
  const { login, error } = useContext(AuthContext);

  useEffect(() => error && toast.error(error));
  return (
    <>
      <PageHead title="asigurari de acasa - Despre noi" />
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
      <Flex
        py="100px"
        direction="column"
        w="100%"
        h="100vh"
        align="center"
        justify="center"
      >
        <Heading
          as="h3"
          mb="30px"
          fontSize={{ base: '32px', sm: '32px', md: '48px', lg: '48px' }}
        >
          Login
        </Heading>
        <SigninForm login={login} />
      </Flex>
    </>
  );
};

export default Signin;
