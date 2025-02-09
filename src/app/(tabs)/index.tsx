import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Hero from '../../components/Hero';
import Carousel from '../../components/Carousel';
import { cities } from '../../resources/citiesData';

export default function Home() {
    return (
        <SafeAreaView style={styles.container}>
          <Hero title="MyTinerary" subtitle="It's time to set your trip!" />
          <Carousel cities={cities} />
        </SafeAreaView>
      );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });
  
