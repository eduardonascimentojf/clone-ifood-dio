import React from 'react';

import { Image, ScrollView } from 'react-native';
import { apiData } from '../../hooks/apiData';
import { styles } from './styles';

export function Promotions() {
  const { banners } = apiData();
  return (
    <ScrollView
      style={styles.container}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {banners?.map((value, index) => (
        <Image
          style={styles.image}
          key={index}
          source={{
            uri: value.banner_img_url,
          }}
        />
      ))}
    </ScrollView>
  );
}
