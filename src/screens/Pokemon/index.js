import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import PokeApi from '../../services/PokeApi';

import { Container, PokeArea, Header, Stats } from './styles';
import Colors from '../../Utils/Colors';

const Pokemon = ({ navigation }) => {
  const { pokeData, goBack } = navigation.state.params;
  const color = Colors.backgroundType[pokeData.types[0]];

  const [pokeInfo, setPokeInfo] = useState({});

  useEffect(() => {
    PokeApi.getPokeDetails(pokeData.number).then((r) => {
      setPokeInfo(r);
    });
  }, []);

  return (
    <Container color={color}>
      <PokeArea color={color}>
        <Header backKey={goBack} navigation={navigation} pokeData={pokeData} />
        <Stats pokeData={pokeInfo} />
      </PokeArea>
    </Container>
  );
};

Pokemon.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default Pokemon;
