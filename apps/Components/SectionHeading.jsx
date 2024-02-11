import { View, Text } from "react-native";
import React from "react";
import Colors from "../Utils/Colors";

export default function SectionHeading({ heading }) {
  return (
    <View>
      <Text
        style={{
          fontFamily: "outfit-medium",
          fontSize: 20,
          color: Colors.Primary,
        }}
      >
        {heading}
      </Text>
    </View>
  );
}
