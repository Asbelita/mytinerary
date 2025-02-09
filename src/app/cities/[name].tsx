import { View, Text, StyleSheet } from 'react-native';
import { useLocalSearchParams, useNavigation } from 'expo-router';
import { useEffect } from 'react';

export default function CityDetail() {
  const { name } = useLocalSearchParams();
  const navigation = useNavigation();

  useEffect(() => {
    if (name) {
      navigation.setOptions({ 
        title: name as string,
        headerBackTitle: 'Cities',
       }); 
    }
  }, [name, navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.cityName}>City: {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cityName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#d244ff',
  },
});