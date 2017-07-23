// 框架
import React, { Component } from 'react'
import { View, Image, Text, TextInput, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
// 公共组件
import s from '../../styles'
// 元件
import hotHosJson from '../../json/book_home_hotHosList'
import hotDeptJson from '../../json/book_home_hotDeptList'
import BookHosList from './book.hosList'


class BookHome extends Component {

  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <ScrollView style={[s.m2, s.gbWhite]}>

        { /* 搜索区 */ }
        <View style={[s.my2, s.gbWhite]} >
          <Text style={[s.mt4, s.mb2, s.f2, s.dark, s.textCenter]}>
            浙江卫计委官方指定预约挂号平台
          </Text>
  
          <View style={[s.p2]}>
            <TextInput
              style={[s.px2, s.pr4, s.f4, s.bgWhite, s.border, s.round, {height: 40}]}
              value={this.state.text}
              placeholder={'搜索医院、医生直达...'}
              placeholderTextColor={'#999'}
              onChangeText={(text) => console.log(text)}
           />
            <Icon 
              style={[s.absolute, s.f1, s.light, {width: 20, height: 20, top:20, right:20}]}
              name='ios-search-outline' 
            />
          </View>

        </View>
        

        { /* 按钮区 */ }
        <View style={[s.my2, s.row, {height: 140}]}>
          <View style={[s.flex4, s.xyCenter, s.borderRight]}>
            <Text 
              style={[]}
              onPress={() => {this.props.toRoute({
                name: '选择医院', 
                component: BookHosList, 
                data: {
                  areaId: 330100
                }
              })}}
            >
              按医院预约
            </Text>
          </View>
          <View style={[s.flex6, s.column]}>
            <View style={[s.flex5, s.xyCenter, s.borderBottom]}>
              <Text>按科室预约</Text>
            </View>
            <View style={[s.flex5, s.row]}>
              <View style={[s.flex5, s.xyCenter, s.borderRight]}>
                <Text>在线咨询</Text>
              </View>
              <View style={[s.xyCenter, s.flex5]}>
                <Text>名医号</Text>
              </View>
            </View>
          </View>
        </View>

        { /* 热门医院 */ }
        <View style={[s.my2]} >
          <Text style={[s.mb2, s.p2, s.pl4, s.white, s.bgPrimary]}>热门医院</Text>
          
          <View style={[s.row, s.justifyStart, s.alignStart, s.wrap]}>
            {hotHosJson.map((hos, i) => {
              return (
                <View style={[s.m2, s.py2, s.borderBottom]} key={i}>
                  <Text style={[s.dark, s.textCenter]}>{hos.yymc}</Text>
                </View>
              )
            })}

          </View>
        </View>

        { /* 热门科室 */ }
        <View style={[s.my2]} >
          <Text style={[s.mb2, s.p2, s.pl4, s.white, s.bgPrimary]}>热门科室</Text>
          
          <View style={[s.row, s.justifyStart, s.alignStart, s.wrap]}>
            {hotDeptJson.map((dept, i) => {
              return (
                <View style={[s.m2, s.py2, s.borderBottom]} key={i}>
                  <Text style={[s.dark, s.textCenter]}>{dept.ksmc}</Text>
                </View>
              )
            })}

          </View>
        </View>
        

      </ScrollView>
      
    )
  }
}

export default BookHome