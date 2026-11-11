
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function DiseaseDetection() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Disease Detection 🍃</Text>

      <Text style={styles.subtitle}>
        Learn about common plant diseases and their symptoms.
      </Text>

      <View style={styles.infoCard}>
        <Text style={styles.diseaseName}>🍂 Leaf Spot</Text>
        <Text style={styles.label}>Common Symptoms</Text>
        <Text style={styles.description}>
          Brown or black spots appearing on plant leaves.
        </Text>
        <Text style={styles.label}>Possible Cause</Text>
        <Text style={styles.description}>
          Fungal or bacterial infections.
        </Text>
        <Text style={styles.label}>Suggested Care</Text>
        <Text style={styles.description}>
          Remove affected leaves, avoid wetting the foliage,
          and improve air circulation.
        </Text>
      </View>

      <View style={styles.infoCard}>
        <Text style={styles.diseaseName}>🌱 Powdery Mildew</Text>
        <Text style={styles.label}>Common Symptoms</Text>
        <Text style={styles.description}>
          White powder-like patches on leaves and stems.
        </Text>
        <Text style={styles.label}>Possible Cause</Text>
        <Text style={styles.description}>
          Fungal growth encouraged by suitable humidity
          and poor air circulation.
        </Text>
        <Text style={styles.label}>Suggested Care</Text>
        <Text style={styles.description}>
          Remove severely affected leaves and improve
          airflow around the plant.
        </Text>
      </View>

      <View style={styles.notice}>
        <Text style={styles.noticeText}>
          Note: These are sample disease references,
          not results from an actual AI diagnosis.
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
    lineHeight: 21,
  },
  infoCard: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 15,
    marginBottom: 15,
    elevation: 2,
  },
  diseaseName: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#315E3D',
    marginBottom: 15,
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#397A4B',
    marginTop: 10,
  },
  description: {
    fontSize: 13,
    color: '#555555',
    lineHeight: 21,
    marginTop: 5,
  },
  notice: {
    backgroundColor: '#E4F0E2',
    padding: 15,
    borderRadius: 12,
    marginBottom: 25,
  },
  noticeText: {
    fontSize: 12,
    color: '#526B55',
    lineHeight: 19,
  },
});
