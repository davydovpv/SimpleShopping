import React, { Component } from 'react';
import {
  Container,
  Content,
  Footer,
  FooterTab,
  Button,
  Icon,
  Text
} from 'native-base';

export default class FooterTabs extends Component {
    render() {
      return (
        <Footer>
          <FooterTab>
            <Button>
              <Text>Catalog</Text>
            </Button>
            <Button>
              <Text>Cart</Text>
            </Button>
          </FooterTab>
        </Footer>
      );
    }
}
