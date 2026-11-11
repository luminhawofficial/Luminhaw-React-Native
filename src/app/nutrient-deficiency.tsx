
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function NutrientDeficiency() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Nutrient Deficiency 🌱</Text>

      <Text style={styles.subtitle}>
        Learn how nutrient deficiencies affect plant growth.
      </Text>

      <View style={styles.card}>
        <Text style={styles.title}>🍃 Nitrogen Deficiency</Text>
        <Text style={styles.label}>Common Symptoms</Text>
        <Text style={styles.description}>
          Older leaves turn yellow, and plant growth may become slow.
        </Text>
        <Text style={styles.label}>Suggested Care</Text>
        <Text style={styles.description}>
          Consider a balanced fertilizer containing nitrogen.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>🌿 Potassium Deficiency</Text>
        <Text style={styles.label}>Common Symptoms</Text>
        <Text style={styles.description}>
          Leaf edges become yellow or brown, sometimes appearing scorched.
        </Text>
        <Text style={styles.label}>Suggested Care</Text>
        <Text style={styles.description}>
          Use a fertilizer with an appropriate potassium content.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>🌱 Iron Deficiency</Text>
        <Text style={styles.label}>Common Symptoms</Text>
        <Text style={styles.description}>
          Young leaves turn yellow while their veins remain green.
        </Text>
        <Text style={styles.label}>Suggested Care</Text>
        <Text style={styles.description}>
          Check soil pH and consider an appropriate iron supplement.
        </Text>
      </View>

      <View style={styles.notice}>
        <Text style={styles.noticeText}>
          Note: These are sample nutrient deficiency references,
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
  card: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 15,
    marginBottom: 15,
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#315E3D',
    marginBottom: 12,
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
