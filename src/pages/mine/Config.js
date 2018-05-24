import React from 'react';
import {
  Button, View, Text,
  StyleSheet, TouchableWithoutFeedback
} from 'react-native';
import { Header, Icon } from 'react-native-elements';
import { NavigationActions } from 'react-navigation';

const backAction = NavigationActions.back({
  key: null
})

const styles = StyleSheet.create({
  container: {

  },
  backIcon: {
  },
  header: {
    paddingTop: 30,
    height: 65,
    flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#eaeaea',
    borderStyle: 'solid',
    borderBottomWidth: 1,
    backgroundColor: '#f9f9fe',
  },
  listViewContent: {
    marginBottom: 10
  },
  listViewItem: {
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
  signout: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    borderColor: '#eaeaea',
    borderStyle: 'solid',
    borderBottomWidth: 1,
    backgroundColor: '#f9f9fe',
  }
})


export default class HomeScreen extends React.Component {
  render() {
    return (
      <View>
        {/* <View style={styles.header}>
          <Icon
            iconStyle={styles.backIcon}
            name="navigate-before"
            color='#3e3c3d' />
          <Text>设置</Text>
        </View> */}
        <Header
          outerContainerStyles={{ backgroundColor: '#f9f9fe' }}
          leftComponent={{
            icon: 'navigate-before',
            color: '#3e3c3d',
            onPress: () => this.props.navigation.dispatch(backAction),
          }}
          centerComponent={{ text: '设置', style: { color: '#3e3c3d' } }}
        />
        <View style={styles.container}>
          <View style={styles.listViewContent}>
            <View style={styles.listViewItem}>
              <Text>账号安全</Text>
              <Icon
                name="navigate-next"
                color='#808080' />
            </View>
          </View>
          <View style={styles.listViewContent}>
            <View style={styles.listViewItem}>
              <Text>隐私设置</Text>
              <Icon
                name="navigate-next"
                color='#808080' />
            </View>
            <View style={styles.listViewItem}>
              <Text>私信设置</Text>
              <Icon
                name="navigate-next"
                color='#808080' />
            </View>
          </View>
          <View style={styles.listViewContent}>
            <View style={styles.listViewItem}>
              <Text>意见反馈</Text>
              <Icon
                name="navigate-next"
                color='#808080' />
            </View>
            <View style={styles.listViewItem}>
              <Text>清除缓存</Text>
              <Icon
                name="navigate-next"
                color='#808080' />
            </View>
            <TouchableWithoutFeedback onPress={() => this.props.navigation.push('AboutTab')}>
              <View style={styles.listViewItem}>
                <Text>关于国馆</Text>
                <Icon
                  name="navigate-next"
                  color='#808080' />
              </View>
            </TouchableWithoutFeedback>
          </View>
          <View style={styles.signout}>
            <Text>退出登录</Text>
          </View>
        </View>
      </View>
    );
  }
}
