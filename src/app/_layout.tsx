
import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#2F6B45',
        },
        headerTintColor: '#FFFFFF',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        contentStyle: {
          backgroundColor: '#F8FAF7',
        },
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: 'Luminhaw',
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="plant-identification"
        options={{ title: 'Plant Identification' }}
      />

      <Stack.Screen
        name="plant-details"
        options={{ title: 'Plant Details' }}
      />

      <Stack.Screen
        name="disease-detection"
        options={{ title: 'Disease Detection' }}
      />

      <Stack.Screen
        name="nutrient-deficiency"
        options={{ title: 'Nutrient Deficiency' }}
      />

      <Stack.Screen
        name="soil-identification"
        options={{ title: 'Soil Identification' }}
      />

      <Stack.Screen
  name="saved-plants"
  options={{ title: 'Saved Plants' }}
/>
    </Stack>
  );
}
