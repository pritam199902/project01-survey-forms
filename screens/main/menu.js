import * as React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { Button, Paragraph, Menu, Divider, Provider } from "react-native-paper";

export default class MyComponent extends React.Component {
  state = {
    visible: false,
  };

  _openMenu = () => this.setState({ visible: true });

  _closeMenu = () => this.setState({ visible: false });

  render() {
    return (
      <View>
        <Text>Hello</Text>
        <View>
          <Provider>
            <Menu
              visible={this.state.visible}
              onDismiss={this._closeMenu}
              // anchor={<Button onPress={this._openMenu}>Menu</Button>}
              anchor={
                <TouchableOpacity
                  style={{ backgroundColor: "yellow", alignItems: "center" }}
                  onPress={() => {
                    this._openMenu();
                  }}
                  //   style={{ backgroundColor: "yellow" }}
                >
                  <Text>Click Me</Text>
                </TouchableOpacity>
              }
            >
              <Menu.Item onPress={() => {}} title="Image" />
              <Menu.Item onPress={() => {}} title="Video" />
              <Divider />
              <Menu.Item onPress={() => {}} title="Docs" />
            </Menu>
          </Provider>
        </View>
      </View>
    );
  }
}
