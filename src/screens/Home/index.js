import React from 'react';
import PropTypes from 'prop-types';

import { Container, ShowPokeList } from './styles';

import Header from './components/header';

function Home({ navigation }) {
  return (
    <Container>
      <Header />
      <ShowPokeList navigation={navigation} />
    </Container>
  );
}

Home.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default Home;
