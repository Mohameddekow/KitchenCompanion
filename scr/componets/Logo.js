import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import IconSearch from "react-native-vector-icons/MaterialIcons";
import COLORS from "../conts/colors";
const AppLogo = () => {
  return (
    <View>
      <View style={style.logo}>
        <Icon name="silverware-variant" size={30} />
        <Text style={{ marginStart: 10, fontSize: 27, fontWeight: "bold" }}>
          Delecious
        </Text>
      </View>

      <View style={style.welcomeStyle}>
        <Text style={{ fontSize: 28, fontWeight: "bold" }}>Welcome to</Text>
        <Text style={{ fontSize: 33, fontWeight: "bold", color: COLORS.green }}>
          Kitchen Companion
        </Text>
      </View>
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

  welcomeStyle: {
    width: "100%",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    padding: 10,
  },
});

export default AppLogo;
