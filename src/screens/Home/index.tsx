import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Categories } from '../../components/Categories';
import { HomeStores } from '../../components/HomeStores';
import { Promotions } from '../../components/Promotions';

import { styles } from './styles';

export function Home() {
  return (
    <ScrollView>
      <View style={styles.address}>
        <Text style={styles.text}>São Paulo, 60</Text>
      </View>
      <Categories />
      <Promotions />
      <HomeStores />
    </ScrollView>
  );
}
