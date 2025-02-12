import {useState} from 'react';
import {
  Image,
  StatusBar,
  StatusBarStyle,
  StyleSheet,
  Text,
  TextInput,
  TextStyle,
  TouchableOpacity,
  View,
} from 'react-native';
const Logup = () => {
  const sizeText = (size: number): TextStyle => ({
    fontSize: size,
  });
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={require('../img/logo.png')} />
      <Text style={[styles.text, sizeText(17)]}>Welcome to Lungo !!</Text>
      <Text style={styles.grey}>Register to Continue</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        placeholderTextColor={'gray'}></TextInput>
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor={'gray'}></TextInput>
      <TextInput
        textContentType="password"
        style={styles.input}
        placeholder="Password"
        placeholderTextColor={'gray'}></TextInput>
      <TextInput
        style={styles.input}
        placeholder="Re-type password"
        placeholderTextColor={'gray'}></TextInput>
      <View style={styles.marginBt}>
        <TouchableOpacity style={styles.signin}>
          <Text style={styles.text}>Register</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.grey}>
        You have an account? Click
        <Text style={styles.orange}> Sign in</Text>
      </Text>
      <StatusBar
        // animated={true}
        backgroundColor="rgba(12, 15, 20, 1)"
        barStyle={'light-content'}
        showHideTransition={'none'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  orange: {
    color: 'orange',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    backgroundColor: 'rgba(12, 15, 20, 1)',
  },
  img: {
    width: 142,
    height: 142,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
  grey: {
    margin: 10,
    color: 'gray',
  },
  input: {
    color: 'white',
    marginVertical: 5,
    width: 348,
    height: 48,
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: 'gray',
    borderRadius: 8,
    paddingHorizontal: 15,
  },
  marginBt: {
    marginTop: 25,
  },
  signin: {
    backgroundColor: 'rgba(209, 120, 66, 1)',
    width: 348,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
    borderRadius: 20,
    fontSize: 16,
    marginVertical: 5,
  },
});

export default Logup;
