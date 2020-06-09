import React, { useEffect, useContext, useState } from 'react';
import PropTypes from 'prop-types';

import Context from '../../../context';
import { Container, ShowPokeList, LoadingText } from './styles';

import Header from './components/header';
import PokeApi from '../../services/PokeApi';

function Home({ navigation }) {
  const {
    pokemonEntries,
    setPokemonEntries,
    fullPokeList,
    setFullPokeList,
  } = useContext(Context);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (fullPokeList.length < 1 && pokemonEntries.length < 1) {
      PokeApi.getList().then((r) => {
        setPokemonEntries(r);
        setFullPokeList(r);
        setIsLoading(false);
      });
    }
  }, []);

  return (
    <Container>
      <Context.Provider
        value={{
          pokemonEntries,
          setPokemonEntries,
          fullPokeList,
          setFullPokeList,
        }}
      >
        <Header />
      </Context.Provider>
      {!isLoading ? (
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
