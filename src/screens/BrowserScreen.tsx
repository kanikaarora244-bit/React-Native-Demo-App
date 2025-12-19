import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const POPULAR_DAPPS = [
  { name: 'Uniswap', url: 'https://app.uniswap.org', tag: 'DEX' },
  { name: 'Aave', url: 'https://app.aave.com', tag: 'Lending' },
  { name: 'OpenSea', url: 'https://opensea.io', tag: 'NFTs' },
];

const BrowserScreen = () => {
  return (
    <SafeAreaView style={styles.root}>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={{ paddingBottom: 32 }}
        showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Browser</Text>
        <Text style={styles.subtitle}>Connect to your favorite dapps in a few taps.</Text>

        <View style={styles.searchBar}>
          <Text style={styles.searchText}>Search or enter dapp URL</Text>
        </View>

        <Text style={styles.sectionTitle}>Popular dapps</Text>
        {POPULAR_DAPPS.map(dapp => (
          <TouchableOpacity key={dapp.url} style={styles.dappRow}>
            <View style={styles.dappIcon}>
              <MCIcon name="hexagon-slice-6" size={18} color="#F97316" />
            </View>
            <View style={styles.dappMiddle}>
              <Text style={styles.dappName}>{dapp.name}</Text>
              <Text style={styles.dappUrl}>{dapp.url}</Text>
            </View>
            <View style={styles.tagPill}>
              <Text style={styles.tagText}>{dapp.tag}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#0B1220',
  },
  scroll: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 16,
  },
  title: {
    color: '#F9FAFB',
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 4,
  },
  subtitle: {
    color: '#9CA3AF',
    fontSize: 13,
    marginBottom: 18,
  },
  searchBar: {
    backgroundColor: '#020617',
    borderRadius: 999,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: '#1F2937',
    marginBottom: 20,
  },
  searchText: {
    color: '#6B7280',
    fontSize: 13,
  },
  sectionTitle: {
    color: '#9CA3AF',
    fontSize: 13,
    marginBottom: 8,
  },
  dappRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#111827',
  },
  dappIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#111827',
    marginRight: 12,
  },
  dappMiddle: {
    flex: 1,
  },
  dappName: {
    color: '#E5E7EB',
    fontSize: 14,
    fontWeight: '600',
  },
  dappUrl: {
    color: '#6B7280',
    fontSize: 12,
    marginTop: 2,
  },
  tagPill: {
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 4,
    backgroundColor: '#111827',
  },
  tagText: {
    color: '#F97316',
    fontSize: 11,
    fontWeight: '600',
  },
});

export default BrowserScreen;
