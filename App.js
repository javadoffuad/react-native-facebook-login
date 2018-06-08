/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import FBSDK from 'react-native-fbsdk';
const {
  LoginButton,
  LoginManager,
  AccessToken
} = FBSDK;
import {
  Platform,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Text,
  View
} from 'react-native';

export default class App extends Component {

  loginFacebook() {
    LoginManager.logInWithReadPermissions(['public_profile', 'email'])
      .then(
        (result) => {
          if (result.isCancelled) {
            Alert.alert('Whoops!', 'You cancelled the sign in.');
          } else {
            AccessToken.getCurrentAccessToken()
            .then((data) => {
              Alert.alert('Successfuly!', JSON.stringify(data));
            });
          }
        },
        (error) => {
          Alert.alert('Sign in error', error);
        },
      );
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>

        <TouchableOpacity
          onPress={() => this.loginFacebook()}
          title="Continue with Facebook"
        >
          <Text>
            Continue with Facebook
          </Text>
        </TouchableOpacity>
      </View>
    );
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
});
