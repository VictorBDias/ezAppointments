import styled from 'styled-components/native';
import { Card } from 'react-native-paper';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const AppointmentButton = styled.Button`
  width: 80%;
  flex: 1;
  align-items: center;
  background-color: #fafafa;
  color: red;
`;

export const AppointmentList = styled.View`
  margin-left: 24px;
  padding: 16px;
`;

export const DayShow = styled.View`
  align-items: center;
  justify-content: center;
  background-color: #3eb097;
  height: 40px;
  width: 40px;
  margin: 16px;
`;

export const WeekDayText = styled.Text`
  margin-right: 16px;
`;

export const AppointmentCard = styled(Card)`
  border-width: 1;
  border-color: #3eb097;
  margin-bottom: 16;
`;
