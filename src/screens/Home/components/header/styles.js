import styled from 'styled-components';

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  align-content: center;
  z-index: 1;
`;

export const ImageBackground = styled.ImageBackground`
  max-height: 200px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding-left: 40px;
  padding-right: 40px;
  padding-top: 15px;
`;

export const Text = styled.Text`
  width: 100%;

  font-size: 16px;
  text-align: left;
  margin-bottom: 25px;
`;

export const Title = styled.Text`
  width: 100%;

  font-size: 32px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const InputArea = styled.View`
  width: 100%;

  padding-left: 40px;
  padding-right: 40px;
`;

export const FiltersButtonsArea = styled.View`
  width: 100%;
  height: 40px;

  display: flex;
  flex-direction: row;

  justify-content: flex-end;
`;

export const FiltersButton = styled.TouchableOpacity`
  width: 30px;
  height: 30px;

  align-content: center;
  justify-content: center;
  margin-left: 25px;
`;
