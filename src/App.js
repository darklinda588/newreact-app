import React, { Component } from 'react';
import createBrowserHistory from 'history/createBrowserHistory'
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
// const history = createBrowserHistory()

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: '/',
    }
  }
  handleClick = (e) => {
    // console.log('click ', e)
    // history.push('/' + e.key)
    // console.log(this.props.history)
    createBrowserHistory().push(e.key)
    this.setState({
      current: e.key,
    })
  }
  render() {
    return (
      <div className="App">
          <Menu
            onClick={this.handleClick}
            selectedKeys={[this.state.current]}
            mode="horizontal"
            theme="dark"
          >
            <Menu.Item key="/">
              <Icon type="mail" />Navigation One
            </Menu.Item>
            <Menu.Item key="/app">
              <Icon type="appstore" />Navigation Two
            </Menu.Item>
            <SubMenu title={<span><Icon type="setting" />Navigation Three - Submenu</span>}>
              <MenuItemGroup title="Item 1">
                <Menu.Item key="/setting:1">Option 1</Menu.Item>
                <Menu.Item key="/setting:2">Option 2</Menu.Item>
              </MenuItemGroup>
              <MenuItemGroup title="Item 2">
                <Menu.Item key="/setting:3">Option 3</Menu.Item>
                <Menu.Item key="/setting:4">Option 4</Menu.Item>
              </MenuItemGroup>
            </SubMenu>
            <Menu.Item key="/alipay">
              Navigation Four - Link
            </Menu.Item>
          </Menu>
      </div>
    )
  }
}
