import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import IconSearch from "react-native-vector-icons/MaterialIcons";

const AppLogo = () => {
  return (
    <View style={style.logo}>
      <Icon name="silverware-variant" size={30} />
      <Text style={{ marginStart: 10, fontSize: 27, fontWeight: "bold" }}>
        Delecious
      </Text>
    </View>
  );
};

// pasta
// patreon;
// party - popper;
// pizza;
// rice;
// silverware-clean

// silverware-fork //sort-variant //silverware-variant

const style = StyleSheet.create({
  logo: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-start",
    padding: 10,
    alignItems: "center",
    marginTop: 40,
  },
});

export default AppLogo;
