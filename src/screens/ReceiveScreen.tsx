import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ReceiveScreen = () => {
  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.header}>
        <Text style={styles.title}>Receive</Text>
        <Text style={styles.subtitle}>Share your address to receive tokens.</Text>
      </View>

      <View style={styles.card}>
        <View style={styles.qrPlaceholder}>
          <Text style={styles.qrText}>QR CODE</Text>
        </View>
        <Text style={styles.addressLabel}>Your address</Text>
        <Text style={styles.addressValue} numberOfLines={1}>
          0x1234…89AB
        </Text>

        <TouchableOpacity style={styles.secondaryButton}>
          <Text style={styles.secondaryLabel}>Copy address</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.primaryButton}>
        <Text style={styles.primaryLabel}>Share</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#0B1220',
    paddingHorizontal: 20,
    paddingTop: 16,
  },
  header: {
    marginBottom: 16,
  },
  title: {
    color: '#F9FAFB',
    fontSize: 22,
    fontWeight: '700',
  },
  subtitle: {
    color: '#9CA3AF',
    fontSize: 13,
    marginTop: 4,
  },
  card: {
    backgroundColor: '#020617',
    borderRadius: 24,
    borderWidth: 1,
    borderColor: '#1F2937',
    padding: 16,
    alignItems: 'center',
  },
  qrPlaceholder: {
    width: 180,
    height: 180,
    borderRadius: 24,
    borderWidth: 2,
    borderColor: '#374151',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  qrText: {
    color: '#4B5563',
    fontSize: 14,
    fontWeight: '600',
  },
  addressLabel: {
    color: '#9CA3AF',
    fontSize: 13,
    marginBottom: 4,
  },
  addressValue: {
    color: '#E5E7EB',
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 12,
  },
  secondaryButton: {
    borderRadius: 999,
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#4B5563',
  },
  secondaryLabel: {
    color: '#E5E7EB',
    fontSize: 13,
    fontWeight: '600',
  },
  primaryButton: {
    marginTop: 24,
    height: 52,
    borderRadius: 999,
    backgroundColor: '#F97316',
    justifyContent: 'center',
    alignItems: 'center',
  },
  primaryLabel: {
    color: '#111827',
    fontSize: 16,
    fontWeight: '700',
  },
});

export default ReceiveScreen;


