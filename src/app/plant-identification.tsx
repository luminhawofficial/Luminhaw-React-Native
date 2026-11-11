
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { router } from 'expo-router';

const plants = [
  {
    id: '1',
    name: 'Monstera Deliciosa',
    scientificName: 'Monstera deliciosa',
    description: 'A tropical plant known for its large, split leaves.',
    sunlight: 'Bright, indirect light',
    water: 'Water when the top soil feels dry.',
  },
  {
    id: '2',
    name: 'Snake Plant',
    scientificName: 'Dracaena trifasciata',
    description: 'A hardy plant with tall, upright leaves.',
    sunlight: 'Indirect light or low light',
    water: 'Water when the soil is completely dry.',
  },
  {
    id: '3',
    name: 'Peace Lily',
    scientificName: 'Spathiphyllum wallisii',
    description: 'A flowering plant with green leaves and white flowers.',
    sunlight: 'Bright, indirect light',
    water: 'Keep the soil slightly moist.',
  },
];

export default function PlantIdentification() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Identify a Plant 🌿</Text>
      <Text style={styles.subtitle}>
        Select a sample plant to learn more about it.
      </Text>

      {plants.map((plant) => (
        <TouchableOpacity
          key={plant.id}
          style={styles.card}
          onPress={() =>
            router.push({
              pathname: '/plant-details',
              params: {
                id: plant.id,
                name: plant.name,
                scientificName: plant.scientificName,
                description: plant.description,
                sunlight: plant.sunlight,
                water: plant.water,
              },
            })
          }
        >
          <Text style={styles.plantName}>{plant.name}</Text>
          <Text style={styles.scientific}>{plant.scientificName}</Text>
          <Text style={styles.link}>View Plant Details →</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7FAF5',
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2F6B45',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#667766',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 15,
    marginBottom: 15,
    elevation: 2,
  },
  plantName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#315E3D',
  },
  scientific: {
    fontSize: 13,
    fontStyle: 'italic',
    color: '#777777',
    marginTop: 5,
  },
  link: {
    color: '#397A4B',
    fontWeight: 'bold',
    marginTop: 15,
  },
});
