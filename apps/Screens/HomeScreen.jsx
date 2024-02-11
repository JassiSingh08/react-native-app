import { View, Text, Button } from "react-native";
import React, { useState } from "react";
import Header from "../Components/Header";
import Platforms from "../Components/Platforms";

export default function HomeScreen() {
  const [platform, setPlatform] = useState();
  console.log(platform);
  return (
    <View style={{ padding: 20, marginTop: 25 }}>
      <Header />
      <Platforms selectedPlatform={setPlatform} />
    </View>
  );
}
