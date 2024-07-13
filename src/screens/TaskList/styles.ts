import styled from 'styled-components/native';
import { DefaultTheme } from 'styled-components';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.primary};
  align-items: center;
`;

export const Logo = styled.Image`
  margin-top: 100px;
  margin-bottom: 32px;
  width: 76px;
  height: 102px;
`;

export const Title = styled.Text`
  font-size: 36px;
  color: #ffffff;
  font-weight: bold;
  width: 172px;
  text-align: center;
`;
