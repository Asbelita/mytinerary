import React from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { cities } from '../../resources/citiesData';
import CityCard from '../../components/CityCard';

export default function CitiTab() {
    return (
        <SafeAreaView style={styles.container}>
          <FlatList
            data={cities}
            keyExtractor={(item) => item.name}
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
