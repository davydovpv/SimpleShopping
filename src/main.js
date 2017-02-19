import React, { Component } from 'react';
import {
  Navigator,
  Text,
  StyleSheet
} from 'react-native';

//import ReactStormpath, { Router, AuthenticatedRoute, LoginLink } from 'react-stormpath';
//import SignIn from './components/authentication/signin';
//import SignUp from './components/authentication/signup';
import Catalog from './components/catalog';
import Cart from './components/cart';


const ROUTES = {
    catalog: Catalog,
    cart: Cart
}

class Main extends Component {
  constructor(props) {
    super(props);
  }

  // The initial route is 'signin' as described in the ROUTES var
  render() {
    return (
      <Navigator
        style={ styles.container }
        initialRoute={{ name: 'catalog' }}
        renderScene={ this.renderScene }
        configureScene={() => { return Navigator.SceneConfigs.FloatFromRight; }} />
    );
  }

  // whenever the scene changes, render scene is going to be called with a route
  // and an instance of our Navigator object. Whatever this returns is what
  // is going to be put on the stack
  renderScene(route, navigator) {
    var Component = ROUTES[route.name];
    // passing route and navigator so subsequent components have access to it
    return <Component route={route} navigator={navigator} />
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

export default Main;
