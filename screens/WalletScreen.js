import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from '../components/Button';
import InputField from '../components/InputField';

const WalletScreen = () => {
  const [privateKey, setPrivateKey] = useState('');
  const [network, setNetwork] = useState('bitcoin');

  const handleImportWallet = () => {
    let isValidAddress = false;

    if (network === 'bitcoin') {
      isValidAddress = verifyBitcoinAddress(privateKey);
    } else if (network === 'polygon') {
      isValidAddress = verifyPolygonAddress(privateKey);
    }

    if (isValidAddress) {
      walletStore.setPrivateKey(privateKey);
      setAddressError('');
    } else {
      setAddressError('Invalid address');
    }
  };

  const handleNetworkChange = (selectedNetwork) => {
    setNetwork(selectedNetwork);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Import Wallet</Text>
      <InputField
        placeholder="Private Key"
        value={privateKey}
        onChangeText={setPrivateKey}
        secureTextEntry
      />
      <Button title="Import Wallet" onPress={handleImportWallet} />
      <View style={styles.networkContainer}>
        <Text style={styles.networkTitle}>Select Network:</Text>
        <Button
          title="Bitcoin"
          onPress={() => handleNetworkChange('bitcoin')}
          style={[styles.networkButton, network === 'bitcoin' && styles.activeNetwork]}
        />
        <Button
          title="Polygon"
          onPress={() => handleNetworkChange('polygon')}
          style={[styles.networkButton, network === 'polygon' && styles.activeNetwork]}
        />
      </View>
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
  networkContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
  },
  networkTitle: {
    marginRight: 8,
  },
  networkButton: {
    marginHorizontal: 4,
  },
  activeNetwork: {
    backgroundColor: '#007bff',
  },
});

export default WalletScreen;
