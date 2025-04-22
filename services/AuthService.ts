// services/AuthService.ts
import { auth, db } from './FirebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, UserCredential, signOut } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { Alert } from 'react-native';

export const signUp = async (email: string, password: string, name: string) => {
  if (!name || !email || !password) {
    Alert.alert('Missing Values:', 'Enter all the fields.');
    return;
  }

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log('User created in Auth:', user); // Debug log

    // Save user data to Firestore
    await setDoc(doc(db, 'users', user.uid), {
      email: user.email,
      name,
      createdAt: new Date().toISOString(),
    });
    console.log('User document saved in Firestore for UID:', user.uid); 

    console.log('User signed up and saved:', user);
    return user;
  } catch (error: any) {
    console.log('Signup error details:', error); // Detailed error log
    const errorCode = error.code;
    let message = '';

    switch (errorCode) {
      case 'auth/email-already-in-use':
        message = 'This email address is already in use. Try logging in instead.';
        break;
      case 'auth/invalid-email':
        message = 'The email address is not valid. Please enter a valid email.';
        break;
      case 'auth/weak-password':
        message = 'Your password is too weak. Please use at least 6 characters.';
        break;
      case 'auth/operation-not-allowed':
        message = 'Email/password accounts are not enabled.';
        break;
      case 'permission-denied': 
        message = 'Permission denied. Check Firestore rules.';
        break;
      default:
        message = 'Something went wrong. Please try again later.';
    }

    console.log(error.message);
    Alert.alert('Signup Error', message);
    throw error;
  }
};

export const signIn = async (email: string, password: string) => {
  if (!email || !password) {
    Alert.alert('Missing Values:', 'Enter all the fields.');
    return;
  }

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log('Signed in user:', user);
    return user;
  } catch (error: any) {
    const errorCode = error.code;
    let message = '';

    switch (errorCode) {
      case 'auth/wrong-password':
        message = 'Incorrect password. Please try again.';
        break;
      case 'auth/user-not-found':
        message = 'No account found with this email. Please sign up.';
        break;
      case 'auth/invalid-email':
        message = 'The email address is not valid. Please enter a valid email.';
        break;
      case 'auth/too-many-requests':
        message = 'Too many attempts. Please try again later.';
        break;
      default:
        message = 'Something went wrong. Please try again later.';
    }

    console.log(error.message);
    Alert.alert('Signin Error', message);
    throw error;
  }
};

export const signOutUser = async () => {
  try {
    await signOut(auth);
    console.log('User signed out');
  } catch (error) {
    console.log('Sign out error:', error);
    throw error;
  }
};