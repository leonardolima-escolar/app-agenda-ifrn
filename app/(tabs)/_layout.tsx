import React from 'react';
import { Tabs } from 'expo-router';
// import { useTheme } from 'styled-components/native';
import { Ionicons } from "@expo/vector-icons";
import { theme } from '@/global/styles/theme';

export default function TabLayout() {
  // const theme = useTheme();

  return (
    <Tabs
      initialRouteName='index'
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: any;

          if (route.name === 'add-task') {
            iconName = focused ? 'calendar' : 'calendar-outline';
          } else if (route.name === 'index') {
            iconName = focused ? 'list' : 'list-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },

        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.text_secondary,
        headerShown: false,
        tabBarLabelStyle: {
          fontSize: 14,
        },
        tabBarStyle: {
          paddingBottom: 8,
          paddingTop: 5,
          height: 64,
        },
      })}
    >
      <Tabs.Screen name='add-task' options={{ headerShown: false, tabBarLabel: 'Registrar Tarefa' }} />
      <Tabs.Screen name='index' options={{ headerShown: false, tabBarLabel: 'Listar Tarefa' }} />
    </Tabs>
  );
};

