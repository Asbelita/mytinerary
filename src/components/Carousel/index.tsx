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

const CarouselComponent: React.FC<CarouselProps> = ({ cities }) => {
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
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  cityName: {
    textAlign: 'center',
    fontSize: 18,
    marginTop: 10,
    fontWeight: 'bold',
  },
});

export default CarouselComponent;