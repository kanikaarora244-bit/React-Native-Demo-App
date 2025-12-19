import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

const SendScreen = () => {
  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.header}>
        <Text style={styles.title}>Send</Text>
        <Text style={styles.subtitle}>Send tokens to another address.</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Recipient</Text>
        <TextInput
          style={styles.inputFull}
          placeholder="0x… or ENS name"
          placeholderTextColor="#6B7280"
        />

        <Text style={[styles.label, { marginTop: 16 }]}>Amount</Text>
        <View style={styles.row}>
          <TextInput
            style={styles.input}
            placeholder="0.25"
            placeholderTextColor="#6B7280"
            keyboardType="numeric"
          />
          <View style={styles.pill}>
            <Text style={styles.pillText}>ETH ▾</Text>
          </View>
        </View>

        <Text style={styles.helper}>Available: 3.23 ETH</Text>
      </View>

      <View style={styles.feeRow}>
        <Text style={styles.feeLabel}>Estimated fee</Text>
        <Text style={styles.feeValue}>$2.14 • 0.00048 ETH</Text>
      </View>

      <TouchableOpacity style={styles.primaryButton}>
        <Text style={styles.primaryLabel}>Review send</Text>
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
  inputFull: {
    height: 46,
    borderRadius: 14,
    backgroundColor: '#020617',
    borderWidth: 1,
    borderColor: '#374151',
    paddingHorizontal: 12,
    color: '#F9FAFB',
    fontSize: 16,
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
  helper: {
    marginTop: 8,
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

export default SendScreen;


