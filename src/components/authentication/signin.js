import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet
} from 'react-native';
//import Button from '../common/button';

// Notes: by default TextInput has no styling
export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  render(props) {
    return (
      <View style={styles.container}>

        <Text>Sign In</Text>
        <Text style={styles.label}>Username:</Text>
        <TextInput
          style={styles.input}
          value={this.state.username}
          onChangeText={(text) => this.setState({ username: text })} />

        <Text style={styles.label}>Password:</Text>
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          value={this.state.password}
          onChangeText={(text) => this.setState({ password: text })} />

        <Button title={"Sign In"} onPress={this.onPress.bind(this)} />

        <Button title={"I need an account..."} onPress={this.onSignupPress.bind(this)} />
      </View>
    );
  }

  onPress() {
    this.setState({ password: '' })
  }

  onSignupPress() {
    // you aren't pushing a view here, you're pushing the name of a route.
    // this tells the Navigator which component to render based on the ROUTES object
    // in main.js

    // to pass data you just do ...'signup', bookId: someId, foo: someBar...
    // that stuff ends up on the "route" object in renderScene
    this.props.navigator.push({ name: 'signup' })
  }
}

// Notes: "alignSelf" means "center yourself on the form"
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    padding: 4,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    margin: 5,
    width: 200,
    alignSelf: 'center'
  },
  label: {
    fontSize: 18
  }
})
