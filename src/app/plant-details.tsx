
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function PlantDetails() {
  const {
    name,
    scientificName,
    description,
    sunlight,
    water,
  } = useLocalSearchParams();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.plantIcon}>🌿</Text>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.scientific}>{scientificName}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>Plant Information</Text>
        <Text style={styles.description}>{description}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>☀️ Sunlight Requirements</Text>
        <Text style={styles.description}>{sunlight}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>💧 Watering Guide</Text>
        <Text style={styles.description}>{water}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7FAF5',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    paddingVertical: 25,
  },
  plantIcon: {
    fontSize: 55,
    marginBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2F6B45',
    textAlign: 'center',
  },
  scientific: {
    fontSize: 14,
    fontStyle: 'italic',
    color: '#777777',
    marginTop: 5,
  },
  card: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 15,
    marginBottom: 15,
    elevation: 2,
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#315E3D',
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: '#555555',
    lineHeight: 22,
  },
});
