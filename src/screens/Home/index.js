import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { Container, ShowPokeList, LoadingText } from './styles';

import Header from './components/header';
import PokeApi from '../../services/PokeApi';

function Home({ navigation }) {
  const [pokemonEntries, setPokemonEntries] = useState([]);

  useEffect(() => {
    PokeApi.getList().then((r) => {
      console.log(r[0]);
      setPokemonEntries(r);
    });
  }, []);

  return (
    <Container>
      <Header />
      {pokemonEntries.length > 0 ? (
        <ShowPokeList navigation={navigation} pokemonEntries={pokemonEntries} />
      ) : (
        <LoadingText>Loading...</LoadingText>
      )}
    </Container>
  );
}

Home.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default Home;
