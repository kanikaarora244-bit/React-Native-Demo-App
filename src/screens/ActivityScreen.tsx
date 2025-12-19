import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const MOCK_ACTIVITY = [
  { id: '1', title: 'Swap ETH → USDC', status: 'Completed', time: '2 min ago', amount: '-0.30 ETH' },
  { id: '2', title: 'Received USDT', status: 'Completed', time: '1 hr ago', amount: '+100.00 USDT' },
  { id: '3', title: 'Approved Uniswap', status: 'Confirmed', time: 'Yesterday', amount: '$0.00' },
];

const ActivityScreen = () => {
  return (
    <SafeAreaView style={styles.root}>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={{ paddingBottom: 32 }}
        showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Activity</Text>
        <Text style={styles.subtitle}>Your most recent swaps, sends, and dapp approvals.</Text>

        <View style={styles.card}>
          {MOCK_ACTIVITY.map((item, index) => (
            <View
              key={item.id}
              style={[
                styles.row,
                index !== 0 && { borderTopWidth: 1, borderTopColor: '#111827' },
              ]}>
              <View style={styles.avatar}>
                <MCIcon name="account-circle" size={20} color="#F9FAFB" />
              </View>
              <View style={styles.rowMiddle}>
                <Text style={styles.rowTitle}>{item.title}</Text>
                <Text style={styles.rowMeta}>{item.time} • {item.status}</Text>
              </View>
              <Text style={styles.rowAmount}>{item.amount}</Text>
            </View>
          ))}
        </View>
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
  card: {
    backgroundColor: '#020617',
    borderRadius: 24,
    borderWidth: 1,
    borderColor: '#1F2937',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#111827',
    marginRight: 12,
  },
  rowMiddle: {
    flex: 1,
  },
  rowTitle: {
    color: '#E5E7EB',
    fontSize: 14,
    fontWeight: '600',
  },
  rowMeta: {
    color: '#6B7280',
    fontSize: 12,
    marginTop: 2,
  },
  rowAmount: {
    color: '#E5E7EB',
    fontSize: 13,
    fontWeight: '600',
  },
});

export default ActivityScreen;
