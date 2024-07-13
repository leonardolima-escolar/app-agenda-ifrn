import styled from 'styled-components/native';
import { DefaultTheme } from 'styled-components';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.primary};
  align-items: center;
  padding: 62px;
`;

export const Logo = styled.Image`
  margin-top: 38px;
  margin-bottom: 24px;
  width: 76px;
  height: 102px;
`;

export const Title = styled.Text`
  font-size: 36px;
  color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.text_primary};
  font-weight: bold;
  width: 172px;
  text-align: center;
  margin-bottom: 32px;
`;
