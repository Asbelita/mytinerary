import React from "react";
import { View , Text} from "react-native";
import Hero from "../components/Hero";
//import CustomCarousel from "../components/Carousel";

const cities = [
  { name: "Paris", image: "https://source.unsplash.com/600x400/?paris" },
  { name: "New York", image: "https://source.unsplash.com/600x400/?newyork" },
  { name: "Tokyo", image: "https://source.unsplash.com/600x400/?tokyo" },
];

const HomeScreen: React.FC = () => {
  return (
    <View>
    
      <Hero title="MyTinerary" subtitle="Find your perfect travel itinerary" />
      <Text>Open up App.tsx to start working on your app!</Text>
    </View>
  );
};

export default HomeScreen;
