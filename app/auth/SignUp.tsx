// SignUp.tsx
import { StyleSheet, Text, View, TouchableOpacity, Pressable } from 'react-native';
import React, { useState } from 'react';
import LottieView from 'lottie-react-native';
import CustomInput from '@/components/CustomInput';
import CustomButton from '@/components/CustomButton';
import { useRouter } from 'expo-router';
import { signUp } from '@/services/AuthService';

const SignUp = () => {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSignUp = async () => {
    try {
      await signUp(email, password, name);
      router.replace('/(tabs)/home');
    } catch (error) {
      console.log('Sign up error in component:', error); 
    }
  };

  return (
    <View style={styles.container}>
      <LottieView
        source={require('@/assets/animations/bgAuth.json')}
        style={styles.backgroundAnimation}
        autoPlay
        loop
        resizeMode="cover"
      />
      <TouchableOpacity onPress={() => router.replace('/')}>
        <LottieView
          source={require('@/assets/animations/backbtn.json')}
          style={styles.backArrow}
          autoPlay
          loop
          resizeMode="contain"
        />
      </TouchableOpacity>

      <Text style={styles.title}>Create Your Account.</Text>
      <Text style={styles.subtitle}>
        Start your learning journey!{'\n'}
        We're excited to have you!
      </Text>
      <View style={styles.content}>
        <Text style={styles.inputLabel}>Full name</Text>
        <CustomInput placeholder="Your full name" onChangeText={setName} />
        <Text style={styles.inputLabel}>Email</Text>
        <CustomInput placeholder="Your email" onChangeText={setEmail} />
        <Text style={styles.inputLabel}>Password</Text>
        <CustomInput placeholder="Password" secureTextEntry={true} showPasswordToggle={true} onChangeText={setPassword} />
        <View style={styles.submitContent}>
          <CustomButton title="Sign up" onPress={onSignUp} width={300} />
          <Text style={styles.registerText}>
            Already have an account?{' '}
            <Pressable onPress={() => router.replace('/auth/Signin')}>
              <Text style={styles.registerLink}>Sign in</Text>
            </Pressable>
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 15,
  },
  backgroundAnimation: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 450,
    height: 280,
  },
  backArrow: {
    position: 'absolute',
    top: 60,
    left: 0,
    width: 70,
    height: 60,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1e3a8a',
    marginTop: 200,
    marginLeft: 15,
    textAlign: 'left',
    marginBottom: 10,
    flexWrap: 'nowrap',
  },
  subtitle: {
    fontSize: 26,
    color: '#1e3a8a',
    marginLeft: 15,
    textAlign: 'left',
    marginBottom: 20,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginTop: -150,
    paddingHorizontal: 15,
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1e3a8a',
    marginBottom: 5,
    alignSelf: 'flex-start',
    width: '100%',
  },
  registerText: {
    fontSize: 14,
    color: '#1e3a8a',
    marginTop: 10,
    textAlign: 'center',
  },
  submitContent: {
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },
  registerLink: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1e3a8a',
    top: 5,
  },
});

export default SignUp;