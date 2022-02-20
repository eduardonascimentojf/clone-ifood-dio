import React from 'react';

import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { apiData } from '../../hooks/apiData';

import { styles } from './styles';
import Carousel from 'react-native-snap-carousel';
import { formatTextToCapitalize } from '../../utils/tools';
export function Categories() {
  const { categories, setCategory, category } = apiData();
  return (
    <ScrollView
      style={styles.container}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {categories?.map((value, index) => (
        // value.name == category : styles.text : styles.texActive
        <Text
          key={index}
          style={value.name == category ? styles.texActive : styles.text}
          onPress={() => setCategory(value.name)}
        >
          {formatTextToCapitalize(value.name)}
        </Text>
      ))}
    </ScrollView>
  );
}
