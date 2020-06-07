import styled from 'styled-components';

export const Container = styled.SafeAreaView`
  flex: 2;
`;

export const FlatList = styled.FlatList`
  flex: 1;

  padding-right: 40px;
  padding-left: 40px;
`;

export const Item = styled.View`
  margin: 15px 0 15px 0;
  height: 115px;
  position: relative;

  display: flex;
  flex-direction: row;
  justify-content: center;
  border-radius: 10px;

  background-color: ${(props) => props.color};
`;

export const InfoArea = styled.View`
  flex: 2;

  padding: 20px;
`;

export const ImageArea = styled.View`
  flex: 1;
`;

export const PokeImage = styled.Image`
  height: 140px;
  width: 140px;

  position: absolute;
  bottom: 0;
  right: 0;
`;

export const PokeBackground = styled.Image`
  height: 140px;
  width: 140px;

  position: absolute;
  top: 0;
  right: -10px;
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
