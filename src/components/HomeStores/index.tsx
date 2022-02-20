import React, { useEffect, useState } from 'react';

import { View, Text, Image, TouchableOpacity } from 'react-native';
import { apiData } from '../../hooks/apiData';

import { styles } from './styles';
import { Ionicons } from '@expo/vector-icons';
export function HomeStores() {
  const { store, category } = apiData();
  const [isResulst, setIsResult] = useState(false);
  useEffect(() => {
    setIsResult(false);
  }, [category]);

  return (
    <View>
      <Text style={styles.title}>Lojas</Text>
      {store?.map(
        (value, index) =>
          value.categories === category && (
            <TouchableOpacity
              key={index}
              style={styles.container}
              activeOpacity={0.6}
              onPress={() => alert('click')}
            >
              {!isResulst && setIsResult(true)}
              <Image source={{ uri: value.img }} style={styles.img} />
              <View>
                <Text>{value.name}</Text>
                <View style={styles.container}>
                  <Text style={styles.text}>{value.evaluation}</Text>
                  <Ionicons
                    name='star'
                    style={{ marginRight: 5 }}
                    size={15}
                    color='#e7ba03'
                  />
                  <Text style={styles.text}>{value.categories}</Text>
                  <Text style={styles.text}>{value.distance}</Text>
                </View>
                <View style={styles.container}>
                  <Text style={styles.text}>{value.delivery_time}</Text>
                  <Text style={styles.text}>{value.delivery_price}</Text>
                </View>
              </View>
            </TouchableOpacity>
          )
      )}
      {!isResulst && (
        <Text
          style={{
            margin: 10,
          }}
        >
          Não encontramos {category} proximo á você!
        </Text>
      )}
    </View>
  );
}
