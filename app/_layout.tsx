// app/_layout.tsx
import { Stack } from 'expo-router';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/services/FirebaseConfig';
import { useRouter } from 'expo-router';

export default function Layout() {
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        router.replace('/(tabs)/home');
      } else {
        router.replace('/');
      }
    });

    return () => unsubscribe();
  }, [router]);

  return <Stack screenOptions={{headerShown:false}}/>;
}