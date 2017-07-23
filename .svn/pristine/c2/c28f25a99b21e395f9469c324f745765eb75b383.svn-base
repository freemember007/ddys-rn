# ddysrn
点点医生React-Native）


# 用到的第三方库
tabs: https://github.com/react-native-community/react-native-elements#cross-platform-tab-bar
navigation: https://github.com/react-native-simple-router-community/react-native-simple-router
List: https://github.com/FaridSafi/react-native-gifted-listview
icon: https://github.com/oblador/react-native-vector-icons
storage: https://github.com/sunnylqm/react-native-storage/blob/master/README-CHN.md


# 如何开始
## 安装第三方包
npm install
(考虑速度问题,建议使用yarn替代npm)
## 链接可能涉及的资源库（主要是某此第三方包涉及到引用实体资源，如字体等）
rnpm link
## 运行准备
react-native upgrade
node generate-android-project
## 运行
npm start
react-native run-ios


# 【重要必读！】特扬RN团队开发规范
1. 尽量不要拆分页面，除非真正可复用的元件
2. app目录下有一份styles.js文件，是全局原子化样式化，pages里尽量用这个表的原子化样式，不要另定义样式
为提高html的可读性，一定注意添加注释
3. 可复用的元件放在components下，components下的元件CSS样式直接在页面中定义，不要引用全局原子化样式 ，
以便这些元件可随处迁移（跨项目）
4. pages或components的写法上的规范可参考：
https://github.com/planningcenter/react-patterns#component-organization
5. 不要用任何大而全的UI框架，它们无法满足需求，反而会带来很多副作用，用小而精的第三方元件，在这里找：
https://github.com/jondot/awesome-react-native#components


# 运行典型问题
## iOS
1. 运行时提示网络连接失败,
原因：iOS默认不允许非https请求
解决办法：修改iOS目录下的info.plist文件，
在<key>NSAppTransportSecurity</key>的<dict>下加
         <key>NSAllowsArbitraryLoads</key>
	          <true/>ecurity</key>下加
         <key>NSAllowsArbitraryLoads</key>
	          <true/>
2.
## Android
1.SDK location not found.
原因：未安装Android SDK或未定义路径全局变量
解决办法：安装SDK，在项目>android目录下新建local.properies,写入你的路径，如：
sdk.dir=/Users/xjp/Library/Android/sdk
2. failed to find Build Tools revision 23.0.1
原因：未安装应用程序所需的build工具
解决办法：Android Studio>tool>android sdk tool或Android SDK Manager，安装Android SDK Build Tools 23.0.1
3.unable to download JS bundle 或 unable to connect to development server
原因：android真机要手动设置服务端口
解决办法：摇一摇，打开开发者菜单，点击Dev Settings后，点击Debug server host & port for device,设置你电脑的局域网IP(192.168.**.**)和端口(8081)
4.
## iOS && Android
1.项目有重大结构调整时导致无法运行（如改项目名），删除项目下的ios目录与android目录，运行react-native upgrade即可


# 开发典型问题
1. 如何调试？
方法1：用rn提供的Alert组件
方法2：（以ios为例），在模拟器下按Cmd + D, 在打开的菜单中，选Debug JS Remotely ，在Chrome浏览器中自动打开的页面中找开开发者工具调试即可（支持console.log）
2. CSS须知
1）flexDirection的默认值是column而不是row，alignItems的默认值是stretch而不是flex-start，以及flex只能指定一个数字值。
2）用flex1-9取代百分比的宽度
3. View
View没法直接加触摸/点击事件，要用TouchableHighlight或TouchableOpacity包裹。
4. 对于引入的第三方模块，如果某些细节实现与自身需求不符，可以大胆修改第三方元件。

# 第三方元件引起的警告问题
1. react-native-gifted-listview 依赖的 react-native-gifted-spinner 的警告问题
修改GiftedSpinner.js，将ActivityIndicatorIOS与androidProgress统一改为ActivityIndicator
2. react-native-gifted-list 的 空section header渲染 的警告问题
修改GiftedListView.js，在第49行下添加：enableEmptySections: true,

