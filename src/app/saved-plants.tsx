
import { useCallback, useState } from 'react';
import {
    Alert,
    FlatList,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

import { useFocusEffect } from 'expo-router';
import {
    getSavedPlants,
    removePlant,
} from '../services/savedPlants';

export default function SavedPlants() {
  const [plants, setPlants] = useState<any[]>([]);

  const loadPlants = async () => {
    const data = await getSavedPlants();
    setPlants(data);
  };

  useFocusEffect(
    useCallback(() => {
      loadPlants();
    }, [])
  );

  async function handleRemove(id: string) {
    Alert.alert(
      'Remove Plant',
      'Are you sure you want to remove this plant?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Remove',
          style: 'destructive',
          onPress: async () => {
            await removePlant(id);
            await loadPlants();
          },
        },
      ]
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>My Saved Plants 🌿</Text>

      <FlatList
        data={plants}
        keyExtractor={(item) => String(item.id)}
        ListEmptyComponent={
          <Text style={styles.empty}>
            You haven't saved any plants yet.
          </Text>
        }
        renderItem={({ item }) => (
          <View style={styles.card}>
            {item.image_url ? (
              <Image
                source={{ uri: item.image_url }}
                style={styles.image}
              />
            ) : null}

            <View style={styles.info}>
              <Text style={styles.name}>
                {item.common_name}
              </Text>

              <Text style={styles.scientific}>
                {item.scientific_name}
              </Text>

              <TouchableOpacity
                onPress={() => handleRemove(String(item.id))}
              >
                <Text style={styles.remove}>Remove</Text>
              </TouchableOpacity>
            </View>
          </View>
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
    marginBottom: 20,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 15,
    marginBottom: 15,
    elevation: 2,
    alignItems: 'center',
  },
  image: {
    width: 75,
    height: 75,
    borderRadius: 10,
  },
  info: {
    flex: 1,
    marginLeft: 12,
  },
  name: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#315E3D',
  },
  scientific: {
    fontSize: 13,
    color: '#777777',
    fontStyle: 'italic',
    marginVertical: 5,
  },
  remove: {
    color: '#D9534F',
    fontWeight: 'bold',
    marginTop: 5,
  },
  empty: {
    textAlign: 'center',
    color: '#777777',
    marginTop: 50,
  },
});
