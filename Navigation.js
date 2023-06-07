import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import WalletScreen from './screens/WalletScreen';
import TransactionScreen from './screens/TransactionScreen';
import AllScreens from './AllScreens';
const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }} />
        <Stack.Screen name="Wallet" component={WalletScreen} options={{ title: 'Wallet' }} />
        <Stack.Screen
          name="Transaction"
          component={TransactionScreen}
          options={{ title: 'Transaction' }}
        /> */}
        {<Stack.Screen name="AllScreens" component={AllScreens} options={{ title: 'AllScreens' }} /> }

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
