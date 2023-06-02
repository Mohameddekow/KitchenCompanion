import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import AppLogo from "../../componets/Logo";
import SearchScreen from "./SearchScreen";
import RecipesCard from "../../componets/RecipesCard";

function HomeScreen() {
  return (
    <SafeAreaView>
      <AppLogo />
      <SearchScreen />
      <RecipesCard />
    </SafeAreaView>
  );
}

export default HomeScreen;
