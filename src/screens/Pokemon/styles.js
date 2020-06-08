import styled from 'styled-components';

import PokeHeader from './components/header';
import PokeAbout from './components/pokeAbout';
import PokeEvolution from './components/pokeEvolution';
import PokeStats from './components/pokeStats';

export const Container = styled.SafeAreaView`
  flex: 1;

  background-color: ${(props) => props.color};
`;

export const PokeArea = styled.View`
  flex: 1;

  background-color: ${(props) => props.color};
  align-content: center;
  justify-content: center;
`;

export const Header = styled(PokeHeader)``;

export const About = styled(PokeAbout)``;

export const Evolution = styled(PokeEvolution)``;

export const Stats = styled(PokeStats)``;

export const Text = styled.Text`
  width: 100%;
  text-align: center;
`;
