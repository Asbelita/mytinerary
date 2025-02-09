import React from 'react';
import { Link } from 'expo-router';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

interface CityProps {
    city: {
      image: string;
      name: string;
    };
}

  export default function CityCardComponent({city}: CityProps) {
    return (
        <Link href={`/cities/${city.name}`} asChild>
            <Pressable >
                <View style={styles.card}>
                    <Image source={{ uri: city.image }} style={styles.image} />
                    <Text style={styles.cityName}>{city.name}</Text>
                </View>
            </Pressable>
        </Link>
    );
  };

  const styles = StyleSheet.create({
    card: {
        backgroundColor: '#d244ff',
        borderRadius: 10,
        overflow: 'hidden',
        margin: 16,
      },
    image: {
      width: '100%',
      height: 180,
    },
    cityName: {
      padding: 10,
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
      color: 'white'
    },
  });
  