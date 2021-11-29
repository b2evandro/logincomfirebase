import { GoogleSignin } from '@react-native-community/google-signin';
import React from 'react';
import { Text, View } from "react-native";
import SocialButton from "../../components/socialButton";


const Login = () => {

  const [user, setUser] = React.useState(null);
  async function handleGoogleSignIn() {
    try {
      const singin = await GoogleSignin.signIn();
      console.log("singin", singin);
      setUser(singin.user);
      
    } catch (error) {
      console.log(error);
    }
  }
  async function logout() {
    try {
      const signOut = await GoogleSignin.signOut();
      console.log("singin", signOut);
      setUser(null);
      
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <View >
    <SocialButton 
        buttonTitle="Sair"
        btnType="close"
        color="#000"
        backgroundColor="#f5e7ea"
        onPress={logout}
      />
      <SocialButton 
        buttonTitle="Login com Google"
        btnType="google"
        color="#de4d41"
        backgroundColor="#f5e7ea"
        onPress={handleGoogleSignIn}
      />
      {!!user && <Text>Nome: {user.name}</Text>}
      {!!user && <Text>Email: {user.email}</Text>}
    </View>
  );
};

export default Login;