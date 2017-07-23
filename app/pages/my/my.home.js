// 框架
import React, { Component } from 'react'
import { Text } from 'react-native'
// 公共组件
import styles from '../../styles'
import ddysApi from '../../utils/ddysApi'
// 元件


class MyHome extends Component {

  constructor(props) {
    super(props)
    this.state = {
      hosList: []
    }
  }

  async componentWillMount() {
    try {
      
    } catch (error) {
      console.error(error)
    }
  }

  render() {
    return (
      <Text>我的</Text>   
    )
  }
}

export default MyHome