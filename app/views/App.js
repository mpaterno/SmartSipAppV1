/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react"
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Button
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import createStackNavigator from "react-navigation"
import AppNavigator from "./AppNavigator"
import Home from "./Home"
import { Provider, Subscribe, Container } from "unstated"

type Props = {}
export default class App extends Component<Props> {
  render() {
    return <AppNavigator />
  }
}
