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
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/RootStack';

const TOKENS = [
  { name: 'Ethereum', symbol: 'ETH', balanceFiat: '$9,842.12', balance: '3.23' },
  { name: 'USDC', symbol: 'USDC', balanceFiat: '$1,012.40', balance: '1,012.40' },
  { name: 'ESDC', symbol: 'ESDC', balanceFiat: '$500.00', balance: '500.00' },
  { name: 'DAI Stablecoin', symbol: 'DAI', balanceFiat: '$2,340.00', balance: '2,340.00' },
  { name: 'Tether', symbol: 'USDT', balanceFiat: '$129.93', balance: '129.93' },
];

type Nav = StackNavigationProp<RootStackParamList>;

const getTokenIcon = (symbol: string) => {
  switch (symbol) {
    case 'ETH':
      return 'ethereum';
    case 'USDC':
    case 'ESDC':
    case 'DAI':
    case 'USDT':
      return 'currency-usd';
    default:
      return 'help-circle-outline';
  }
};

const WalletScreen = () => {
  const navigation = useNavigation<Nav>();

  return (
    <SafeAreaView style={styles.root}>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={{ paddingBottom: 32 }}
        showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.accountLabel}>Account 1</Text>
            <Text style={styles.network}>Ethereum Mainnet ▾</Text>
          </View>
          <View style={styles.headerRight}>
            <View style={styles.headerPill}>
              <Text style={styles.headerPillText}>●</Text>
              <Text style={styles.headerPillText}>  Connected</Text>
            </View>
          </View>
        </View>

        {/* Balance card */}
        <View style={styles.balanceCard}>
          <Text style={styles.balanceLabel}>Total Balance</Text>
          <Text style={styles.balanceValue}>$12,663.22</Text>
          <Text style={styles.balanceChange}>+ $367.00 (+0.66%) today</Text>

          <View style={styles.quickRow}>
            <TouchableOpacity style={styles.chip}>
              <Text style={styles.chipText}>Tokens</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.chipSecondary}>
              <Text style={styles.chipSecondaryText}>Perps</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.chipSecondary}>
              <Text style={styles.chipSecondaryText}>DeFi</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.chipSecondary}>
              <Text style={styles.chipSecondaryText}>NFTs</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Primary actions */}
        <View style={styles.actionsRow}>
          <TouchableOpacity
            style={styles.actionButton}
            onPress={() => navigation.navigate('Buy')}
          >
            <View style={styles.actionCircle}>
              <MCIcon name="credit-card-outline" size={22} color="#F9FAFB" />
            </View>
            <Text style={styles.actionLabel}>Buy</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.actionButton}
            onPress={() => navigation.navigate('Swap')}
          >
            <View style={styles.actionCircle}>
              <MCIcon name="swap-horizontal" size={24} color="#F9FAFB" />
            </View>
            <Text style={styles.actionLabel}>Swap</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.actionButton}
            onPress={() => navigation.navigate('Send')}
          >
            <View style={styles.actionCircle}>
              <MCIcon name="arrow-top-right" size={22} color="#F9FAFB" />
            </View>
            <Text style={styles.actionLabel}>Send</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.actionButton}
            onPress={() => navigation.navigate('Receive')}
          >
            <View style={styles.actionCircle}>
              <MCIcon name="arrow-bottom-left" size={22} color="#F9FAFB" />
            </View>
            <Text style={styles.actionLabel}>Receive</Text>
          </TouchableOpacity>
        </View>

        {/* Tokens list */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Popular networks</Text>
          <Text style={styles.sectionLink}>Filter ▾</Text>
        </View>

        <View style={styles.listCard}>
          <Text style={styles.listTitle}>You could earn <Text style={styles.highlight}>$417</Text></Text>
          <Text style={styles.listSubtitle}>per year on your tokens</Text>

          {TOKENS.map((t, index) => (
            <View key={t.symbol} style={[styles.tokenRow, index === 0 && { marginTop: 16 }]}>
              <View style={styles.tokenIcon}>
                <MCIcon name={getTokenIcon(t.symbol)} size={18} color="#F97316" />
              </View>
              <View style={styles.tokenTextBlock}>
                <Text style={styles.tokenName}>{t.name}</Text>
                <Text style={styles.tokenSymbol}>{t.symbol}</Text>
              </View>
              <View style={styles.tokenRight}>
                <Text style={styles.tokenApr}>3.0% APR</Text>
                <Text style={styles.tokenBalance}>{t.balance}</Text>
              </View>
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
    paddingTop: 12,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  accountLabel: {
    color: '#F9FAFB',
    fontSize: 18,
    fontWeight: '700',
  },
  network: {
    marginTop: 4,
    color: '#9CA3AF',
    fontSize: 13,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerPill: {
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 4,
    backgroundColor: '#111827',
    borderWidth: 1,
    borderColor: '#1F2937',
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerPillText: {
    color: '#D1D5DB',
    fontSize: 12,
  },
  balanceCard: {
    backgroundColor: '#020617',
    borderRadius: 24,
    padding: 20,
    borderWidth: 1,
    borderColor: '#1F2937',
    marginBottom: 18,
  },
  balanceLabel: {
    color: '#9CA3AF',
    fontSize: 13,
    marginBottom: 4,
  },
  balanceValue: {
    color: '#F9FAFB',
    fontSize: 32,
    fontWeight: '800',
  },
  balanceChange: {
    color: '#22C55E',
    fontSize: 13,
    marginTop: 4,
  },
  quickRow: {
    flexDirection: 'row',
    marginTop: 18,
  },
  chip: {
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 999,
    backgroundColor: '#F97316',
    marginRight: 8,
  },
  chipText: {
    color: '#111827',
    fontSize: 13,
    fontWeight: '700',
  },
  chipSecondary: {
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 999,
    backgroundColor: '#111827',
    marginRight: 8,
  },
  chipSecondaryText: {
    color: '#E5E7EB',
    fontSize: 13,
  },
  actionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 22,
  },
  actionButton: {
    flex: 1,
    alignItems: 'center',
  },
  actionCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#111827',
    borderWidth: 1,
    borderColor: '#1F2937',
    marginBottom: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionLabel: {
    color: '#E5E7EB',
    fontSize: 13,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  sectionTitle: {
    color: '#9CA3AF',
    fontSize: 13,
  },
  sectionLink: {
    color: '#F97316',
    fontSize: 13,
    fontWeight: '600',
  },
  listCard: {
    backgroundColor: '#020617',
    borderRadius: 24,
    padding: 18,
    borderWidth: 1,
    borderColor: '#1F2937',
  },
  listTitle: {
    color: '#E5E7EB',
    fontSize: 15,
    fontWeight: '700',
  },
  highlight: {
    color: '#22C55E',
  },
  listSubtitle: {
    color: '#9CA3AF',
    fontSize: 12,
    marginTop: 2,
    marginBottom: 6,
  },
  tokenRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#111827',
  },
  tokenIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#111827',
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tokenTextBlock: {
    flex: 1,
  },
  tokenName: {
    color: '#E5E7EB',
    fontSize: 14,
    fontWeight: '600',
  },
  tokenSymbol: {
    color: '#6B7280',
    fontSize: 12,
  },
  tokenRight: {
    alignItems: 'flex-end',
  },
  tokenApr: {
    color: '#F97316',
    fontSize: 12,
    fontWeight: '600',
  },
  tokenBalance: {
    color: '#9CA3AF',
    fontSize: 12,
    marginTop: 2,
  },
});

export default WalletScreen;
