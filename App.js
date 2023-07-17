import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './app/screens/HomeScreen';
import MovieDetailsScreen from './app/screens/MovieDetailsScreen'
import FavoriteMoviesScreen from './app/screens/FavoriteMoviesScreen'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaView style={{ backgroundColor: 'orange', flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" options={{ headerShown: false }} component={HomeScreen} />
          <Stack.Screen name='MovieDetails' options={{headerShown: false}} component={MovieDetailsScreen}/>
          <Stack.Screen name='Favorites' options={{headerShown: false}} component={FavoriteMoviesScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
