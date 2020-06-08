import styled from 'styled-components';
import TypeBadge from '../TypeBadge';

export const Container = styled.SafeAreaView`
  flex: 1;

  align-content: center;
  justify-content: center;
`;

export const PokeName = styled.Text`
  color: white;

  font-size: 26px;
  font-weight: bold;
  text-transform: capitalize;
`;

export const BadgeArea = styled.View`
  height: 30px;
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

export const PokeNumber = styled.Text`
  color: rgba(23, 23, 27, 0.6);

  font-size: 12px;
  font-weight: bold;
`;

export const Badge = styled(TypeBadge)``;
