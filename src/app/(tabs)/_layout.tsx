import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: '#d244ff' }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => <Ionicons name="planet" size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="cities"
        options={{
          title: 'Cities',
          tabBarIcon: ({ color, size }) => <Ionicons name="airplane" size={size} color={color} />,
        }}
      />
    </Tabs>
  ); 
}
