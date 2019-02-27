/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.left}>
        </View>
        <View style={styles.right}>
            <View style={styles.rightTop}>
            </View>
            <View style={styles.rightBottom}>
            </View>
        </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row'
    },
    left: {
        flex: 1,
        backgroundColor: 'red'
    },
    right: {
        flex: 1,
        flexDirection: 'column'
    },
    rightTop: {
        flex: 1,
        backgroundColor: 'blue'
    },
    rightBottom: {
        flex: 1,
        backgroundColor: 'yellow'
    },
});
