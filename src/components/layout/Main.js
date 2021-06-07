import { Stack } from '@chakra-ui/react';
import Container from '../ui/Container';

const Main = (props) => (
  <Container minHeight="100vh">{props.children}</Container>
);

export default Main;
