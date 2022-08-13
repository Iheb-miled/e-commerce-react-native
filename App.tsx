
import React from 'react';
import {
  ScrollView,
  View,
} from 'react-native';
import Header from './src/components/Layout/Header';
import Store from './src/Store/Store';
import HomeScreen from './src/screens/HomeScreen';
import { Provider } from 'react-redux';
const App = () => {


  return (
    <Provider store={Store}>

      <Header />
      <ScrollView  >
        <HomeScreen />
      </ScrollView>
    </Provider>

  );
}
export default App
