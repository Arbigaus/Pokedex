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

import Colors from '../../../../utils/Colors';
import PokeballFull from '../../../../assets/Images/Pokeball_Full.png';

import Helpers from '../../../../helpers';
import Variables from '../../../../utils/Variables';

const { imgUrl } = Variables;

const PokeList = ({ navigation, pokemonEntries }) => {
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
  pokemonEntries: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
    .isRequired,
};

export default PokeList;
