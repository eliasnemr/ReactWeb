import React from 'react';

import {StyleSheet, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const styles = StyleSheet.create({
  home: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const HomeScreen = () => {
  return (
    <View style={styles.home}>
      <Text>HomeScreen</Text>
    </View>
  );
};

const StatusScreen = () => {
  return (
    <View style={styles.home}>
      <Text>StatusScreen</Text>
    </View>
  );
};

const linking = {
  prefixes: ['127.0.0.1', 'wallet://'],
  config: {
    screens: {
      Home: '',
      Status: '/status',
    },
  },
};

const Navigation = () => {
  return (
    <NavigationContainer linking={linking} fallback={<Text>Loading...</Text>}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen}></Stack.Screen>
        <Stack.Screen name="Status" component={StatusScreen}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
