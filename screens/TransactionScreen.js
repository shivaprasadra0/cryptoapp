import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from '../components/Button';
import InputField from '../components/InputField';
import LoadingIndicator from '../components/LoadingIndicator';

const TransactionScreen = () => {
  const [receiverAddress, setReceiverAddress] = useState('');
  const [amount, setAmount] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSendTransaction = () => {
    setLoading(true);
    walletStore.setReceiverAddress(receiverAddress);
    walletStore.setAmount(amount);
    setLoading(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Send Transaction</Text>
      <InputField
        placeholder="Receiver Address"
        value={receiverAddress}
        onChangeText={setReceiverAddress}
      />
      <InputField
        placeholder="Amount"
        value={amount}
        onChangeText={setAmount}
        keyboardType="numeric"
      />
      <Button title="Send Transaction" onPress={handleSendTransaction} />
      {loading && <LoadingIndicator />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});

export default TransactionScreen;
