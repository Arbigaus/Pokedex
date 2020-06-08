import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { Container, PokeArea, Header, Stats, Text } from './styles';
import Colors from '../../Utils/Colors';

const Pokemon = ({ navigation }) => {
  const { pokeData, goBack } = navigation.state.params;

  const color = Colors.backgroundType[pokeData.types[0]];

  return (
    <Container color={color}>
      <PokeArea color={color}>
        <Header backKey={goBack} navigation={navigation} pokeData={pokeData} />
        <Stats />
      </PokeArea>
    </Container>
  );
};

Pokemon.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default Pokemon;
