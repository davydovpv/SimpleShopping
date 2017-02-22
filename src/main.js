import React, { Component } from 'react'
import {
   StyleSheet,
   Text,
   Navigator,
   TouchableOpacity
} from 'react-native'
import Cart from './components/cart'
import Catalog from './components/catalog'
import Detail from './components/product_detail';


export default class Router extends Component {
   constructor(props){
      super(props);
   }

   render() {
      return (
         <Navigator
            initialRoute = {{ name: 'Catalog', title: 'Catalog' }}
            renderScene = { this.renderScene }
            navigationBar = {
               <Navigator.NavigationBar
                  style = { styles.navigationBar }
                  routeMapper = { NavigationBarRouteMapper } />
            }
         />
      );
   }

   renderScene(route, navigator) {
      if(route.name == 'Catalog') {
         return (
            <Catalog
               navigator = {navigator}
               {...route.passProps}
            />
         )
      }
      if(route.name == 'Cart') {
         return (
            <Cart
               navigator = {navigator}
               {...route.passProps}
            />
         )
      }
      if(route.name == 'Detail') {
        return (
          <Detail
            navigator = {navigator}
            {...route.passProps}
          />
        )
      }
   }
}

var NavigationBarRouteMapper = {
   LeftButton(route, navigator, index, navState) {
      if(route.name == 'Detail') {
         return (
            <TouchableOpacity
               onPress = {() => { if (index > 0) { navigator.pop() } }}>
               <Text style={ styles.leftButton }>
                  Back
               </Text>
            </TouchableOpacity>
         );
      } else if (route.name == 'Cart') {
        return (
          <TouchableOpacity
             onPress = {() => { if (index > 0) { navigator.popToTop() } }}>
             <Text style={ styles.leftButton }>
                Catalog
             </Text>
          </TouchableOpacity>
        );
      } else { return null }
   },
   RightButton(route, navigator, index, navState) {
      return (
         <TouchableOpacity
            onPress = { () => navigator.push({ name: 'Cart', passProps: {
              ...route.passProps
            }})}>
            <Text style = { styles.rightButton }>
               Cart
            </Text>
         </TouchableOpacity>
      );
   },
   Title(route, navigator, index, navState) {
      return (
         <Text style = { styles.title }>
            Simple Shopper
         </Text>
      )
   }
};

const styles = StyleSheet.create({
   navigationBar: {
      backgroundColor: 'gray',
   },
   leftButton: {
      color: '#ffffff',
      margin: 10,
      fontSize: 17,
   },
   title: {
      paddingVertical: 10,
      color: '#ffffff',
      justifyContent: 'center',
      fontSize: 18
   },
   rightButton: {
      color: 'white',
      margin: 10,
      fontSize: 16
   }
});
