import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";

import { ApolloProvider } from "react-apollo";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

import navStyles from "./styles/navStyles";
import Friend from './Friend';



// export default class App extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>Hello!!</Text>
//       </View>
//     );
//   }
// }

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: "Intention",
    ...navStyles
  };

  goToFriend = () => {
    this.props.navigation.navigate('Friend')
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>HOME PAGE</Text>
        <Button
          onPress={this.goToFriend}
          title="Go to Friend"
        />
      </View>
    );
  }
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Friend: {
    screen: Friend
  }
});

export default createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});