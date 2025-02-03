import React from 'react';
import { StyleSheet } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';

const App: React.FC = () => {
  return (
    <HomeScreen/> 
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
