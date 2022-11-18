import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import LogIn from "./app/screens/LogIn";
import SignIn from "./app/screens/SignIn";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import PrincPag from "./app/screens/PrincPag";

const Stack = createNativeStackNavigator();

function MyStack() {
  return (

    <Stack.Navigator
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      <Stack.Screen name="LogIn" component={LogIn} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="PrinPag" component={PrincPag} />
    </Stack.Navigator>

  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
