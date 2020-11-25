import React, { useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { AppLoading } from "expo";

import SettingPage from "./pages/SettingPage";
import MapPage from "./pages/MapPage";
import DetailsPage from "./pages/DetailsPage";
import AccessibilityPage from "./pages/AccessbilityPage";
import * as Font from "expo-font";

import { AttractionContextProvider } from "./contexts/AttractionContext";
import { AccessibilityContextProvider } from "./contexts/AccessibilityContext";

const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
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
        <AccessibilityContextProvider>
          <NavigationContainer>
            <Stack.Navigator
              initialRouteName="Map"
              screenOptions={{
                headerShown: false,
              }}
            >
              <Stack.Screen name="Map" component={MapPage} />
              <Stack.Screen name="Setting" component={SettingPage} />
              <Stack.Screen
                name="Details"
                component={DetailsPage}
                options={{ headerShown: true }}
              />
              <Stack.Screen name="Accessibility" component={AccessibilityPage} />
            </Stack.Navigator>
          </NavigationContainer>          
        </AccessibilityContextProvider>
      </AttractionContextProvider>
    </SafeAreaProvider>
  );
};

export default App;
