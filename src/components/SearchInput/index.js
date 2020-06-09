import React from 'react';
import PropTypes from 'prop-types';
import IconSearch from '../../assets/icons/Search.svg';

import { Container, TextInput, IconArea } from './styles';

const SearchInput = ({ placeholder }) => {
  return (
    <Container>
      <IconArea>
        <IconSearch width={16} height={16} />
      </IconArea>
      <TextInput placeholder={placeholder} />
    </Container>
  );
};

SearchInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
};

export default SearchInput;
