import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import Home from './src/screens/Home';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Home />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
