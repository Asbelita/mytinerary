import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

interface HeroProps {
  title: string;
  subtitle: string;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
      <Button title="Explore" onPress={() => {}} /> 
    </View>
  );
};

// usar presable en vez de button

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
    marginBottom: 20,
  },
  title: {
    paddingTop: 20,
    fontSize: 32,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 18,
    marginVertical: 10,
  },
});

export default Hero;