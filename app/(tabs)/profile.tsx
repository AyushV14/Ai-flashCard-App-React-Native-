import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useEffect } from 'react';
import { useRouter } from 'expo-router';
import { signOutUser } from '@/services/AuthService';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from "@/services/FirebaseConfig"

const Profile = () => {
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.replace('/auth/Signin');
      }
    });

    return () => unsubscribe();
  }, [router]);

  const handleSignOut = async () => {
    try {
      await signOutUser();
      router.replace('/auth/Signin');
    } catch (error) {
      console.log('Sign out error:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <TouchableOpacity style={styles.signOutButton} onPress={handleSignOut}>
        <Text style={styles.signOutText}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1e3a8a',
    marginBottom: 20,
  },
  signOutButton: {
    backgroundColor: '#ff4444',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  signOutText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Profile