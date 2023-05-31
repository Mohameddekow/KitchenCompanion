import React from "react";
import { View, Text } from "react-native";
import AppLogo from "../../componets/Logo";

function HomeScreen() {
  return (
    <View>
      <Text style={{ marginTop: 80 }}>Home Screen</Text>
      <AppLogo />
    </View>
  );
}

export default HomeScreen;
