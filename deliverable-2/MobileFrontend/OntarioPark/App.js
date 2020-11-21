/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";
import {
  StyleSheet,
} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import MapPage from "./pages/MapPage";
import { AttractionContextProvider } from './contexts/AttractionContext'

const App = () => {
  return (
    <SafeAreaProvider>
      <AttractionContextProvider>
        <MapPage />      
      </AttractionContextProvider>
    </SafeAreaProvider>
  );
};

export default App;
