import styled from 'styled-components';

import PokeList from './components/pokeList';

export const Container = styled.SafeAreaView`
  flex: 1;
  padding-bottom: 1px;
`;

export const LoadingText = styled.Text`
  flex: 1;

  font-size: 25px;
  text-align: center;
`;

export const ShowPokeList = styled(PokeList)``;
