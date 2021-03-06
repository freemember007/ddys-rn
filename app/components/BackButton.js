import React from "react";
import { StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons'


export default class BackButton extends React.Component {
  render() {
    return (
        <View style={styles.container}>
          <Icon name='arrow-left' style={styles.icon} />
        </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-around',
    alignItems: 'center',
    width: 55,
    height: 50
  },
  icon: {
    color: '#fff',
    fontSize: 16
    },
})