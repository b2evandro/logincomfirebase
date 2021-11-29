import { GoogleSignin } from '@react-native-community/google-signin';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect } from 'react';
import Login from "../screens/Login/";
const Stack = createStackNavigator();

function Routes() {
  useEffect (() => { 
    // inicializa o Google SDK 
    GoogleSignin.configure ({ 
      webClientId: '<SEU webClientId>', 
    }); 
  }, []); 
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
      />
   
    </Stack.Navigator>
  </NavigationContainer>
  );
}

export default Routes;