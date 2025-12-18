import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image, ScrollView, TouchableOpacity } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/RootStack';

type Props = NativeStackScreenProps<RootStackParamList, 'Onboarding'>;

const { width, height } = Dimensions.get('window');

const slides: number[] = [
  // require('../../assets/onboard-1.png'),
  // require('../../assets/onboard-2.png'),
  // require('../../assets/onboard-3.png'),
];

const Onboarding: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ alignItems: 'center' }}
      >
        {slides.map((s, i) => (
          <View key={String(i)} style={[styles.slide, { width }]}>
            <Text style={{color: '#fff'}}>Onboarding Slide {i+1}</Text>
          </View>
        ))}
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.doneButton} onPress={() => navigation.replace('MainTabs')}>
          <Text style={styles.doneText}>Done</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000' },
  slide: { justifyContent: 'center', alignItems: 'center', height },
  image: { width: '86%', height: '82%', borderRadius: 28, borderWidth: 8, borderColor: '#fff' },
  footer: { position: 'absolute', bottom: 40, left: 0, right: 0, alignItems: 'center' },
  doneButton: { backgroundColor: '#fff', paddingHorizontal: 28, paddingVertical: 12, borderRadius: 12 },
  doneText: { color: '#000', fontWeight: '700' },
});

export default Onboarding;
