import React from "react";
import { Text, Button, View } from "react-native";


function LogIn(props) {

  const handlePressIniciaSes = () => {
    console.log("Inicia Pressed");
    props.navigation.navigate("PrinPag");
  }


  return (
    <View>
      <Text>
        Iniciar Sesión
      </Text>
      <Button title="Inicia Sesión" onPress={handlePressIniciaSes} />
    </View>
  );
}

export default LogIn;
