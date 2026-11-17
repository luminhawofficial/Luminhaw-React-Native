
import { useEffect, useState } from 'react';

import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { useLocalSearchParams } from 'expo-router';
import {
  getSavedPlants,
  savePlant,
} from '../services/savedPlants';

export default function PlantDetails() {
  const {
    id,
    name,
    scientificName,
    description,
    sunlight,
    water,
    family,
    imageUrl,
  } = useLocalSearchParams<{
    id: string;
    name: string;
    scientificName: string;
    description?: string;
    sunlight?: string;
    water?: string;
    family?: string;
    imageUrl?: string;
  }>();

  const [isSaved, setIsSaved] = useState(false);

  const plant = {
    id: String(id),
    common_name: name || 'Unknown Plant',
    scientific_name: scientificName || 'Not available',
    description: description || 'No description available.',
    sunlight: sunlight || 'Not available',
    water: water || 'Not available',
    family: family || 'Not available',
    image_url: imageUrl || '',
  };

  useEffect(() => {
    async function checkSaved() {
      const saved = await getSavedPlants();

      setIsSaved(
        saved.some(
          (item: any) => String(item.id) === String(id)
        )
      );
    }

    checkSaved();
  }, [id]);

  async function handleSavePlant() {
    try {
      const result = await savePlant(plant);

      if (result) {
        setIsSaved(true);
        Alert.alert(
          'Plant Saved!',
          `${plant.common_name} has been added to your Saved Plants.`
        );
      } else {
        setIsSaved(true);
        Alert.alert(
          'Already Saved',
          'This plant is already in your Saved Plants.'
        );
      }
    } catch (error) {
      Alert.alert('Error', 'Unable to save this plant.');
    }
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        {plant.image_url ? (
          <Image
            source={{ uri: plant.image_url }}
            style={styles.plantImage}
          />
        ) : (
          <Text style={styles.plantIcon}>🌿</Text>
        )}

        <Text style={styles.name}>
          {plant.common_name}
        </Text>

        <Text style={styles.scientific}>
          {plant.scientific_name}
        </Text>
      </View>

      <TouchableOpacity
        style={[
          styles.saveButton,
          isSaved && styles.savedButton,
        ]}
        onPress={handleSavePlant}
        disabled={isSaved}
      >
        <Text style={styles.saveButtonText}>
          {isSaved ? '✓ Plant Saved' : '＋ Save Plant'}
        </Text>
      </TouchableOpacity>

      <View style={styles.card}>
        <Text style={styles.title}>Plant Information</Text>
        <Text style={styles.description}>
          {plant.description}
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>🌱 Plant Family</Text>
        <Text style={styles.description}>
          {plant.family}
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>☀️ Sunlight Requirements</Text>
        <Text style={styles.description}>
          {plant.sunlight}
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>💧 Watering Guide</Text>
        <Text style={styles.description}>
          {plant.water}
        </Text>
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
  plantImage: {
    width: 180,
    height: 180,
    borderRadius: 15,
    marginBottom: 15,
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
  saveButton: {
    backgroundColor: '#2F6B45',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 20,
  },
  savedButton: {
    backgroundColor: '#6B9878',
  },
  saveButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
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
