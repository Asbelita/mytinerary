import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, FlatList, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import useCities from '../../hooks/useCities';
import CityCard from '../../components/CityCard';

export default function CitiTab() {

  const { cities, loading, error } = useCities();
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCities = cities.filter((city) => {
    return city.name.toLowerCase().includes(searchQuery.toLowerCase());
  });

  if (loading) return <ActivityIndicator size="large" style={styles.status}/>;
  if (error) return <Text>{error}</Text>;
  
    return (
        <SafeAreaView style={styles.container}>
          <StatusBar style="auto" />
          <TextInput
            style={styles.searchInput}
            placeholder="Search cities..."
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          <FlatList
            data={filteredCities}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <CityCard city={item} />}
            ListEmptyComponent={<Text style={styles.emptyText}>No cities found</Text>}
          />
        </SafeAreaView>
      );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
    },
    searchInput: {
      height: 40,
      borderColor: "#d244ff",
      borderWidth: 1,
      borderRadius: 8,
      paddingHorizontal: 10,
      margin: 10,
    },
    emptyText: {
      textAlign: "center",
      marginTop: 20,
      fontSize: 16,
      color: "#888",
    },
    status: {
      padding: 100,
    }
  });
