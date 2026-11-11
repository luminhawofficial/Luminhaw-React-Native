
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>🌿 Luminhaw</Text>
        <Text style={styles.subtitle}>
          Know Your Plants, Nurture Their Future.
        </Text>
      </View>

      <View style={styles.welcome}>
        <Text style={styles.welcomeTitle}>Welcome, Plant Lover!</Text>
        <Text style={styles.description}>
          Discover plants and learn how to keep them healthy.
        </Text>
      </View>

      <Text style={styles.sectionTitle}>Explore Features</Text>

      <TouchableOpacity
        style={styles.card}
        onPress={() => router.push('/plant-identification')}
      >
        <Text style={styles.icon}>🔍</Text>
        <View style={styles.cardText}>
          <Text style={styles.cardTitle}>Plant Identification</Text>
          <Text style={styles.cardDescription}>
            Discover the name and information of plants.
          </Text>
        </View>
        <Text style={styles.arrow}>›</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.card}
        onPress={() => router.push('/disease-detection')}
      >
        <Text style={styles.icon}>🍃</Text>
        <View style={styles.cardText}>
          <Text style={styles.cardTitle}>Disease Detection</Text>
          <Text style={styles.cardDescription}>
            Learn about common plant diseases and symptoms.
          </Text>
        </View>
        <Text style={styles.arrow}>›</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.card}
        onPress={() => router.push('/nutrient-deficiency')}
      >
        <Text style={styles.icon}>🌱</Text>
        <View style={styles.cardText}>
          <Text style={styles.cardTitle}>Nutrient Deficiency</Text>
          <Text style={styles.cardDescription}>
            Understand nutrient deficiencies in plants.
          </Text>
        </View>
        <Text style={styles.arrow}>›</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.card}
        onPress={() => router.push('/soil-identification')}
      >
        <Text style={styles.icon}>🪴</Text>
        <View style={styles.cardText}>
          <Text style={styles.cardTitle}>Soil Identification</Text>
          <Text style={styles.cardDescription}>
            Explore different soil types and characteristics.
          </Text>
        </View>
        <Text style={styles.arrow}>›</Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Grow with knowledge. Care with confidence. 🌿
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
    marginTop: 25,
    marginBottom: 30,
  },
  logo: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#2F6B45',
  },
  subtitle: {
    fontSize: 13,
    color: '#66816A',
    marginTop: 5,
  },
  welcome: {
    backgroundColor: '#E4F0E2',
    padding: 22,
    borderRadius: 18,
    marginBottom: 28,
  },
  welcomeTitle: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#285A39',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: '#526B55',
    lineHeight: 21,
  },
  sectionTitle: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#294D35',
    marginBottom: 15,
  },
  card: {
    backgroundColor: '#FFFFFF',
    padding: 17,
    borderRadius: 15,
    marginBottom: 13,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 2,
  },
  icon: {
    fontSize: 28,
    marginRight: 14,
  },
  cardText: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#315E3D',
  },
  cardDescription: {
    fontSize: 12,
    color: '#777777',
    marginTop: 5,
  },
  arrow: {
    fontSize: 27,
    color: '#4B8055',
    marginLeft: 8,
  },
  footer: {
    paddingVertical: 25,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 12,
    color: '#66816A',
  },
});
