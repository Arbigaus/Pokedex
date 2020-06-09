import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import PokeApi from '../../services/PokeApi';

import { Container, PokeArea, Header, Stats } from './styles';
import Colors from '../../Utils/Colors';
import Context from '../../../context';

const Pokemon = ({ navigation }) => {
  const { pokeData } = useContext(Context);
  const [pokeInfo, setPokeInfo] = useState({});

  const color = Colors.backgroundType[pokeData.types[0]];

  useEffect(() => {
    PokeApi.getPokeDetails(pokeData.number).then((r) => {
      setPokeInfo(r);
    });
  }, []);

  return (
    <Container color={color}>
      <PokeArea color={color}>
        <Header navigation={navigation} pokeData={pokeData} />
        <Stats pokeData={pokeInfo} />
      </PokeArea>
    </Container>
  );
};

Pokemon.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default Pokemon;
