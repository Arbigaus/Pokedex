import styled from 'styled-components';

export const Container = styled.SafeAreaView`
  flex: 2;

  background-color: #e5e5e5;
  border-top-right-radius: 30px;
  border-top-left-radius: 30px;
`;

export const Text = styled.Text`
  width: 100%;
  text-align: center;
`;

export const TitleArea = styled.View`
  width: 100%;
  height: 35px;
  margin-top: 35px;
  margin-bottom: 35px;
  padding-left: 40px;
  padding-right: 40px;

  display: flex;
  justify-content: center;
`;

export const StatsTitle = styled.Text`
  font-size: 16px;
  font-weight: bold;
  line-height: 19px;
  color: ${(props) => props.color};
`;

export const InfoArea = styled.View`
  width: 100%;

  padding-left: 40px;
  display: flex;
  flex-direction: column;
`;

export const InfoLineArea = styled.View`
  height: 35px;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

export const TextInfoArea = styled.View`
  flex: 1;

  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const StatName = styled.Text`
  font-size: 12px;
  line-height: 14px;
  font-weight: 500;
  text-transform: capitalize;

  min-width: 110px;
`;

export const StatValue = styled.Text`
  font-size: 16px;
  line-height: 19px;
  text-align: right;
  color: #747476;
`;

export const StatBar = styled.View`
  flex: 1;

  justify-content: space-around;
  margin-left: 20px;
`;

export const StatBarBackground = styled.View`
  width: ${(props) => `${props.baseStat}%`};

  height: 4px;
  border-radius: 2px;
  background-color: ${(props) => props.color};
`;
