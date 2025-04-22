// services/FirebaseConfig.ts
import { initializeApp } from "firebase/app";
import { getAuth, getReactNativePersistence, initializeAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { Platform } from "react-native";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY,
  authDomain: "ai-flashcard-app-8eb50.firebaseapp.com",
  projectId: "ai-flashcard-app-8eb50",
  storageBucket: "ai-flashcard-app-8eb50.firebasestorage.app",
  messagingSenderId: "967242107334",
  appId: "1:967242107334:web:0b2f1f8810a644ab384ac7",
  measurementId: "G-BXK9BGGF7K"
};

const app = initializeApp(firebaseConfig);

export const auth = Platform.OS === 'web' ? getAuth(app) : initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
export const db = getFirestore(app);