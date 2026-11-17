
import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = 'luminhaw_saved_plants';

export async function getSavedPlants() {
  try {
    const saved = await AsyncStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  } catch (error) {
    console.log('Unable to load saved plants:', error);
    return [];
  }
}

export async function savePlant(plant: any) {
  const plants = await getSavedPlants();

  const exists = plants.some(
    (item: any) => String(item.id) === String(plant.id)
  );

  if (exists) {
    return false;
  }

  plants.push(plant);

  await AsyncStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(plants)
  );

  return true;
}

export async function removePlant(id: string) {
  const plants = await getSavedPlants();

  const updated = plants.filter(
    (item: any) => String(item.id) !== String(id)
  );

  await AsyncStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(updated)
  );
}
