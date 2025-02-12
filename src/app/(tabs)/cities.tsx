import React from 'react';
import { ActivityIndicator, FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import useCities from '../../hooks/useCities';
import CityCard from '../../components/CityCard';

export default function CitiTab() {

  const { cities, loading, error } = useCities();

  if (loading) return <ActivityIndicator size="large" color="#d244ff" />;
  if (error) return <Text>{error}</Text>;
  
    return (
        <SafeAreaView style={styles.container}>
          <FlatList
            data={cities}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <CityCard city={item} />}
          />
        </SafeAreaView>
      );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
    },
  });
