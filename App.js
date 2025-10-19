import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import shopIcon from './assets/icons8shop1001.png'; // your shop image

export default function App() {
  return (
    <LinearGradient
      colors={['#FFF3D8', '#FBC8A8']} // adjust to match your gradient
      style={styles.container}
    >
      <View style={styles.content}>
        <Image source={shopIcon} style={styles.icon} />
        <Text style={styles.title}>sparks</Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    alignItems: 'center',
  },
  icon: {
    width: 90,
    height: 90,
    resizeMode: 'contain',
    marginBottom: 12,
  },
  title: {
    fontSize: 48,
    fontWeight: '600',
    color: '#A24A17', // rich brown like in your image
    fontFamily: 'Poppins-SemiBold', // optional if using a custom font
  },
});
