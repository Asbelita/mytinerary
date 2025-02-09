import React from 'react';
import { Pressable, View, Text, StyleSheet } from 'react-native';

interface HeroProps {
  title: string;
  subtitle: string;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
      <Pressable > 
        <Text style={styles.button}> Explore</Text>
      </Pressable>
    </View>
  );
};

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
    color : '#d244ff',
  },
  subtitle: {
    fontSize: 18,
    marginVertical: 10,
    color: '#8d07b8',
  },
  button: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Hero;