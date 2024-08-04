// import 'react-native-gesture-handler';
// import { theme } from './src/global/styles/theme';
// import { Login } from './src/screens/Login';
// import { ThemeProvider, useTheme } from 'styled-components/native';
// import { AddTask } from './src/screens/AddTask';
// import { TaskList } from './src/screens/TaskList';
// import { createStackNavigator } from '@react-navigation/stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { NavigationContainer } from '@react-navigation/native';
// import { Ionicons } from "@expo/vector-icons";
// import { StatusBar } from 'expo-status-bar';

// const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator();

// function TasksTabNavigator() {
//   const theme = useTheme();

//   return (
//     <Tab.Navigator
//       initialRouteName="Listar Tarefa"
//       screenOptions={({ route }) => ({
//         tabBarIcon: ({ focused, color, size }) => {
//           let iconName: any;

//           if (route.name === 'Listar Tarefa') {
//             iconName = focused ? 'list' : 'list-outline';
//           } else if (route.name === 'Registrar Tarefa') {
//             iconName = focused ? 'calendar' : 'calendar-outline';
//           }

//           return <Ionicons name={iconName} size={size} color={color} />;
//         },

//         tabBarActiveTintColor: theme.colors.primary,
//         tabBarInactiveTintColor: theme.colors.text_secondary,
//         headerShown: false,
//         tabBarLabelStyle: {
//           fontSize: 14,
//         },
//         tabBarStyle: {
//           paddingBottom: 8,
//           paddingTop: 5,
//           height: 64,
//         },
//       })}
//     >
//       <Tab.Screen name="Registrar Tarefa" component={AddTask} />
//       <Tab.Screen name="Listar Tarefa" component={TaskList} />
//     </Tab.Navigator>
//   );
// }

// export default function App() {
//   return (
//     <ThemeProvider theme={theme}>
//       <NavigationContainer>
//         <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }} >
//           <Stack.Screen name="Login" component={Login} />
//           <Stack.Screen name="Gerenciamento de Tarefas" component={TasksTabNavigator} />
//         </Stack.Navigator>
//         <StatusBar style="auto" backgroundColor={theme.colors.primary} />
//       </NavigationContainer>
//     </ThemeProvider>
//   );
// }
