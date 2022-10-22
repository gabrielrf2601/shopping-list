import React from 'react';
import { useFonts, Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';

export const AppProvider = ({ children }: any) => {
  const [fontsLoaded] = useFonts({
    Inter_400Regular, Inter_500Medium,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>{ children }</>
  )
};