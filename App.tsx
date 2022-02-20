import React from 'react';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { AppRoutes } from './src/routes/app.routes';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { ApiDataProvaider } from './src/hooks/apiData';
export default function App() {
  return (
    <ApiDataProvaider>
      <View style={{ flex: 1, paddingTop: getStatusBarHeight() }}>
        <StatusBar style='dark' translucent backgroundColor='transparent' />
        <AppRoutes />
      </View>
    </ApiDataProvaider>
  );
}
