// 框架
import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import ListView from 'react-native-gifted-listview'
// 公共组件
import s from '../../styles'
import ddysApi from '../../utils/ddysApi'
// 元件
import ReportHome from '../report/report.home'


class BookHosList extends Component {


  constructor(props) {
    super(props)
    const { areaId } = this.props.data //路由传来的
    this.state = {
    }
    this.fetchHosList = async ( page = 1, callback, options ) => {
      try {
        let res = await ddysApi.apphoslistv2({
          areaId
        })
        if ( page = 3 ) {
          callback( res.data.list, { allLoaded: true } )
        } else {
          callback( res.data.list )
        }
      } catch (error) {
        console.error(error)
      }
    }
  }

  render() {
    return (
      <ListView
        style={[s.mx2]}
        rowView={(hos) => 
          <TouchableOpacity onPress={()=>{this.props.toRoute({name: '查报告', component: ReportHome})}}>
            <View 
              style={[s.row, s.py3, s.borderBottom]}
            >
              <Image
                style={[s.flex25, s.mr2]} 
                source={{uri: hos.yytp}}
              />
              <View
                style={[s.flex75]}
              >
                <Text style={[s.mb1, s.f3]}>{hos.yymc}</Text>
                <Text style={[s.mb1, s.orange]}>{hos.yydjmc}</Text>
                <Text style={[s.gray]}>{hos.yydz}</Text>
              </View>
            </View>
          </TouchableOpacity>
        }
        onFetch={this.fetchHosList}
        firstLoader={true}
        refreshable={true}
        withSections={false}
        enableEmptySection={true}
      />      
      
    )
  }
}

export default BookHosList