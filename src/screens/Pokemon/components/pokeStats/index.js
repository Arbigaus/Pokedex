import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  Text,
  StatsTitle,
  TitleArea,
  InfoArea,
  InfoLineArea,
  StatName,
  StatValue,
  StatBar,
  StatBarBackground,
  TextInfoArea,
} from './styles';

import Colors from '../../../../Utils/Colors';

const PokeStats = ({ pokeData }) => {
  const [color, setColor] = useState('white');

  useEffect(() => {
    if (pokeData.types) {
      const { types } = pokeData;
      const typeName = types[0].type.name;
      setColor(Colors.type[typeName]);
    }
  }, [pokeData]);

  return (
    <Container>
      {pokeData === {} ? (
        <Text>Loading...</Text>
      ) : (
        <>
          <TitleArea>
            <StatsTitle color={color}>Base Stats</StatsTitle>
          </TitleArea>
          <InfoArea>
            {pokeData.stats &&
              pokeData.stats.map((stat) => (
                <InfoLineArea>
                  <TextInfoArea>
                    <StatName>{stat.name}</StatName>
                    <StatValue>{stat.baseStat}</StatValue>
                  </TextInfoArea>
                  <StatBar>
                    <StatBarBackground baseStat={stat.baseStat} color={color} />
                  </StatBar>
                </InfoLineArea>
              ))}
          </InfoArea>
        </>
      )}
    </Container>
  );
};

PokeStats.propTypes = {
  pokeData: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default PokeStats;
