import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const AppLogo = () => {
  return (
    <View style={style.logo}>
      <Icon name="md-boat" size={30} />
      <Text style={{ marginStart: 10, fontSize: 27, fontWeight: "bold" }}>
        Delecious
      </Text>
    </View>
  );
};

const style = StyleSheet.create({
  logo: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-start",
    padding: 10,
    alignItems: "center",
  },
});

export default AppLogo;
