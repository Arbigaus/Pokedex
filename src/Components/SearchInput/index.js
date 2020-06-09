import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import IconSearch from '../../assets/icons/Search.svg';

import { Container, TextInput, IconArea } from './styles';
import Context from '../../../context';

const SearchInput = ({ placeholder }) => {
  const { setPokemonEntries, fullPokeList } = useContext(Context);

  const handleInput = (str) => {
    if (str.length > 0) {
      setPokemonEntries(
        fullPokeList.filter(
          (item) =>
            item.name.includes(str.toLowerCase()) || item.number === Number(str)
        )
      );
    } else {
      setPokemonEntries(fullPokeList);
    }
  };

  return (
    <Container>
      <IconArea>
        <IconSearch width={16} height={16} />
      </IconArea>
      <TextInput
        placeholder={placeholder}
        onChangeText={(text) => handleInput(text)}
      />
    </Container>
  );
};

SearchInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
};

export default SearchInput;
