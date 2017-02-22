import React, { Component } from 'react';
import {
  View,
  Navigator,
  StyleSheet
} from 'react-native';
import {
  Container,
  Content,
  Button,
  Left,
  Right,
  Body,
  Thumbnail,
  Text,
  ListItem
} from 'native-base';
import _ from 'lodash';

export default class Cart extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Container>
          <Content>
            {this.buildItems(this.props.cart)}
          </Content>
        </Container>
      </View>
    );
  }

  buildItems(items) {
    // Step 1: Flatten the cart
    var totals = {};
    if (!_.isEmpty(items)) {
      items.forEach((item) => {
        var name = item[0].name;
        var price = item[0].price;
        var img = item[0].img;

        // add new
        if (totals[name] == null) {
          totals[name] = {
            count: 1,
            price: parseFloat(price),
            img: img
          }
        }
        // update old
        else {
          var old = totals[name];
          totals[name] = {
            count: old.count + 1,
            price: old.price + parseFloat(price),
            img: old.img
          }
        }
      });
    }

    // Step 2: return a JSX array
    var totalsArray = [];
    var totalPrice = 0;
    if (_.isEmpty(totals)) {
      totalsArray.push(
        <ListItem>
          <Text>No items in cart!</Text>
        </ListItem>
      );
    } else {
      for (var key in totals) {
        totalPrice += totals[key].price
        totalsArray.push(
          <ListItem thumbnail key={key}>
            <Left>
              <Thumbnail square size={60} source={totals[key].img} />
            </Left>
            <Body>
              <Text>{key}</Text>
              <Text note>Count: {totals[key].count} - Total: {totals[key].price}</Text>
            </Body>
            <Right>
              <Button transparent onPress={this.handleRemovePressed.bind(this)}>
                <Text>Remove</Text>
              </Button>

            </Right>
          </ListItem>
        );
      }
    }

    // add the very bottom total and checkout Button
    if (!_.isEmpty(totals)) {
      totalsArray.push(
        <ListItem key={'closing'}>
          <Left>
            <Button success><Text>Checkout</Text></Button>
          </Left>
          <Body>
            <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'right', paddingRight: 20, paddingTop: 10 }}>
              Total: {totalPrice}
            </Text>
          </Body>
          </ListItem>
        );
      }

    return totalsArray;
  }

  handleRemovePressed() {
    // var itemName = "Kitchenaid Blender";
    // var updatedCart = [];
    // var removed = false;
    //
    // this.props.cart.forEach((item) => {
    //   var name = item[0].name;
    //   if (name == itemName && !removed) {
    //     removed = true;
    //     return;
    //   } else {
    //     return updatedCart.push(item);
    //   }
    // });
    // this.setState({ passProps: {cart: updatedCart} });
    // console.log(this.props.cart);
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    flex: 1
  }
});
