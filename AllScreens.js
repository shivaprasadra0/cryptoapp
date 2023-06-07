import React from 'react';
import { View, StyleSheet } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import WalletScreen from './screens/WalletScreen';
import TransactionScreen from './screens/TransactionScreen';

const AllScreens = () => {
  return (
    <View style={styles.container}>
      <HomeScreen />
      <WalletScreen />
      <TransactionScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default AllScreens;
