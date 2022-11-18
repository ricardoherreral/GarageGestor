import React from "react";
import { Text, View, StyleSheet, StatusBar, TextInput } from "react-native";
import colors from '../config/colors';

function SignIn(props) {
  return (

    <View style={styles.background}>
      <StatusBar backgroundColor={'black'} />
      <Text style={styles.textReg}>Registrate</Text>
      <View style={styles.inputGroup}>
        <TextInput placeholder='Name User'
          onChangeText={(value) => handleChangeText('name', value)} />
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: colors.background,
  },
  textReg: {
    color: colors.textColor,
    alignSelf: "center",
    fontSize: 45,
    marginTop: 15,
  },
  inputGroup: {
    flex: 1,
    padding: 15,
    borderBottomColor: colors.textColor
    
  },
});

export default SignIn;
