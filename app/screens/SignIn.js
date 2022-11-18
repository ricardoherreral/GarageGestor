import React, { useState } from "react";
import { Text, View, StyleSheet, StatusBar, TextInput, Image, Button } from "react-native";
import colors from '../config/colors';
import conection from '../../backend/conection'

function SignIn(props) {

  const [state, setState] = useState({
    user: '',
    pass: '',
    name: '',
    email: '',
    phone: '',
  })

  const handleChangeText = (name, value) => {
    setState({ ...state, [name]: value })
    console.log(state);
  }

  const registerUser = async () => {
    await conection.createListing(state);
  }


  return (

    <View style={styles.background}>
      <StatusBar backgroundColor={'black'} />
      <View style={{ flexDirection: 'row', marginTop: 20 }}>
        <Image
          style={{ width: 100, height: 100, marginRight: 20 }}
          source={require('../assets/Logo.png')} />
        <Text style={styles.textReg}>Registrate</Text>
      </View>
      <View style={styles.inputGroup}>
        <TextInput style={styles.input} placeholder='Usuario' placeholderTextColor={colors.textColor}
          onChangeText={(value) => handleChangeText('user', value)} />
        <TextInput style={styles.input} placeholder='Contraseña' placeholderTextColor={colors.textColor}
          onChangeText={(value) => handleChangeText('pass', value)} />
        <TextInput style={styles.input} placeholder='Nombre' placeholderTextColor={colors.textColor}
          onChangeText={(value) => handleChangeText('name', value)} />
        <TextInput style={styles.input} placeholder='Correo Electronico' placeholderTextColor={colors.textColor}
          onChangeText={(value) => handleChangeText('email', value)} />
        <TextInput style={styles.input} placeholder='Telefono' placeholderTextColor={colors.textColor}
          onChangeText={(value) => handleChangeText('phone', value)} />
      </View>
      <Button color={colors.primary} title="Registrar" onPress={() => registerUser()} />
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
    margin: 30,
  },
  input: {
    flex: 0.05,
    padding: 15,
    borderWidth: 1,
    borderRadius: 15,
    marginBottom: 20
  },

});

export default SignIn;
