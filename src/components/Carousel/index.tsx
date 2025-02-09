import React from 'react';
import { Text, Image, View, StyleSheet, Dimensions } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

interface CarouselItem {
  image: string;
  name: string;
}

interface CarouselProps {
  cities: CarouselItem[];
}

const { width } = Dimensions.get('window');

export default function CarouselComponent({ cities }: CarouselProps) {
  return (
    <Carousel
      loop
      width={width}
      height={250}
      autoPlay
      data={cities}
      renderItem={({ item }) => (
        <View style={styles.carouselItem}>
          <Image source={{ uri: item.image }} style={styles.image} />
          <Text style={styles.cityName}>{item.name}</Text>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  carouselItem: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    overflow: 'hidden',
    marginHorizontal: 10,
    backgroundColor: '#d244ff',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  cityName: {
    padding: 10,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});