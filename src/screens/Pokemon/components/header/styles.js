import styled from 'styled-components';
import PokeDetails from '../../../../Components/PokeDetails';

export const Container = styled.SafeAreaView`
  flex: 1;

  align-content: center;
  justify-content: center;

  background-color: ${(props) => props.color};
`;

export const PokeArea = styled.View`
  flex: 3;

  display: flex;
  flex-direction: row;
  padding: 20px;
  margin-top: 20px;

  align-content: flex-start;
  justify-content: flex-start;
`;

export const ImageArea = styled.View`
  flex: 1;

  position: relative;
`;

export const PokeImage = styled.Image`
  height: 120px;
  width: 120px;

  position: absolute;
  bottom: -5px;
`;

export const PokeBackground = styled.Image`
  height: 120px;
  width: 120px;

  position: absolute;
  bottom: -5px;
`;

export const DetailsArea = styled.View`
  flex: 2;
  margin-left: 25px;
`;

export const Details = styled(PokeDetails)``;

export const BackButton = styled.TouchableHighlight`
  margin-top: 30px;
  margin-left: 10px;
  height: 30px;
  width: 30px;
`;

export const Text = styled.Text`
  width: 100%;
  text-align: center;
`;

export const ButtonsArea = styled.View`
  height: 40px;

  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-content: space-around;
`;

export const DetailsButton = styled.TouchableHighlight`
  flex: 1;

  flex-direction: row;
  justify-content: center;
  align-content: center;
`;

export const ButtonsText = styled.Text`
  font-size: 15px;
  font-weight: ${(props) => (props.selected ? 'bold' : 'normal')}
  color: white;
`;
