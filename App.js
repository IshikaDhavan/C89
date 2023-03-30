import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from "./screens/Home";
import DailyPic from "./screens/DailyPic";
import StarMap from "./screens/StarMap";
import SpaceCraft from "./screens/SpaceCraft";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="DailyPic" component={DailyPic} />
        <Stack.Screen name="Meteor" component={StarMap} />
        <Stack.Screen name="Updates" component={SpaceCraft} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;