import styled from 'styled-components/native';
import { DefaultTheme } from 'styled-components';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.background_primary};
`;

export const Header = styled.View`
  height: 150px;
  background-color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.primary};
  padding-top: 64px;
  padding-left: 24px;
  padding-right: 24px;
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.text_primary};
  font-weight: bold;
`;

export const Subtitle = styled.Text`
  font-size: 15px;
  color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.text_primary};
`;
