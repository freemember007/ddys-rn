import { StyleSheet } from 'react-native'

// 变量
const color_primary = '#3D9970'
const color_darker = '#333'
const color_dark = '#666'
const color_gray = '#999'
const color_light = '#ccc'
const color_lighter = '#ddd'
const color_red = 'red'
const default_border_color = '#eee'
const default_bg_color = '#eee'
const default_header_height = 48
const font_little = 12
const font_small = 14
const font_normal = 16
const font_big = 18
const font_tiny = 20
const space0 = 0
const space1 = 4
const space2 = 8
const space3 = 12
const space4 = 16
const spaces = [space0, space1, space2, space3, space4]

const marginAndPaddings = {};

spaces.forEach( function(space, index)  {
  marginAndPaddings['m' + index] = {
    margin: space
  }
  marginAndPaddings['mt' + index] = {
    marginTop: space
  }
  marginAndPaddings['mr' + index] = {
    marginRight: space
  }
  marginAndPaddings['mb' + index] = {
    marginBottom: space
  }
  marginAndPaddings['ml' + index] = {
    marginLeft: space
  }
  marginAndPaddings['mx' + index] = {
    marginLeft: space,
    marginRight: space,
  }
  marginAndPaddings['my' + index] = {
    marginTop: space,
    marginBottom: space
  }
  marginAndPaddings['p' + index] = {
    padding: space
  }
  marginAndPaddings['pt' + index] = {
    paddingTop: space
  }
  marginAndPaddings['pr' + index] = {
    paddingRight: space
  }
  marginAndPaddings['pb' + index] = {
    paddingBottom: space
  }
  marginAndPaddings['pl' + index] = {
    paddingLeft: space
  }
  marginAndPaddings['px' + index] = {
    paddingLeft: space,
    paddingRight: space,
  }
  marginAndPaddings['py' + index] = {
    paddingTop: space,
    paddingBottom: space
  }

})


const s = StyleSheet.create({

  // layout
  main: {
    margin: space2
  },
  section: {
    marginTop: space2,
    marginBottom: space2
  },

  // flex
  flex1: {
    flex: 1,
  },
  flex2: {
    flex: 2,
  },
  flex3: {
    flex: 3,
  },
  flex4: {
    flex: 4,
  },
  flex5: {
    flex: 5,
  },
  flex6: {
    flex: 6,
  },
  flex7: {
    flex: 7,
  },
  flex8: {
    flex: 8,
  },
  flex9: {
    flex: 9,
  },
  flex25: {
    flex: 25,
  },
  flex75: {
    flex: 75,
  },
  flex33: {
    flex: 33,
  },
  flex34: {
    flex: 34,
  },
  flex66: {
    flex: 66,
  },
  flex67: {
    flex: 67,
  },
  row: {
    flexDirection: 'row'
  },
  column: {
    flexDirection: 'column'
  },
  justifyStart: {
    justifyContent: 'flex-start'
  },
  justifyEnd: {
    justifyContent: 'flex-end'
  },
  justifyCenter: {
    justifyContent: 'center'
  },  
  justifyBetween: {
    justifyContent: 'space-between'
  },
  justifyAround: {
    justifyContent: 'space-around'
  },
  alignStart: {
    alignItems: 'flex-start'
  },
  alignEnd: {
    alignItems: 'flex-end'
  },
  alignCenter: {
    alignItems: 'center'
  },
  alignSelfStart: {
    alignSelf: 'flex-start'
  },
  wrap: {
    flexWrap: 'wrap'
  },
  xyCenter: { //子项水平垂直居中
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  
  
  // position
  absolute: {
    position: 'absolute'
  },
  relative: {
    position: 'relative'
  },
  top0: {
    top: 0
  },
  right0: {
    right: 0
  },
  bottom0: {
    bottom: 0
  },
  left0: {
    left: 0
  },


  // color
  white: {
    color: '#fff'
  },
  dark: {
    color: color_dark
  },
  primary: {
    color: color_primary
  },
  darker: {
    color: color_darker
  },
  dark: {
    color: color_dark
  },
  gray: {
    color: color_gray
  },
  light: {
    color: color_light
  },
  orange: {
    color: '#ff851b'
  },
  bg: {
    backgroundColor: default_bg_color
  },
  bgPrimary: {
    backgroundColor: color_primary
  },
  bgWhite: {
    backgroundColor: '#fff'
  },
  bgGray: {
    backgroundColor: color_gray
  },
  bgDark: {
    backgroundColor: color_dark
  },
  bgLight: {
    backgroundColor: color_light
  },

  // font-size
  f5: {
    fontSize: font_little
  },
  f4: {
    fontSize: font_small
  },
  f3: {
    fontSize: font_normal
  },
  f2: {
    fontSize: font_big
  },
  f1: {
    fontSize: font_tiny
  },
  bold: {
    fontWeight: 'bold'
  },
    
  // line-height
  lh1: {
    lineHeight: 1
  },
  lh15: {
    lineHeight: 1.5
  },
  lh2: {
    lineHeight: 2
  },

  // background
  bgPrimary: {
    backgroundColor: color_primary
  },


  // border
  border: {
    borderWidth: 1,
    borderColor: '#ddd',
    // borderStyle: 'solid'
  },

  borderTop: {
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    // borderStyle: 'solid'
  },
    borderRight: {
    borderRightWidth: 1,
    borderRightColor: '#ddd',
    // borderStyle: 'solid'
  },
    borderBottom: {
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    // borderStyle: 'solid'
  },
    borderLeft: {
    borderLeftWidth: 1,
    borderLeftColor: '#ddd',
    // borderStyle: 'solid'
  },
  borderLighter: {
    borderColor: color_lighter

  },
  borderDashed: {
    borderStyle: 'dashed'
  }, 


  // borderRadius
  round: {
    borderRadius: 5
  },
  rounder: {
    borderRadius: 10
  },
  circle: {
    borderRadius: 0.5
  },

  // align
  textCenter: {
    textAlign: 'center'
  },
  textLeft: {
    textAlign: 'left'
  },
  textRight: {
    textAlign: 'right'
  },

  //header
  header: {
    backgroundColor: 'red'
  },

  ...marginAndPaddings

})

export default s
