import React, { useState } from 'react';
import {
  StyleSheet,
} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import {AppLoading} from "expo";
import {
  // Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from "react-native/Libraries/NewAppScreen";

import SettingPage from "./pages/SettingPage";
import MapPage from "./pages/MapPage";
import * as Font from "expo-font";
// import Header from "./components/Header";
// import DetailPage from "./components/DetailPage";

import { AttractionContextProvider } from './contexts/AttractionContext'

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  });
};

const App = () => {
  const [dataLoaded, setDataLoaded] = useState(false);

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
        {/*<MapHeader />*/}
        <MapPage />
      </AttractionContextProvider>
    </SafeAreaProvider>
  );
};

export default App;
