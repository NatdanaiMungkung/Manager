import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider} from 'react-redux'
import {createStore,applyMiddleware} from 'redux'
import ReduxThunk from 'redux-thunk'
import reducers from './src/reducers'
import firebase from 'firebase'
import Router from './Router'
import { Actions } from 'react-native-router-flux';

class App extends Component {
  UNSAFE_componentWillMount() {
    const firebaseConfig = {
      apiKey: "AIzaSyCjWy3bPLbmQXqmoQbmWuH2DO5tMfKf6Es",
      authDomain: "manager-1d1ec.firebaseapp.com",
      databaseURL: "https://manager-1d1ec.firebaseio.com",
      projectId: "manager-1d1ec",
      storageBucket: "manager-1d1ec.appspot.com",
      messagingSenderId: "864438389931",
      appId: "1:864438389931:web:d2ca3945b3db1032853bee",
      measurementId: "G-KG0WS4QJQZ"
    };
    // Initialize Firebase
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }

    firebase.auth().onAuthStateChanged((user)=> {
      Actions.main();
  })
  }
  render() {
    return (
      <Provider store={createStore(reducers,{},applyMiddleware(ReduxThunk))}>
        <Router />
      </Provider>
    );
  }
  
}

export default App