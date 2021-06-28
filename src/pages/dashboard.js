import { useRef, useEffect, useState, useContext } from 'react';
import { parseCookies } from '../utils/cookie';
import { useRouter } from 'next/router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import PageHead from '../components/layout/PageHead';
import {
  FaLongArrowAltRight,
  FaTrashAlt,
  FaPen,
  FaSearch,
  FaTimes,
} from 'react-icons/fa';
import AuthContext from '../context/AuthContext';

import {
  Input,
  InputLeftElement,
  InputGroup,
  Flex,
  Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Tag,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
  Skeleton,
  IconButton,
} from '@chakra-ui/react';
import Moment from 'react-moment';

const Dashboard = ({ clients, token }) => {
  const { user } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => setIsOpen(false);
  const cancelRef = useRef();
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');
  const [clientId, setClientId] = useState(null);

  const router = useRouter();

  const openModal = (id) => {
    setIsOpen(true);
    setClientId(id);
  };

  const closeModal = () => {
    setIsOpen(false);
    setClientId(null);
  };
  const handleDelete = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/customers/${clientId}`,
      {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (res.ok) {
      setIsOpen(false);
      toast.success('Inregistrarea a fost stearsa!');
      router.push('/dashboard');
    } else {
      toast.error('Ceva nu a functionat corect!');
      setIsOpen(false);
    }
  };

  const updateClient = () => {};

  // useEffect(() => {
  //   if (!user) {
  //     router.push('/signin');
  //   }
  //   fetchClients();
  // }, []);

  const handleColorScheme = (type) => {
    if (type === 'Asigurare RCA') {
      return 'green';
    } else if (type === 'Asigurare de locuinta') {
      return 'cyan';
    } else if (type === 'Asigurare CASCO') {
      return 'blue';
    } else if (type === 'Asigurare de viata') {
      return 'orange';
    } else if (type === 'Asigurare de sanatate') {
      return 'teal';
    } else if (type === 'Asigurare de transport') {
      return 'yellow';
    } else if (type === 'Asigurare PAD') {
      return 'facebook';
    } else if (type === 'Asigurare de accidente') {
      return 'red';
    }
  };

  const filteredClients = clients.filter((client) =>
    client.name.toLowerCase().includes(search.toLowerCase())
  );

  if (!user) {
    return (
      <Flex
        py="100px"
        direction="column"
        w="100%"
        minHeight="100vh"
        align="center"
        justify="center"
      >
        <Heading>Acess refuzat!</Heading>
      </Flex>
    );
  }
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
        flexWrap="wrap"
        py="100px"
        direction="column"
        w="100%"
        minHeight="100vh"
        align="flex-start"
        justify="flex-start"
      >
        <Flex w="full" align="center" justify="space-between">
          <Flex
            w="full"
            direction="column"
            w="100%"
            align="flex-start"
            justify="flex-start"
            mb="50px"
          >
            <Heading
              as="h3"
              fontSize={{ base: '32px', sm: '32px', md: '48px', lg: '48px' }}
              textAlign="left"
            >
              Dashboard
            </Heading>
            <Stat>
              <StatLabel fontSize="12px">
                Nr. cereri de oferta inregistrate
              </StatLabel>
              <StatNumber fontSize="18px">{clients.length}</StatNumber>
              <StatHelpText fontSize="12px">
                <Moment format="DD.MM.YYYY">{Date.now()}</Moment>
              </StatHelpText>
            </Stat>
          </Flex>
          <Flex align="center" justify="flex-start">
            <InputGroup width="300px">
              <InputLeftElement
                // pointerEvents="none"
                children={
                  !search ? (
                    <FaSearch />
                  ) : (
                    <FaTimes cursor="pointer" onClick={() => setSearch('')} />
                  )
                }
              />
              <Input
                type="text"
                placeholder="Cautare dupa nume..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </InputGroup>
          </Flex>
        </Flex>

        <Table
          variant="simple"
          // mt="150px"
          size="sm"
        >
          {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
          <Thead>
            <Tr>
              <Th>Nume</Th>
              <Th>Email</Th>
              <Th>Telefon</Th>
              <Th>Tip de asigurare</Th>
              <Th>Mesaj</Th>
              <Th>Trimisa la data de</Th>
              <Th w="50px"></Th>
              <Th w="50px"></Th>
            </Tr>
          </Thead>
          <Tbody overflowY="scroll">
            {filteredClients?.map((client) => (
              <Tr key={client.id}>
                <Td fontSize="12px">
                  {' '}
                  {loading ? <Skeleton height="20px" /> : client.name}
                </Td>
                <Td fontSize="12px">
                  {loading ? <Skeleton height="20px" /> : client.email}
                </Td>
                <Td fontSize="12px">
                  {loading ? <Skeleton height="20px" /> : client.phone}
                </Td>
                <Td fontSize="12px">
                  {loading ? (
                    <Skeleton height="20px" />
                  ) : (
                    <Tag
                      width="160px"
                      height="30px"
                      variant="solid"
                      borderRadius="0"
                      colorScheme={handleColorScheme(client.insurance_type)}
                    >
                      {client.insurance_type}
                    </Tag>
                  )}
                </Td>
                <Td fontSize="12px">
                  {loading ? <Skeleton height="20px" /> : client.message}
                </Td>
                <Td w="50px" fontSize="12px">
                  {' '}
                  {loading ? (
                    <Skeleton height="20px" />
                  ) : (
                    <Moment format="DD.MM.YYYY">{client.created_at}</Moment>
                  )}
                </Td>
                <Td w="50px" fontSize="12px">
                  <IconButton
                    isRound
                    size="md"
                    fontSize="12px"
                    variant="ghost"
                    cursor="pointer"
                    color="#808080"
                    //   onClick={(e) => ()}
                    icon={<FaPen />}
                  />
                </Td>
                <Td w="50px" fontSize="12px">
                  <IconButton
                    isRound
                    size="md"
                    fontSize="12px"
                    variant="ghost"
                    cursor="pointer"
                    color="#808080"
                    onClick={() => openModal(client.id)}
                    icon={<FaTrashAlt />}
                  />
                  <AlertDialog
                    isOpen={isOpen}
                    leastDestructiveRef={cancelRef}
                    onClose={onClose}
                  >
                    <AlertDialogOverlay>
                      <AlertDialogContent>
                        <AlertDialogHeader fontSize="lg" fontWeight="bold">
                          Sterge Cerere
                        </AlertDialogHeader>

                        <AlertDialogBody>
                          Esti sigur? Actiunea este ireversibila! Inregistrarea
                          va fi stearsa din baza de date fara a putea recupera
                          informatia ulterior.
                        </AlertDialogBody>

                        <AlertDialogFooter>
                          <Button ref={cancelRef} onClick={closeModal}>
                            Renunta
                          </Button>
                          <Button
                            colorScheme="red"
                            onClick={() => handleDelete(client.id)}
                            ml={3}
                          >
                            Sterge
                          </Button>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialogOverlay>
                  </AlertDialog>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Flex>
    </>
  );
};

export default Dashboard;

export async function getServerSideProps({ req }) {
  const { token } = parseCookies(req);
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/customers`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const clients = await res.json();

  return {
    props: {
      clients,
      token,
    },
  };
}
