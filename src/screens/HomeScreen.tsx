import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Hero from '../components/Hero';
import Carousel from '../components/Carousel';

const HomeScreen: React.FC = () => {
  const cities = [
    {
      image: 'https://media.istockphoto.com/id/1145422105/photo/eiffel-tower-aerial-view-paris.jpg?s=2048x2048&w=is&k=20&c=i3FwinI2s_TAoJOCa72v2_1PQTXeoUFYEFZe0rgFoac=',
      name: 'Paris',
    },
    {
      image: 'https://media.istockphoto.com/id/1336299043/photo/beautiful-aerial-shot-of-bogota-colombia.jpg?s=2048x2048&w=is&k=20&c=HiENae_OPyWnINMatzGFdkBbJoTWfheZqu7SJ-lOwE4=',
      name: 'Bogota',
    },
    {
      image: 'https://media.istockphoto.com/id/500750930/photo/caracas-venezuela-cityscape-on-a-sunny-afternoon.jpg?s=2048x2048&w=is&k=20&c=kMhV92A_KbmgN5UzzSK-mDMsgDf0SDGmwbgLhLzGQ6Y=',
      name: 'Caracas',
    },
    {
      image: 'https://media.istockphoto.com/id/1452993053/photo/view-of-paseo-de-reforma-in-mexico-city-financial-district-at-night.jpg?s=2048x2048&w=is&k=20&c=gcMKtbse9PKDdKVs8P4Z-q-QhyoSLvBxqn52zXm0ZC4=',
      name: 'Ciudad de Mexico',
    },
    {
      image: 'https://media.istockphoto.com/id/534215078/photo/rio-de-janeiro-aerial.jpg?s=2048x2048&w=is&k=20&c=nh1ozouIVV0X5pQTFowX7CmM4bwWc_TCiTN05RZBqvQ=',
      name: 'Rio de Janeiro',
    },
    {
      image: 'https://media.istockphoto.com/id/1359239820/photo/cancun-coast-with-sun-and-sailboats.jpg?s=2048x2048&w=is&k=20&c=2BnWUHjBt4Vf6k-WYidihUja6JI0n4KJ2vOK2Bu3ZKg=',
      name: 'Cancun',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Hero title="MyTinerary" subtitle="It's time to set your trip!" />
      <Carousel cities={cities} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeScreen;

