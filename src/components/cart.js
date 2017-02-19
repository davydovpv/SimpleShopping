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


export default class Cart extends Component {

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
          <Text>You are in the cart!</Text>
        </Content>

        <Footer>
          <FooterTab>
            <Button>
              <Text>Catalog</Text>
            </Button>
            <Button active>
              <Text>Cart</Text>
            </Button>
          </FooterTab>
        </Footer>

      </Container>
    );
  }
}
