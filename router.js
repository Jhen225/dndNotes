import { DrawerNavigator, StackNavigator, SwitchNavigator } from "react-navigation";
import Home from "./components/home/home";
import Login from "./components/login/login";
import Register from "./components/register/register";
import Notes from "./components/notes/notes"
import AddNote from "./components/notes/addNote"

export const SignedOut = StackNavigator({
  SignIn: {
    screen: Login,
    navigationOptions: {
      header: null
    }
  },
  SignUp: {
    screen: Register,
    navigationOptions: {
      header: null
    }
  },

});

export const SignedIn = DrawerNavigator({
  Home: { screen: Home }
});

export const createRootNavigator = (signedIn) => {
  return SwitchNavigator({
    SignedIn:{
      screen: SignedIn
    },
    SignedOut:{
      screen: SignedOut
    }
  }, {
    initialRouteName: signedIn ? "SignedIn" : "SignedOut"
  })
}

export const MainNavigator = StackNavigator({
  Notes:{
    screen: Notes,
    navigationOptions: {
      header: null
    }
  },
  AddNote:{
    screen: AddNote,
    navigationOptions: {
      header: null
    }
  }
});
