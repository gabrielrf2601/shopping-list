import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { KeyboardAvoidingView } from 'react-native';
import { AppProvider } from './src/hooks/AppProvider';
import Routes from './src/routes';

export default function App() {
  return (
    <AppProvider>
      <StatusBar style="auto" backgroundColor='transparent' translucent />
      <KeyboardAvoidingView
        style={{ flex: 1, marginTop: 20, backgroundColor: 'black'}}
      >
        <NavigationContainer>
            <Routes />
        </NavigationContainer>
      </KeyboardAvoidingView>
      
    </AppProvider>
  );
}