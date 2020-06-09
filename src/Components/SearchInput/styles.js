import styled from 'styled-components';

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  align-content: space-around;
  justify-content: center;

  padding-left: 27px;
  padding-right: 27px;

  border-radius: 10px;
  background-color: #f2f2f2;
`;

export const IconArea = styled.View`
  display: flex;
  align-content: center;
  justify-content: center;
`;

export const TextInput = styled.TextInput`
  flex: 1;
  height: 60px;
  padding-left: 8px;

  font-size: 16px;
  line-height: 19px;
`;
