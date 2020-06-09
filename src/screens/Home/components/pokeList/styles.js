import styled from 'styled-components';
import PokeDetails from '../../../../components/PokeDetails';

export const Container = styled.SafeAreaView`
  flex: 2;
`;

export const FlatList = styled.FlatList`
  flex: 1;

  padding-right: 40px;
  padding-left: 40px;
`;

export const Item = styled.TouchableHighlight`
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

export const Details = styled(PokeDetails)``;
