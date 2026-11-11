
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function SoilIdentification() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Soil Identification 🪴</Text>

      <Text style={styles.subtitle}>
        Explore common soil types and their characteristics.
      </Text>

      <View style={styles.card}>
        <Text style={styles.title}>🌱 Sandy Soil</Text>
        <Text style={styles.label}>Characteristics</Text>
        <Text style={styles.description}>
          Has large particles, feels gritty, and drains water quickly.
        </Text>
        <Text style={styles.label}>Suitable Plants</Text>
        <Text style={styles.description}>
          Cacti, succulents, and other drought-tolerant plants.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>🌿 Clay Soil</Text>
        <Text style={styles.label}>Characteristics</Text>
        <Text style={styles.description}>
          Has very fine particles, holds water, and feels sticky when wet.
        </Text>
        <Text style={styles.label}>Suitable Plants</Text>
        <Text style={styles.description}>
          Rice, some ornamental plants, and moisture-tolerant plants.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>🍃 Loamy Soil</Text>
        <Text style={styles.label}>Characteristics</Text>
        <Text style={styles.description}>
          A mixture of sand, silt, and clay that generally provides
          good drainage and moisture retention.
        </Text>
        <Text style={styles.label}>Suitable Plants</Text>
        <Text style={styles.description}>
          Many vegetables, herbs, and garden plants.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>🌾 Silty Soil</Text>
        <Text style={styles.label}>Characteristics</Text>
        <Text style={styles.description}>
          Has fine, smooth particles and can retain moisture and nutrients.
        </Text>
        <Text style={styles.label}>Suitable Plants</Text>
        <Text style={styles.description}>
          Many vegetables and plants that grow well in moisture-retaining soil.
        </Text>
      </View>

      <View style={styles.notice}>
        <Text style={styles.noticeText}>
          Note: These are sample soil references.
          Actual soil identification may require a physical soil test.
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
