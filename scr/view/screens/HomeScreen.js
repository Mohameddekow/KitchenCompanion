import React from "react";
import { View, Text } from "react-native";
import AppLogo from "../../componets/Logo";
import SearchScreen from "./SearchScreen";

function HomeScreen() {
  return (
    <View>
      <AppLogo />
      <SearchScreen />
    </View>
  );
}

export default HomeScreen;
