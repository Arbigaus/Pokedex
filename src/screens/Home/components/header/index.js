import React from 'react';

import SearchInput from '../../../../components/SearchInput';
import Pokeball from '../../../../assets/Images/Pokeball.png';
import IconFilter from '../../../../assets/icons/Filter.svg';
import IconGeneration from '../../../../assets/icons/Generation.svg';
import IconSort from '../../../../assets/icons/Sort.svg';

import {
  Container,
  Title,
  Text,
  ImageBackground,
  InputArea,
  FiltersButton,
  FiltersButtonsArea,
} from './styles';

const header = () => {
  return (
    <Container>
      <ImageBackground source={Pokeball}>
        <FiltersButtonsArea>
          <FiltersButton>
            <IconGeneration width="100%" height="100%" />
          </FiltersButton>
          <FiltersButton>
            <IconSort width="100%" height="100%" />
          </FiltersButton>
          <FiltersButton>
            <IconFilter width="100%" height="100%" />
          </FiltersButton>
        </FiltersButtonsArea>
        <Title>Pokédex</Title>
        <Text>
          Search for Pokémon by name or using the National Pokédex number.
        </Text>
      </ImageBackground>
      <InputArea>
        <SearchInput placeholder="What Pokémon are you looking for?" />
      </InputArea>
    </Container>
  );
};

export default header;
