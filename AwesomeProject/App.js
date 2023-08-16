import "react-native-gesture-handler";

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationRouting } from "./src/Components/NavigationRouting/NavigationRouting";

import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer>
      <NavigationRouting />
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
