import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import { Router, Scene } from 'react-native-router-flux';
import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';

const RouterWithRedux = connect()(Router);

import Splash from './containers/Splash';
import Wizard from './containers/Wizard';

import reducers from './reducers';

const middleware = [/* thunk */];
const store = compose(
  applyMiddleware(...middleware)
)(createStore)(reducers);

export default class App extends Component {
  render() {
    return(
      <Provider store={store}>
        <RouterWithRedux>
          <Scene key="root">
            <Scene
              key="splash"
              component={Splash}
              title="Splash"
              hideNavBar={true}
              initial={true}
              />
            <Scene
              key="wizard"
              component={Wizard}
              title="Wizard"
              hideNavBar={true}
              />
          </Scene>
        </RouterWithRedux>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
})
