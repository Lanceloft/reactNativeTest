import React from 'react';
import {
  Button, View, Text,
  StyleSheet, Image, ImageBackground,
  ScrollView, TouchableWithoutFeedback,
  Alert,
} from 'react-native';
import { Icon } from 'react-native-elements'

const styles = StyleSheet.create({
  mineScreen: {
    backgroundColor: '#eaeaea'
  },
  header: {
    alignItems: 'center',
    paddingTop: 20,
    height: 255,
  },
  configIcon: {
    position: 'absolute',
    left: 15,
    top: 33,
    width: 20,
    resizeMode: Image.resizeMode.contain,
  },
  photoIcon: {
    position: 'absolute',
    right: 15,
    top: 33,
    width: 22,
    resizeMode: Image.resizeMode.contain,
  },
  headerImage: {
    marginTop: 50,
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  headerName: {
    marginTop: 4,
    color: 'white',
    fontSize: 18,
  },
  headerList: {
    marginTop: 20.5,
    flexDirection: 'row',
    height: 80,
    borderStyle: 'solid',
    borderColor: '#ccc',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  headerListItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemTitle: {
    color: 'white',
    fontSize: 14,
  },
  itemNum: {
    marginTop: 10,
    paddingTop: 4,
    fontSize: 17,
    color: 'white',
  },
  container: {
    marginTop: 10,
  },
  rowItem: {
    paddingTop: 8,
    paddingBottom: 8,
    flexDirection: 'row',
    height: 77,
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderColor: '#eaeaea',
    backgroundColor: '#f9f9fe',
  },
  containerItem: {
    flex: 1,
    alignItems: 'center',
  },
  itemIcon: {
    marginTop: 14,
    height: 16,
    resizeMode: Image.resizeMode.contain,
  },
  itemText: {
    marginTop: 12,
    color: '#808080',
  },
  lastContainerItem: {
    flex: 1,
    alignItems: 'center',
    borderStyle: 'solid',
    borderColor: '#eaeaea',
    borderLeftWidth: 0.5,
  },
  listItemView: {
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
    borderColor: '#eaeaea',
    borderStyle: 'solid',
    borderBottomWidth: 1,
    backgroundColor: '#f9f9fe',
  },
  subListView: {
    marginTop: 6,
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
    backgroundColor: '#f9f9fe',
  }
});

const mineList = ['退款管理', '我的拍卖', '我的保证金', '收货地址']

class Listitems extends React.Component {
  render() {
    return (
      <View>
        {
          mineList.map((item, index) => {
            return (
              <View style={styles.listItemView} key={index}>
                <Text>{item}</Text>
                <Icon
                  name="navigate-next"
                  color='#808080' />
              </View>
            )
          })
        }
        <View style={styles.subListView}>
          <Text>客服与帮助</Text>
          <Icon
            name="navigate-next"
            color='#808080' />
        </View>
        <View style={styles.subListView}>
          <Text>邀请好友</Text>
          <Icon
            name="navigate-next"
            color='#808080' />
        </View>
        <View style={styles.subListView}>
          <Text>申请成为匠人</Text>
          <Icon
            name="navigate-next"
            color='#808080' />
        </View>
      </View>
    )
  }
}


export default class DetailsScreen extends React.Component {
  _onPress = () => {
    Alert.alert('You tapped the button!')
  }
  render() {
    return (
      <ScrollView>
        <View style={styles.mineScreen}>
          <ImageBackground
            source={require('../../dist/img/mineHeader.png')}
            style={styles.header}>
            <TouchableWithoutFeedback
              onPress={() => this.props.navigation.push('ConfigTab')}>
              <Image
                source={require('../../dist/icon/shezhi.png')}
                style={styles.configIcon} />
            </TouchableWithoutFeedback>
              <Image
                source={require('../../dist/icon/paizhao.png')}
                style={styles.photoIcon} />
            <Image
              style={styles.headerImage}
              source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
            />
            <Text style={styles.headerName}>lanceloft</Text>
            <View style={styles.headerList}>
              <View style={styles.headerListItem}>
                <Text style={styles.itemTitle}>文章</Text>
                <Text style={styles.itemNum}>0</Text>
              </View>
              <View style={styles.headerListItem}>
                <Text style={styles.itemTitle}>收藏</Text>
                <Text style={styles.itemNum}>0</Text>
              </View>
              <View style={styles.headerListItem}>
                <Text style={styles.itemTitle}>关注</Text>
                <Text style={styles.itemNum}>0</Text>
              </View>
              <View style={styles.headerListItem}>
                <Text style={styles.itemTitle}>粉丝</Text>
                <Text style={styles.itemNum}>0</Text>
              </View>
            </View>
          </ImageBackground>
          <View style={styles.container}>
            <View style={styles.rowItem}>
              <View style={styles.containerItem}>
                <Image
                  source={require('../../dist/icon/fukuan.png')}
                  style={styles.itemIcon} />
                <Text style={styles.itemText}>待支付</Text>
              </View>
              <View style={styles.containerItem}>
                <Image
                  source={require('../../dist/icon/fahuo.png')}
                  style={styles.itemIcon} />
                <Text style={styles.itemText}>待发货</Text>
              </View>
              <View style={styles.containerItem}>
                <Image
                  source={require('../../dist/icon/shouhuo.png')}
                  style={styles.itemIcon} />
                <Text style={styles.itemText}>待收货</Text>
              </View>
              <View style={styles.containerItem}>
                <Image
                  source={require('../../dist/icon/pingjia.png')}
                  style={styles.itemIcon} />
                <Text style={styles.itemText}>待评价</Text>
              </View>
              <View
                style={styles.lastContainerItem}>
                <Image
                  source={require('../../dist/icon/dingdan.png')}
                  style={styles.itemIcon} />
                <Text style={styles.itemText}>全部订单</Text>
              </View>
            </View>
          </View>
          <View>
            <Listitems />
          </View>
        </View>
      </ScrollView>
    );
  }
}
