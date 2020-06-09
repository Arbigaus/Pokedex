import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';

import Context from '../../context';
import { Container, ShowPokeList, LoadingText } from './styles';

import Header from './components/header';
import PokeApi from '../../services/PokeApi';

function Home({ navigation }) {
  const { pokemonEntries, setPokemonEntries } = useContext(Context);

  useEffect(() => {
    if (pokemonEntries.length < 1) {
      PokeApi.getList().then((r) => {
        setPokemonEntries(r);
      });
    }
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
