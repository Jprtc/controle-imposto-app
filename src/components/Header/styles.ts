import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: ${RFPercentage(18)}px;
  background-color: ${({ theme }) => theme.colors.success};
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-weight: bold;
  font-size: ${RFValue(24)}px;
  text-align: center;
`;
