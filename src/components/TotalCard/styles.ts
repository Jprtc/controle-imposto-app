import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.shape};
  border-radius: 5px;
  padding: 17px 24px;
  margin-bottom: 8px;
`;

export const Header = styled.View`
  flex-direction:row;
  justify-content: space-between;
  align-items: center;
`

export const Description = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
`;

export const Amount = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(20)}px;
  margin-top: 2px;
  color: ${({ theme }) => theme.colors.attention};
`;


export const Footer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 19px;
`;

export const Local = styled.Text`
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.text};
`;

export const Date = styled.Text`
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.text};
`;

export const Funcao = styled.Text`
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.success};
`;

export const Cpf = styled.Text`
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.title};
`;

