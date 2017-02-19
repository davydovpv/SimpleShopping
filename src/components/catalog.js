import React, { Component } from 'react';
import {
  Container,
  Content,
  Header,
  Title,
  Left,
  Right,
  Body,
  Footer,
  FooterTab,
  Button,
  Icon,
  Text
} from 'native-base';


export default class Catalog extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>

        <Header>
          <Left />
          <Body>
            <Title>Simple Shopper</Title>
          </Body>
          <Right />
        </Header>

        <Content>
          <Text>You are in the catalog!</Text>
        </Content>

        <Footer>
          <FooterTab>
            <Button active={true}>
              <Text>Catalog</Text>
            </Button>
            <Button onPress={this.onPressCart.bind(this)}>
              <Text>Cart</Text>
            </Button>
          </FooterTab>
        </Footer>

      </Container>
    );
  }

  onPressCart() {
    this.props.navigator.push({ name: 'cart' })
  }
}
