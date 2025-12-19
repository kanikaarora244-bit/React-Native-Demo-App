import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

const BuyScreen = () => {
  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.header}>
        <Text style={styles.title}>Buy</Text>
        <Text style={styles.subtitle}>Purchase crypto using a card or bank transfer.</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>You pay</Text>
        <View style={styles.row}>
          <TextInput
            style={styles.input}
            placeholder="$500"
            placeholderTextColor="#6B7280"
            keyboardType="numeric"
          />
          <View style={styles.pill}>
            <Text style={styles.pillText}>USD ▾</Text>
          </View>
        </View>

        <Text style={[styles.label, { marginTop: 18 }]}>You receive</Text>
        <View style={styles.row}>
          <TextInput
            style={styles.input}
            placeholder="0.15"
            placeholderTextColor="#6B7280"
            keyboardType="numeric"
          />
          <View style={styles.pill}>
            <Text style={styles.pillText}>ETH ▾</Text>
          </View>
        </View>
      </View>

      <View style={styles.providersCard}>
        <Text style={styles.providersTitle}>Providers</Text>
        <Text style={styles.providersRow}>MoonPay • Best rate</Text>
        <Text style={styles.providersRow}>Transak • Fastest</Text>
      </View>

      <TouchableOpacity style={styles.primaryButton}>
        <Text style={styles.primaryLabel}>Continue</Text>
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
  },
  label: {
    color: '#9CA3AF',
    fontSize: 13,
    marginBottom: 6,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    height: 46,
    borderRadius: 14,
    backgroundColor: '#020617',
    borderWidth: 1,
    borderColor: '#374151',
    paddingHorizontal: 12,
    color: '#F9FAFB',
    fontSize: 16,
  },
  pill: {
    marginLeft: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 999,
    backgroundColor: '#111827',
  },
  pillText: {
    color: '#E5E7EB',
    fontSize: 13,
    fontWeight: '600',
  },
  providersCard: {
    marginTop: 16,
    padding: 16,
    borderRadius: 20,
    backgroundColor: '#020617',
    borderWidth: 1,
    borderColor: '#1F2937',
  },
  providersTitle: {
    color: '#9CA3AF',
    fontSize: 13,
    marginBottom: 8,
  },
  providersRow: {
    color: '#E5E7EB',
    fontSize: 14,
    marginTop: 4,
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

export default BuyScreen;


