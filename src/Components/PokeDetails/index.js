import React from 'react';
import PropTypes from 'prop-types';

import { Container, BadgeArea, Badge, PokeName, PokeNumber } from './styles';

import Helpers from '../../Helpers';

const PokeDetails = ({ pokeData }) => {
  return (
    <Container>
      <PokeNumber>{`#${Helpers.formatNumber(pokeData.number)}`}</PokeNumber>
      <PokeName>{pokeData.name}</PokeName>
      <BadgeArea>
        {pokeData.types.map((type) => (
          <Badge key={`${pokeData.name}-${type}`} type={type} />
        ))}
      </BadgeArea>
    </Container>
  );
};

PokeDetails.propTypes = {
  pokeData: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default PokeDetails;
