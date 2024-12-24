import { View, StyleSheet, Text, TextInput } from 'react-native';
import { Link, Stack } from 'expo-router';
import Button from '@/components/Button';

export default function LoginScreen() {

  return (
    <View style={styles.container}>
        {/* Title */}
        <View style={styles.header}>
        <Text style={styles.title}>Welcome Back!</Text>
        </View>
        {/* Social Buttons */}

        {/* Input Fields */}
        <View style={styles.inputsContainer}>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Email"
              placeholderTextColor="#aaa"
              style={styles.input}
            />
            </View>
            <View style={styles.passwordContainer}>
              <TextInput
                placeholder="Password"
                placeholderTextColor="#aaa"
                style={styles.input}
                secureTextEntry={true}
              />
            </View>
        </View>
          <View style={styles.loginButton}>
            <Button label="Login" />
          </View>
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Don't have an account?{' '}
            <Link href="/signup" style={styles.signUp}>Sign Up</Link>
          </Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000',
      padding: 20,
      alignItems: 'center',
    },
    header: {
      flex: 1,
    },
    logoContainer: {
      marginVertical: 20,
    },
    logoText: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#fff',
    },
    signUp: {
      color: '#36f64c'
    },
    title: {
      fontSize: 22,
      fontWeight: 'bold',
      color: '#fff',
      marginBottom: 20,
    },
    inputContainer: {
      width: '100%',
    },
    input: {
      backgroundColor: '#2c2c2c',
      color: '#fff',
      fontSize: 16,
      padding: 12,
      borderRadius: 5,
      marginBottom: 15,
    },
    passwordContainer: {
      position: 'relative',
    },
    loginButton: {
      flex: 1,
    },
    signUpButton: {
      backgroundColor: '#fff',
      paddingVertical: 15,
      paddingHorizontal: 50,
      borderRadius: 30,
      marginBottom: 20,
    },
    signUpButtonText: {
      color: '#000',
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    socialButtonsContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginBottom: 20,
    },
    socialButton: {
      backgroundColor: '#2c2c2c',
      width: 50,
      height: 50,
      borderRadius: 25,
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: 10,
    },
    socialButtonText: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
    },
    footerText: {
      fontSize: 12,
      color: '#aaa',
      textAlign: 'center',
    },
    link: {
      color: '#fff',
      fontWeight: 'bold',
    },
    footer: {
      flex: 1
    },
  });
  