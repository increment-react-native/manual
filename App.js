import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '@redux';

import ReduxNavigation from 'navigation/ReduxNavigation';


const store = createStore(rootReducer);

export default class App extends React.Component{
  render() {
    console.ignoredYellowBox = ['Warning: Each'];
    return (
      <Provider store={store}>
        <View style={{
            flex: 1,
            backgroundColor: '#ffffff'
          }}>
          <ReduxNavigation />
        </View>
      </Provider>
    );
  }
}