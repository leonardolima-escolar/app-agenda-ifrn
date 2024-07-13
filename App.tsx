import React from 'react';
import { theme } from './src/global/styles/theme';
import { Login } from './src/screens/Login';
import { ThemeProvider } from 'styled-components/native';
import { AddTask } from './src/screens/AddTask';
import { TaskList } from './src/screens/TaskList';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Login></Login>
    </ThemeProvider>
  );
}
