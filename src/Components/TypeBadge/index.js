import React from 'react';
import PropTypes from 'prop-types';

import { Container, Icon, Text } from './styles';
import Colors from '../../utils/Colors';
import Icons from '../../utils/Icons';

const TypeBadge = ({ type }) => {
  return (
    <Container color={Colors.type[type]}>
      {Icons.types[type] && <Icon>{Icons.types[type].white}</Icon>}
      <Text>{type}</Text>
    </Container>
  );
};

TypeBadge.propTypes = {
  type: PropTypes.string.isRequired,
};

export default TypeBadge;
