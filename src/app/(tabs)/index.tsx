import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, SafeAreaView, StyleSheet, Text } from 'react-native';
import Hero from '../../components/Hero';
import Carousel from '../../components/Carousel';
import useCities from '../../hooks/useCities';

export default function Home() {
  const { cities, loading, error } = useCities();
  
  if (loading) return <ActivityIndicator size="large" color="#d244ff" style={styles.status} />;
  if (error) return <Text>{error}</Text>;

    return (
        <SafeAreaView style={styles.container}>
          <StatusBar style="auto" />
          <Hero title="MyTinerary" subtitle="It's time to set your trip!" />
          <Carousel cities={cities} />
        </SafeAreaView>
      );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    status: {
      padding: 100,
    }
  });
  
