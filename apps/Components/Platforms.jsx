import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { platforms } from "../Utils/Constant";
import Colors from "../Utils/Colors";
import SectionHeading from "./SectionHeading";

export default function Platforms({ selectedPlatform }) {
  console.log(platforms);
  const [activeIndex, setActiceIndex] = useState();
  return (
    <View style={{ marginTop: 18 }}>
      <SectionHeading heading={"Platforms"} />
      <FlatList
        data={platforms}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <>
            <TouchableOpacity
              style={[
                styles.container,
                activeIndex === index && {
                  borderWidth: 1,
                  borderColor: Colors.Primary,
                },
              ]}
              onPress={() => {
                setActiceIndex(index);
                selectedPlatform(item?.title);
              }}
            >
              <Image
                source={item?.src}
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 99,
                  objectFit: "contain",
                }}
              />
              <Text style={{ fontSize: 11, textAlign: "center", marginTop: 4 }}>
                {item?.title}
              </Text>
            </TouchableOpacity>
            <Text>{"     "}</Text>
          </>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.White,
    padding: 14,
    marginTop: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    width: 90,
    gap: 5,
  },
});
