import React from "react";
import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  useEffect,
  useState,
} from "react-native";
// import AppLogo from "../../componets/Logo";
// import SearchScreen from "./SearchScreen";
// import RecipesCard from "../../componets/RecipesCard";

const photosDataUrl = "https://jsonplaceholder.typicode.com/photos";

function Recipe({ navigation }) {
  const [isLoading, setLoading] = useState(true);
  const [photosData, setPhotosData] = useState([]);

  const getPhotosData = async () => {
    try {
      const response = await fetch(photosDataUrl);
      const result = await response.json();

      const newPhotosData = Object.values(result); //change the json object into an array object
      setPhotosData(newPhotosData);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    getPhotosData();
  }, []);

  console.log(photosData);

  if (isLoading) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text> Searching places.... </Text>
      </View>
    );
  }
  return (
    <View>
      <FlatList
        data={photosData}
        renderItem={({ item }) => {
          <Text>{item.title}</Text>;
          {
            /* <RecipesCard data={item} />; */
          }
        }}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

export default Recipe;
