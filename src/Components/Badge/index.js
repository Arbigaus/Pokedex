import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { Container, Icon, Text } from './styles';
import Colors from '../../Utils/Colors';
import Icons from '../../Utils/Icons';

const Badge = ({ type }) => {
  return (
    <Container color={Colors.type[type]}>
      <Icon>{Icons.types[type].white}</Icon>
      <Text>{type}</Text>
    </Container>
  );
};

Badge.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Badge;
