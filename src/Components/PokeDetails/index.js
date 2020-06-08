import React from 'react';
import PropTypes from 'prop-types';

import { Container, BadgeArea, Badge, PokeName, PokeNumber } from './styles';

import Helpers from '../../Helpers';

const PokeDetails = ({ pokeData }) => {
  const { name, number, types } = pokeData;
  return (
    <Container>
      <PokeNumber>{`#${Helpers.formatNumber(number)}`}</PokeNumber>
      <PokeName>{pokeData.name}</PokeName>
      <BadgeArea>
        {types.map((type) => (
          <Badge key={`${name}-${type}`} type={type} />
        ))}
      </BadgeArea>
    </Container>
  );
};

PokeDetails.propTypes = {
  pokeData: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default PokeDetails;
