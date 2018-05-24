import React from 'react';
import {
  View, Text,
  StyleSheet, Image,
} from 'react-native';
import { Header, Icon, Button } from 'react-native-elements';
import { NavigationActions } from 'react-navigation';

const backAction = NavigationActions.back({
  key: null
})

const styles = StyleSheet.create({
  aboutScreen: {
    backgroundColor: '#eaeaea'
  },
  container: {
    alignItems: 'center'
  },
  appDetails: {
    marginTop: 40,
    alignItems: 'center'
  },
  headerImage: {
    width: 72,
    height: 72,
    marginBottom: 10
  },
  introduce: {
    marginTop: 36,
    alignItems: 'center',
  },
  firstTitle: {
    fontSize: 22,
  },
  secondTitle: {
    marginTop: 8
  },
  qrCode: {
    marginTop: 28,
    width: 108,
    height: 108,
  },
  qrCodeIntroduce: {
    marginTop: 11,
    color: '#767677',
  },
  footer: {
    marginTop: 30,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 12,
    marginTop: 10,
    color: '#adadad',
  }
})


export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.aboutScreen}>
        <Header
          outerContainerStyles={{ backgroundColor: '#f9f9fe' }}
          leftComponent={{
            icon: 'navigate-before',
            color: '#3e3c3d',
            onPress: () => this.props.navigation.dispatch(backAction),
          }}
          centerComponent={{ text: '关于', style: { color: '#3e3c3d' } }}
        />
        <View style={styles.container}>
          <View style={styles.appDetails}>
            <Image
              style={styles.headerImage}
              source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
            />
            <Text>app名称 v2.3.3</Text>
          </View>
          <View style={styles.introduce}>
            <Text style={styles.firstTitle}>让传承成为潮流</Text>
            <Text style={styles.secondTitle}>有温度的匠人手作APP</Text>
            <Image
              source={require('../../dist/img/QRcode.png')}
              style={styles.qrCode} />
            <Text style={styles.qrCodeIntroduce}>扫码即可下载APP</Text>
            <Button
              title='向朋友推荐APP'
              buttonStyle={{
                marginTop: 30,
                width: 242,
                height: 38,
                borderRadius: 38,
                backgroundColor: "#dd3b44",
              }}
            />
          </View>
        </View>
        <View style={styles.footer}>
          <Text style={styles.footerText}>版权所有</Text>
          <Text style={styles.footerText}>Copyright&#174;2016广州国馆文化传播有限公司</Text>
          <Text style={styles.footerText}>客服联系方式: 85289616</Text>
        </View>
      </View>
    );
  }
}
