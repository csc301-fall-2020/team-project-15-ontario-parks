import React, { useState } from 'react';
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {AppLoading} from "expo";

import SettingPage from "./pages/SettingPage";
import MapPage from "./pages/MapPage";
import * as Font from "expo-font";

import { AttractionContextProvider } from './contexts/AttractionContext'

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  });
};

const App = () => {
  const [dataLoaded, setDataLoaded] = useState(false);
  const Stack = createStackNavigator();

  if (!dataLoaded) {
    return (
        <AppLoading
            startAsync={fetchFonts}
            onFinish={() => setDataLoaded(true)}
            onError={(err) => console.log(err)}
        />
    );
  }
  return (
    <SafeAreaProvider>
      <AttractionContextProvider>
        <NavigationContainer>
          <Stack.Navigator 
            initialRouteName="Map"
            screenOptions={{
              headerShown: false
            }}
          >
            <Stack.Screen 
              name="Map"
              component={MapPage}
            />
            
            <Stack.Screen 
              name="Setting"
              component={SettingPage}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </AttractionContextProvider>
    </SafeAreaProvider>
  );
};

export default App;
