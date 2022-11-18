import React from "react";
import {
  ImageBackground,
  View,
  StyleSheet,
  Image,
  Text,
  TouchableNativeFeedback,
  StatusBar
} from "react-native";


function WelcomeSreen(props) {

  const handlePressIn = () => {
    console.log("Iniciar");
    props.navigation.navigate("LogIn");
  };
  const handlePressReg = () => {
    console.log("Registrate Pressed");
    props.navigation.navigate("SignIn");

  };

  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <StatusBar backgroundColor={'black'} />
      <View
        style={{
          flex: 1,
        }}
      >
        <View style={styles.container}>
          <Image style={styles.img} source={require("../assets/Logo.png")} />
          <View style={styles.posTextBtn}>
            <TouchableNativeFeedback onPress={handlePressReg}>
              <View style={styles.blueContainer}>
                <Text style={styles.textButtons}>REGÍSTRATE</Text>
              </View>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback onPress={handlePressIn}>
              <View style={styles.redContainer}>
                <Text style={styles.textButtons}>INICIAR SESIÓN</Text>
              </View>
            </TouchableNativeFeedback>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
  },
  img: {
    width: 300,
    height: 300,
    alignSelf: "center",
    bottom: 300,
  },
  posTextBtn: {},
  container: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
  },
  redContainer: {
    height: 45,
    backgroundColor: "#EF233C",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  blueContainer: {
    height: 45,
    backgroundColor: "#8D99AE",
    alignItems: "center",
  },
  textButtons: {
    color: "#fff",
    fontSize: 30,
  },
});

export default WelcomeSreen;
