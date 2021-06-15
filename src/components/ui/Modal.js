import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import {
  Button,
  Modal as ChakraModal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/react';

const Modal = ({ show, onClose, children, title, onClick }) => {
  //   const { isOpen, onOpen, onClose } = useDisclosure();
  const [isBrowser, setIsBrowser] = useState(false);
  useEffect(() => setIsBrowser(true));

  const handleClose = (e) => {
    e.preventDefault();
    onClose();
  };
  const modalContent = show ? (
    <ChakraModal isOpen={show} onClose={onClose}>
      <ModalOverlay />
      <ModalContent h="400px" bg="#262626" color="#FFF9F2" borderRadius="0">
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{children}</ModalBody>

        <ModalFooter>
          <Button
            mr={3}
            w="182px"
            h="50px"
            variant="ghost"
            size="lg"
            color="#FFF9F2"
            borderRadius="0"
            fontSize="18px"
            onClick={handleClose}
          >
            Close
          </Button>
          <Button
            mr={3}
            w="182px"
            h="50px"
            variant="solid"
            size="lg"
            bg="#4D4DFF"
            color="#FFF9F2"
            borderRadius="0"
            fontSize="18px"
            onClick={onClick}
          >
            Trimite
          </Button>
        </ModalFooter>
      </ModalContent>
    </ChakraModal>
  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById('modal-root')
    );
  } else {
    return null;
  }
};

export default Modal;
