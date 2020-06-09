import styled from 'styled-components';

export const Container = styled.View`
  flex: 1;
  max-width: 70px;
  margin-right: 5px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  border-radius: 5px;

  background-color: ${(props) => props.color};
`;

export const Icon = styled.View`
  flex: 1;
  align-content: center;
  justify-content: center;
`;

export const Text = styled.Text`
  flex: 2;
  font-size: 12px;

  text-align: left;
  margin: auto;
  color: white;

  text-transform: capitalize;
`;
