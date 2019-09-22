import React from 'react';
import { View } from 'react-native';
import { Provider, connect } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '@redux';
import AppNavigation from 'navigation';
import { createAppContainer } from 'react-navigation';
const AppContainer = createAppContainer(AppNavigation);

function ReduxNavigation (props) {
  return <AppContainer />
}

const mapStateToProps = state => ({ state: state })
let AppReduxNavigation = connect(mapStateToProps)(ReduxNavigation)
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
          <AppReduxNavigation />
        </View>
      </Provider>
    );
  }
}
