import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'

const HomeScreen = () => {
  const tokens = [
    { name: 'Ethereum', symbol: 'ETH', balance: '0.5' },
    { name: 'Tether', symbol: 'USDT', balance: '100' },
    { name: 'USD Coin', symbol: 'USDC', balance: '250' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.accountName}>Account 1</Text>
        <Text style={styles.balance}>$350.50</Text>
      </View>

      <View style={styles.actions}>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionText}>Send</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionText}>Receive</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={tokens}
        keyExtractor={(item) => item.symbol}
        renderItem={({ item }) => (
          <View style={styles.token}>
            <View>
              <Text style={styles.tokenName}>{item.name}</Text>
              <Text style={styles.tokenSymbol}>{item.symbol}</Text>
            </View>
            <Text style={styles.tokenBalance}>{item.balance}</Text>
          </View>
        )}
      />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#061A3C',
    padding: 16,
  },
  header:{
    alignItems: 'center',
    marginBottom: 32,
  },
  accountName:{
    fontSize:18,
    fontWeight:'600',
    color:'white',
  },
  balance:{
    fontSize:32,
    fontWeight:'bold',
    color:'white',
    marginTop: 8,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 32,
  },
  actionButton: {
    backgroundColor: '#357EC7',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 25,
  },
  actionText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  token: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#4F4F4F',
  },
  tokenName: {
    fontSize: 18,
    color: 'white',
  },
  tokenSymbol: {
    fontSize: 14,
    color: 'gray',
  },
  tokenBalance: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
  },
})