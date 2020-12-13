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
import CategoriesPage from "./pages/CategoriesPage";
import { AttractionContextProvider } from "./contexts/AttractionContext";
import { AccessibilityContextProvider } from "./contexts/AccessibilityContext";
import { LocationContextProvider } from "./contexts/LocationContext";
import { AudioContextProvider } from "./contexts/AudioContext";
import { CategoryContextProvider } from "./contexts/CategoryContext";
import { GeofenceContextProvider } from "./contexts/GeofenceContext";
import { getSelectedCategories } from "./localStorage";


const App = () => {
  const [dataLoaded, setDataLoaded] = useState(false);
  const [ selectedCategories, setSelectedCategories ] = useState([])
  const Stack = createStackNavigator();

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={() => fetchData(setSelectedCategories) }
        onFinish={() => setDataLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }
  return (
    <SafeAreaProvider> 
      <LocationContextProvider>
        <CategoryContextProvider>
          <AttractionContextProvider>
            <AccessibilityContextProvider>
              <AudioContextProvider>
                  <GeofenceContextProvider>
                    <NavigationContainer>
                      <Stack.Navigator
                        initialRouteName= {getInitialRoute(selectedCategories)}
                        screenOptions={{
                          headerShown: false,
                        }}
                      >
                        <Stack.Screen name="Categories" component={CategoriesPage}  />
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
                  </GeofenceContextProvider>
              </AudioContextProvider>
            </AccessibilityContextProvider>          
          </AttractionContextProvider>  
        </CategoryContextProvider>      
      </LocationContextProvider>
    </SafeAreaProvider>
  );
};


const fetchData = async (setSelectedCategories) => {
  await Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
  
  const selectedCategories = await getSelectedCategories()
  setSelectedCategories(selectedCategories)
};


const getInitialRoute = (selectedCategories) => {
  console.log(console.log("selected on app", selectedCategories))
  if (selectedCategories.length > 0){
    return "Map"
  }
  else {
    return "Categories"
  }
}

export default App;
