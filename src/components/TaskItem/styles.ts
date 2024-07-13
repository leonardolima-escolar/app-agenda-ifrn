import styled, { DefaultTheme } from "styled-components/native";

export const StyledTaskItem = styled.View<{ taskId: number }>`
  padding-left: 16px;
  padding-right: 16px;
  color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.placeholder};
  background-color: ${({ theme, taskId }: { theme: DefaultTheme, taskId: number }) =>
    taskId % 2 === 0 ? theme.colors.background_primary : theme.colors.background_tertiary};
  height: 48px;
  width: 100%;
  flex-direction: row;
  align-items: center;
`;

export const StyledTaskText = styled.Text<{ completed: boolean }>`
  flex: 1;
  text-decoration: ${(props: any) => (props.completed ? 'line-through' : 'none')};
  color: ${(props: any) => (props.completed ? ({ theme }: { theme: DefaultTheme }) => theme.colors.text_success : ({ theme }: { theme: DefaultTheme }) => theme.colors.background_secondary)};
`;
