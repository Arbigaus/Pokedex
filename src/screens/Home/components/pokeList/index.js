import React from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  FlatList,
  Item,
  ImageArea,
  PokeImage,
  InfoArea,
  PokeBackground,
  Details,
} from './styles';

import Colors from '../../../../Utils/Colors';
import PokeballFull from '../../../../assets/Images/Pokeball_Full.png';

import Helpers from '../../../../Helpers';
import Variables from '../../../../Utils/Variables';

const { imgUrl } = Variables;
const pokemonEntries = [
  {
    name: 'bulbasaur',
    number: 1,
    types: ['grass', 'poison'],
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
  },
  {
    name: 'ivysaur',
    number: 2,
    types: ['grass', 'poison'],
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png',
  },
  {
    name: 'venusaur',
    number: 3,
    types: ['grass', 'poison'],
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png',
  },
  {
    name: 'charmander',
    number: 4,
    types: ['fire'],
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
  },
];

const PokeList = ({ navigation }) => {
  const handleClick = (pokeData) => {
    const { navigate } = navigation;
    navigate('Pokemon', { navigation, pokeData });
  };

  return (
    <Container>
      <FlatList
        data={pokemonEntries}
        renderItem={({ item }) => (
          <Item
            onPress={() => handleClick(item)}
            key={item.number}
            color={Colors.backgroundType[item.types[0]]}
          >
            <>
              <InfoArea>
                <Details pokeData={item} />
              </InfoArea>
              <ImageArea>
                <PokeBackground source={PokeballFull} />
                <PokeImage
                  source={{
                    uri: `${imgUrl}${Helpers.formatNumber(item.number)}.png`,
                  }}
                />
              </ImageArea>
            </>
          </Item>
        )}
      />
    </Container>
  );
};

PokeList.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default PokeList;
