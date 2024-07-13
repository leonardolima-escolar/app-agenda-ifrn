import styled from 'styled-components/native';
import { DefaultTheme } from 'styled-components';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.background_primary};
  align-items: center;
  justify-content: center;
  padding: 32px;
`;

export const Logo = styled.Image`
  margin-top: 100px;
  margin-bottom: 32px;
  width: 76px;
  height: 102px;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.primary};
  font-weight: bold;
  margin-bottom: 32px;
`;
