import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import IconSearch from "react-native-vector-icons/MaterialIcons";
import COLORS from "../../conts/colors";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
function SearchScreen() {
  return (
    <View style={style.searchContainer}>
      <View style={style.searchBarStyle}>
        <IconSearch
          style={{ margin: 10 }}
          name="search"
          size={28}
          color={COLORS.dark}
        />

        <TextInput
          placeholder="Search"
          style={{ fontSize: 18, fontWeight: "bold" }}
        />
      </View>
      <View>
        <Icon
          style={style.sortIcon}
          name="sort-variant"
          size={28}
          borderRadius="10"
          color={COLORS.white}
        />
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  searchBarStyle: {
    backgroundColor: COLORS.white,
    borderRadius: 10,
    height: 55,
    flex: 0.88,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
  },

  searchContainer: {
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
  },

  sortIcon: {
    borderRadius: 10,
    backgroundColor: COLORS.green,
    padding: 10,
    height: 54,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SearchScreen;
