import React from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  BackButton,
  Details,
  PokeArea,
  ButtonsArea,
  ImageArea,
  DetailsArea,
  PokeImage,
  PokeBackground,
} from './styles';
import PokeballFull from '../../../../assets/Images/Pokeball_Full.png';
import BackIcon from '../../../../assets/icons/Back.svg';
import Colors from '../../../../Utils/Colors';

import Variables from '../../../../Utils/Variables';
import Helpers from '../../../../Helpers';

const { imgUrl } = Variables;

const PokeHeader = ({ navigation, pokeData }) => {
  const handleBack = () => {
    navigation.navigate('Home');
  };

  return (
    <Container color={Colors.backgroundType[pokeData.types[0]]}>
      <BackButton onPress={handleBack}>
        <BackIcon />
      </BackButton>
      <PokeArea>
        <ImageArea>
          <PokeBackground source={PokeballFull} />
          <PokeImage
            source={{
              uri: `${imgUrl}${Helpers.formatNumber(pokeData.number)}.png`,
            }}
          />
        </ImageArea>
        <DetailsArea>
          <Details pokeData={pokeData} />
        </DetailsArea>
      </PokeArea>
      <ButtonsArea />
    </Container>
  );
};

PokeHeader.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.object).isRequired,
  pokeData: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default PokeHeader;
