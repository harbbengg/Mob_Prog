import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';

const LoginScreen = () => {
  return (
    <LinearGradient
      colors={['#66ff66', '#ff66ff']} // Gradient colors from bottom to top
      start={{ x: 0, y: 1 }} // Start from bottom
      end={{ x: 0, y: 0 }} // End at top
      style={styles.container}
    >
      <View style={styles.logoContainer}>
        <Image source={require("../assets/Logo.png")} style={styles.logo} />
      </View>

      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#000"
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#000"
            secureTextEntry
          />
        </View>
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
        </TouchableOpacity>
        <Text style={styles.orText}>OR</Text>
        <TouchableOpacity>
          <Text style={styles.phoneLogin}>Login with Phone Number</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logoContainer: {
    marginBottom: 30,
  },
  logo: {
    width: 400,
    height: 400,
  },
  formContainer: {
    width: '100%',
    maxWidth: 400,
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  inputContainer: {
    width: '100%',
    marginBottom: 15,
  },
  label: {
    color: '#000', // Black color for labels
    fontSize: 16,
    marginBottom: 5,
    alignSelf: 'flex-start',
  },
  input: {
    width: '100%',
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingHorizontal: 10,
    color: '#000', // Black color for text
  },
  loginButton: {
    backgroundColor: '#ff66ff',
    borderRadius: 5,
    width: '100%',
    padding: 10,
    alignItems: 'center',
    marginBottom: 15,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  forgotPassword: {
    color: '#fff',
    textDecorationLine: 'underline',
    marginBottom: 15,
  },
  orText: {
    color: '#fff',
    marginVertical: 10,
  },
  phoneLogin: {
    color: '#fff',
    fontSize: 16,
  },
});

export default LoginScreen;
