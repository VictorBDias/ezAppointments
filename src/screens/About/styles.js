import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  padding: 16px;
`;

export const PhotoButton = styled.Button`
  background-color: #3eb097;
`;

export const DescriptionInput = styled.TextInput`
  width: 328px;
  border: none;
  margin-top: 24px;
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

export const OccupationText = styled.TextInput`
  width: 200px;
  margin-top: 8px;
  margin-left: 16px;
  margin-right: 16px;
  margin-bottom: 16px;
  font-size: 14px;
  text-align: left;
`;

export const OccupationImage = styled.Image`
  width: 112px;
  height: 112px;
  margin-top: 8px;
`;

export const ImageLoader = styled.View`
  width: 112px;
  height: 112px;
  border-radius: 8px;
  background: #e7e7e7;
`;

export const DescriptionLoader = styled.View`
  background: #e7e7e7;
  width: 150px;
  height: 10px;
  border-radius: 8px;
`;

export const DescriptionLoader2 = styled(DescriptionLoader)`
  width: 80px;
  height: 10px;
  margin-top: 16px;
`;
