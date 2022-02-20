import React from 'react';

import { View, Text } from 'react-native';

// import { styles } from './styles';

export function Request() {
  return (
    <View
      style={{
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text>Pedido</Text>
    </View>
  );
}
