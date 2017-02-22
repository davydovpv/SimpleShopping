import React, { Component } from 'react';
import { StyleSheet, Navigator, View } from 'react-native';
import {
  List,
  ListItem,
  Text,
  Thumbnail,
  Left,
  Body,
  Right,
  Button,
  Container,
  Content
} from 'native-base';


export default class Catalog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: []
    }
    console.log("state cart:" + this.state.cart);
    console.log("props cart:" + this.props.cart);
  }

  render() {
    return (
      <View style={styles.container}>

          <ListItem thumbnail onPress={() => this.props.navigator.push({ name: 'Detail', passProps: {
              name: 'Kitchenaid Blender',
              img: require('../../resources/images/blender.jpeg'),
              price: '199.99',
              cart: this.state.cart
            }})}>
            <Left>
              <Thumbnail square size={60} source={require('../../resources/images/blender.jpeg')} />
            </Left>
            <Body>
              <Text>Kitchenaid Blender</Text>
              <Text note>The best of the best blenders...</Text>
            </Body>
            <Right>
              <Text>></Text>
            </Right>
          </ListItem>

          <ListItem thumbnail onPress={() => this.props.navigator.push({ name: 'Detail', passProps: {
              name: 'Sweetwater Rod and Pole',
              img: require('../../resources/images/fishingPole.jpeg'),
              price: '99.00',
              cart: this.state.cart
            }})}>
            <Left>
              <Thumbnail square size={60} source={require('../../resources/images/fishingPole.jpeg')} />
            </Left>
            <Body>
              <Text>Sweetwater Rod and Pole</Text>
              <Text note>Top of the line sweetwater...</Text>
            </Body>
            <Right>
              <Text>></Text>
            </Right>
          </ListItem>

          <ListItem thumbnail onPress={() => this.props.navigator.push({ name: 'Detail', passProps: {
              name: '1960s Fender Stratocaster',
              img: require('../../resources/images/guitar.jpeg'),
              price: '145.99',
              cart: this.state.cart
            }})}>
            <Left>
              <Thumbnail square size={60} source={require('../../resources/images/guitar.jpeg')} />
            </Left>
            <Body>
              <Text>1960s Fender Stratocaster</Text>
              <Text note>1960s Fender Stratocaster...</Text>
            </Body>
            <Right>
              <Text>></Text>
            </Right>
          </ListItem>

          <ListItem thumbnail>
            <Left>
              <Thumbnail square size={60} source={require('../../resources/images/kitchenUtensils.jpeg')} />
            </Left>
            <Body>
              <Text>Kitchenaid Utensils</Text>
              <Text note>The key assortment of kitchenaid...</Text>
            </Body>
            <Right>
              <Text>></Text>
            </Right>
          </ListItem>

          <ListItem thumbnail>
            <Left>
              <Thumbnail square size={60} source={require('../../resources/images/remoteControlCar.jpeg')} />
            </Left>
            <Body>
              <Text>Remote Control Car</Text>
              <Text note>Car craft remote control car...</Text>
            </Body>
            <Right>
              <Text>></Text>
            </Right>
          </ListItem>

          <ListItem thumbnail>
            <Left>
              <Thumbnail square size={60} source={require('../../resources/images/skateboard.jpeg')} />
            </Left>
            <Body>
              <Text>Sector 9 Longboard</Text>
              <Text note>A maxed out Sector 9 longboard...</Text>
            </Body>
            <Right>
              <Text>></Text>
            </Right>
          </ListItem>

          <ListItem thumbnail>
            <Left>
              <Thumbnail square size={60} source={require('../../resources/images/surfboard.jpeg')} />
            </Left>
            <Body>
              <Text>JS Designs Thruster</Text>
              <Text note>The latest thruster from JS designs...</Text>
            </Body>
            <Right>
              <Text>></Text>
            </Right>
          </ListItem>

          <ListItem thumbnail>
            <Left>
              <Thumbnail square size={60} source={require('../../resources/images/t-shirt.jpeg')} />
            </Left>
            <Body>
              <Text>A Really Ugly T-Shirt</Text>
              <Text note>No one needs this and neither do you...</Text>
            </Body>
            <Right>
              <Text>></Text>
            </Right>
          </ListItem>

          <ListItem thumbnail>
            <Left>
              <Thumbnail square size={60} source={require('../../resources/images/towells.jpeg')} />
            </Left>
            <Body>
              <Text>Some Plain Towells</Text>
              <Text note>Some plain towells for a plain bathroom...</Text>
            </Body>
            <Right>
              <Text>></Text>
            </Right>
          </ListItem>

          <ListItem thumbnail>
            <Left>
              <Thumbnail square size={60} source={require('../../resources/images/vansShoe.jpeg')} />
            </Left>
            <Body>
              <Text>Vans Chucka</Text>
              <Text note>Some sweet Vans Chuckas for your feets...</Text>
            </Body>
            <Right>
              <Text>></Text>
            </Right>
          </ListItem>

        </View>
    );
  }

  handleOnPress(item) {
    // console.log(e);
    console.log(item);
    return;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 60
  }
})
