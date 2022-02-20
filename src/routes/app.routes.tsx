import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as S from '../screens';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
const Tab = createBottomTabNavigator();

export function AppRoutes() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            switch (route.name) {
              case 'Home':
                return (
                  <Ionicons
                    name={focused ? 'home' : 'home-outline'}
                    size={25}
                    color={focused ? '#d31818' : '#1e1d1f'}
                  />
                );
              case 'Search':
                return (
                  <Ionicons
                    name={focused ? 'search' : 'search-outline'}
                    size={25}
                    color={focused ? '#d31818' : '#1e1d1f'}
                  />
                );
              case 'Request':
                return (
                  <Ionicons
                    name={focused ? 'clipboard' : 'clipboard-outline'}
                    size={25}
                    color={focused ? '#d31818' : '#1e1d1f'}
                  />
                );
              case 'Profile':
                return (
                  <Ionicons
                    name={focused ? 'person' : 'person-outline'}
                    size={25}
                    color={focused ? '#d31818' : '#1e1d1f'}
                  />
                );
            }
          },
          tabBarInactiveTintColor: '#1e1d1f',
          tabBarActiveTintColor: '#d31818',
          headerShown: false,
        })}
      >
        <Tab.Screen
          name='Home'
          component={S.Home}
          options={{
            title: 'Início',
          }}
        />
        <Tab.Screen
          name='Search'
          component={S.Search}
          options={{
            title: 'Busca',
          }}
        />
        <Tab.Screen
          name='Request'
          component={S.Request}
          options={{
            title: 'Pedidos',
          }}
        />
        <Tab.Screen
          name='Profile'
          component={S.Profile}
          options={{
            title: 'Perfil',
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
