import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import COLORS from "../conts/colors";
import { LinearGradient } from "expo-linear-gradient";
import { ImagesAssets } from "../../assets/ImagesAssets";

const RecipesCard = () => {
  return (
    <View style={styles.recipesCardContainer}>
      <LinearGradient
        style={styles.gradientStyle}
        colors={[
          "rgba(0,0,0,0)",
          "rgba(0,0,0,0.4)",
          "rgba(0,0,0,0.6)",
          "rgba(0,0,0,0.8)",
        ]}
        start={{ x: 0, y: 0.1 }}
        end={{ x: 0, y: 1 }}>
        <Image
          style={[styles.recipeImage, { zIndex: -3, position: "absolute" }]}
          source={ImagesAssets.home}
        />
        <Text
          style={[styles.recpiesText, { zIndex: 3, alignItems: "flex-end" }]}>
          Recpies card
        </Text>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  recipeImage: {
    height: 219,
    width: 178,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },

  gradientStyle: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "flex-end",
    alignItems: "center",
    borderRadius: 10,
    flex: 1,
    backfaceVisibility: "visible",
    backgroundColor: "transparent",
    zIndex: 4,
  },
  // main container
  recipesCardContainer: {
    height: 220,
    width: 180,
    backgroundColor: COLORS.green,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    padding: 10,
    margin: 4,
    zIndex: -5,
  },

  recpiesText: {
    fontSize: 22,
    fontWeight: "bold",
    justifyContent: "center",
    alignItems: "flex-end",
    marginBottom: 30,
    flexDirection: "column",
    color: COLORS.green,
  },
});

export default RecipesCard;
