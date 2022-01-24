/**
 * @format
 */
import React from 'react';

import {AppRegistry, View, Text} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import Navigation from './app/shared/components/Navigation';

export const Root = () => {
  return <Navigation></Navigation>;
};

AppRegistry.registerComponent(appName, () => Root);
