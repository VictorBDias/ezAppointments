import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  padding: 16px;
`;

export const PhotoButton = styled.View`
  background-color: #3eb097;
  height: 40px;
  width: 160px;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  margin-bottom: 16px;
`;

export const ButtonText = styled.Text`
  font-size: 14;
  color: #f3f3f3;
  font-weight: bold;
`;

export const DescriptionInput = styled.TextInput`
  width: 328px;
  border: none;
  text-align: center;
  border-bottom-width: 1px;
  border-bottom-color: #ccc;
  padding-bottom: 16px;
  color: #00000080;
`;

export const Logo = styled.Image`
  width: 217px;
  height: 50px;
  margin-bottom: 16px;
`;

export const Text = styled.Text`
  text-align: left;
  margin-top: 8px;
  width: 201px;
`;
