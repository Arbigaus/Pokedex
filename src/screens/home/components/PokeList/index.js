import React, { useState, useEffect } from 'react';

import {
  Container,
  FlatList,
  Item,
  PokeName,
  BadgeArea,
  PokeNumber,
  InfoArea,
  ImageArea,
  PokeImage,
  PokeBackground,
} from './styles';
import Badge from '../../../../Components/Badge';

import Colors from '../../../../Utils/Colors';

import PokeballFull from '../../../../assets/Images/Pokeball_Full.png';

const imgUrl = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/';
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

const formatNumber = (number) => {
  if (number >= 100) return `${number}`;
  if (number >= 10) return `0${number}`;

  return `00${number}`;
};

const PokeList = () => {
  return (
    <Container>
      <FlatList
        data={pokemonEntries}
        renderItem={({ item }) => (
          <Item key={item.number} color={Colors.backgroundType[item.types[0]]}>
            <InfoArea>
              <PokeNumber>{`#${formatNumber(item.number)}`}</PokeNumber>
              <PokeName>{item.name}</PokeName>
              <BadgeArea>
                {item.types.map((type) => (
                  <Badge key={`${item.name}-${type}`} type={type} />
                ))}
              </BadgeArea>
            </InfoArea>
            <ImageArea>
              <PokeBackground source={PokeballFull} />
              <PokeImage
                source={{ uri: `${imgUrl}${formatNumber(item.number)}.png` }}
              />
            </ImageArea>
          </Item>
        )}
      />
    </Container>
  );
};

export default PokeList;
