import React, { Component } from 'react';
import { Image, View, StyleSheet } from 'react-native';
import {
  Card,
  CardItem,
  Left,
  Body,
  Thumbnail,
  Text,
  Button,
  Icon
} from 'native-base';

export default class Detail extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Card>
          <CardItem>
            <Body>

             <Image style={{ resizeMode: 'cover' }} source={this.props.img} />

             <Text style={{ paddingTop: 10, fontSize: 25 }}>
               {this.props.name}
               {'\n'}
             </Text>

             <Text style={{ fontWeight: 'bold' }}>Description</Text>
             <Text style={{}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi placerat libero et nisi mattis, pretium hendrerit velit convallis. Maecenas porta felis id hendrerit malesuada. Ut convallis finibus purus, eget rutrum erat.
                {'\n'}
             </Text>

             <Text style={{ fontWeight: 'bold' }}>Item #</Text>
             <Text style={{}}>
               123345
               {'\n'}
             </Text>

             <Text style={{ fontWeight: 'bold' }}>Price</Text>
             <Text style={{}}>
               {this.props.price}
               {'\n'}
             </Text>

            <Button block primary onPress={this.handleAddToCartPressed.bind(this)}>
              <Text>Add to Cart</Text>
            </Button>

          </Body>
         </CardItem>
       </Card>
    </View>
    );
  }

  handleAddToCartPressed() {
    console.log(this.props);
    var c = this.props.cart;
    c.push([{
      name: this.props.name,
      img: this.props.img,
      price: this.props.price
    }]);
    this.setState({ cart: c })
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 60
  }
});
