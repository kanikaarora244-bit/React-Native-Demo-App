import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

const SwapScreen = () => {
  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.header}>
        <Text style={styles.title}>Swap</Text>
        <Text style={styles.subtitle}>Swap tokens directly from your wallet.</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>From</Text>
        <View style={styles.row}>
          <TextInput
            style={styles.input}
            placeholder="0.5"
            placeholderTextColor="#6B7280"
            keyboardType="numeric"
          />
          <View style={styles.pill}>
            <Text style={styles.pillText}>ETH ▾</Text>
          </View>
        </View>

        <Text style={[styles.label, { marginTop: 18 }]}>To</Text>
        <View style={styles.row}>
          <TextInput
            style={styles.input}
            placeholder="850"
            placeholderTextColor="#6B7280"
            keyboardType="numeric"
          />
          <View style={styles.pill}>
            <Text style={styles.pillText}>USDC ▾</Text>
          </View>
        </View>

        <Text style={styles.rate}>Rate • 1 ETH ≈ 1,700 USDC</Text>
      </View>

      <View style={styles.feeRow}>
        <Text style={styles.feeLabel}>Network fee</Text>
        <Text style={styles.feeValue}>$4.23 • <Text style={styles.feeHighlight}>Market &lt; 30s</Text></Text>
      </View>

      <TouchableOpacity style={styles.primaryButton}>
        <Text style={styles.primaryLabel}>Review swap</Text>
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
  rate: {
    marginTop: 14,
    color: '#6B7280',
    fontSize: 12,
  },
  feeRow: {
    marginTop: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  feeLabel: {
    color: '#9CA3AF',
    fontSize: 13,
  },
  feeValue: {
    color: '#E5E7EB',
    fontSize: 13,
  },
  feeHighlight: {
    color: '#F97316',
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

export default SwapScreen;


