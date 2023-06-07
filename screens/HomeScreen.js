import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import axios from 'axios';

const HomeScreen = () => {
  const [bitcoinPrice, setBitcoinPrice] = useState('');
  const [usdtPrice, setUsdtPrice] = useState('');

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const response = await axios.get('https://api.coingecko.com/api/v3/simple/price', {
          params: {
            ids: 'bitcoin,usd-coin',
            vs_currencies: 'usd',
          },
        });
        setBitcoinPrice(response.data.bitcoin.usd);
        setUsdtPrice(response.data['usd-coin'].usd);
      } catch (error) {
        console.error('Error fetching prices:', error);
      }
    };

    fetchPrices();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bitcoin Price: ${bitcoinPrice}</Text>
      <Text style={styles.title}>USDT Price: ${usdtPrice}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
});

export default HomeScreen;
