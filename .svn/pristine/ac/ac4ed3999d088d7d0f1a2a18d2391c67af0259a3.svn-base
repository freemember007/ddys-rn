// 框架
import React, { Component } from 'react'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { Tabs, Tab } from 'react-native-elements'
import Router from 'react-native-simple-router'

// 公共组件
import s from './styles'
import BackButton from './components/BackButton'

// 页面
import BookHome from './pages/book/book.home'
import ConsultHome from './pages/consult/consult.home'
import ReportHome from './pages/report/report.home'
import MyHome from './pages/my/my.home'


class TabGroup extends Component {

  constructor(props) {
    super(props)
    this.state = {
      selectedTab: 'BookHome'
    }
  }

  changeTab (selectedTab) {
    this.setState({
      selectedTab
    })
  }


  render() {
    const { toggleSideMenu } = this.props
    const { selectedTab } = this.state

    return (

      <Tabs hidesTabTouch>
        <Tab
          titleStyle={[s.gray, {marginTop: -3, marginBottom: 7}]}
          selectedTitleStyle={[s.primary, {marginTop: -3, marginBottom: 7}]}
          selected={selectedTab === 'BookHome'}
          title='挂号'
          renderIcon={() => <Icon color='#999' name='ios-home-outline' size={26} />}
          renderSelectedIcon={() => <Icon color='#3D9970' name='ios-home-outline' size={26} />}
          onPress={() => this.changeTab('BookHome')}>
          <BookHome { ...this.props } />
        </Tab>
        <Tab
          titleStyle={[s.gray, {marginTop: -3, marginBottom: 7}]}
          selectedTitleStyle={[s.primary, {marginTop: -3, marginBottom: 7}]}
          selected={selectedTab === 'ConsultHome'}
          title='咨询'
          renderIcon={() => <Icon color='#999' name='ios-text-outline' size={26} />}
          renderSelectedIcon={() => <Icon color='#3D9970' name='ios-text-outline' size={26} />}
          onPress={() => this.changeTab('ConsultHome')}>
          <ConsultHome { ...this.props } />
        </Tab>
        <Tab
          titleStyle={[s.gray, {marginTop: -3, marginBottom: 7}]}
          selectedTitleStyle={[s.primary, {marginTop: -3, marginBottom: 7}]}
          selected={selectedTab === 'ReportHome'}
          title='查报告'
          renderIcon={() => <Icon color='#999' name='ios-trending-up-outline' size={26} />}
          renderSelectedIcon={() => <Icon color='#3D9970' name='ios-trending-up-outline' size={26} />}
          onPress={() => this.changeTab('ReportHome')}>
          <ReportHome { ...this.props } />
        </Tab>
        <Tab
          titleStyle={[s.gray, {marginTop: -3, marginBottom: 7}]}
          selectedTitleStyle={[s.primary, {marginTop: -3, marginBottom: 7}]}
          selected={selectedTab === 'MyHome'}
          title='我的'
          renderIcon={() => <Icon color='#999' name='ios-person-outline' size={26} />}
          renderSelectedIcon={() => <Icon color='#3D9970' name='ios-person-outline' size={26} />}
          onPress={() => this.changeTab('MyHome')}>
          <MyHome { ...this.props } />
        </Tab>

      </Tabs>
              
      
    )
  }

}

class App extends Component {
  render(){
    return (
      <Router
        firstRoute={{name: '点点医生', component: TabGroup}}
        headerStyle={[s.bgPrimary]}
        backButtonComponent={BackButton}
      />
    )
  }
}


export default App