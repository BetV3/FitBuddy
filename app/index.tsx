import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import { Link, useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>

      {/* Title and Subtitle */}
      <Text style={styles.title}>Get Started</Text>
      <Text style={styles.subtitle}>
        Plan, track, and connect with friends for motivation!
      </Text>

      {/* Image */}
      <Image
        source={require('../assets/images/homeWeightlifting.png')} // Update with the correct image path
        style={styles.image}
        resizeMode="contain"
      />

      {/* Go Button */}
      <TouchableOpacity style={styles.goButton} onPress={() => console.log('Go button pressed')}>
        <Link href="/login">Go</Link>
      </TouchableOpacity>
    </View>
  );
};

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
  },
  backButtonText: {
    color: '#fff',
    fontSize: 20,
  },
  title: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 40,
  },
  subtitle: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
  },
  image: {
    width: width * 0.8,
    height: width * 0.6,
    marginVertical: 20,
  },
  goButton: {
    backgroundColor: '#00ff00',
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 30,
  },
  goButtonText: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
