
import { useState } from 'react';

import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import { router } from 'expo-router';
import { searchPlants } from '../services/plantAPI';

export default function PlantIdentification() {
  const [query, setQuery] = useState('');
  const [plants, setPlants] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleSearch() {
    if (!query.trim()) {
      setError('Please enter a plant name.');
      return;
    }

    try {
      setLoading(true);
      setError('');
      setPlants([]);

      const results = await searchPlants(query.trim());

      setPlants(results);

      if (results.length === 0) {
        setError('No plants found. Try another name.');
      }
    } catch (err: any) {
      setError(err.message || 'Unable to search plants.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Identify a Plant 🌿</Text>

      <Text style={styles.subtitle}>
        Search for plants by their common or scientific name.
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Enter plant name (e.g. Bok Choy)"
        placeholderTextColor="#888"
        value={query}
        onChangeText={setQuery}
        onSubmitEditing={handleSearch}
        returnKeyType="search"
      />

      <TouchableOpacity
        style={styles.searchButton}
        onPress={handleSearch}
        disabled={loading}
      >
        <Text style={styles.searchButtonText}>
          {loading ? 'Searching...' : 'Search Plants'}
        </Text>
      </TouchableOpacity>

      {loading && (
        <ActivityIndicator
          size="large"
          color="#2F6B45"
          style={{ marginTop: 20 }}
        />
      )}

      {!!error && (
        <Text style={styles.error}>{error}</Text>
      )}

      <FlatList
        data={plants}
        keyExtractor={(item) => String(item.id)}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ paddingBottom: 30 }}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() =>
              router.push({
                pathname: '/plant-details',
                params: {
                  id: String(item.id),
                  name: item.common_name || item.scientific_name,
                  scientificName: item.scientific_name || '',
                  family: item.family || '',
                  imageUrl: item.image_url || '',
                },
              })
            }
          >
            <Text style={styles.plantName}>
              {item.common_name || item.scientific_name}
            </Text>

            <Text style={styles.scientific}>
              {item.scientific_name}
            </Text>

            <Text style={styles.family}>
              Family: {item.family || 'Not available'}
            </Text>

            <Text style={styles.link}>
              View Plant Details →
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
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
  input: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#D5E2D4',
    borderRadius: 12,
    padding: 15,
    fontSize: 15,
    marginBottom: 12,
  },
  searchButton: {
    backgroundColor: '#2F6B45',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
  },
  searchButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  card: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 15,
    marginTop: 15,
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
  family: {
    fontSize: 13,
    color: '#667766',
    marginTop: 8,
  },
  link: {
    color: '#397A4B',
    fontWeight: 'bold',
    marginTop: 15,
  },
  error: {
    color: '#C0392B',
    marginTop: 15,
    textAlign: 'center',
  },
});
