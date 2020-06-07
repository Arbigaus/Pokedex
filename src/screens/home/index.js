import React from 'react';

import { Container, ShowPokeList } from './styles';

import Header from './components/header';
import PokeList from './components/PokeList';

function Home() {
  return (
    <Container>
      <Header />
      <ShowPokeList />
    </Container>
  );
}

export default Home;
