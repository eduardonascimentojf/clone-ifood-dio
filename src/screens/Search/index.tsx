import React from 'react';
import { View, Text } from 'react-native';

export function Search() {
  return (
    <View
      style={{
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text>Pesquisar</Text>
    </View>
  );
}
