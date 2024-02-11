import { View, Text, Image, TextInput, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { client } from "../Utils/KindeConfig";
import Colors from "../Utils/Colors";
import { Ionicons } from "@expo/vector-icons";

export default function Header() {
  const [userDetail, setUserDetail] = useState();
  const GetUserDetails = async () => {
    const User = await client.getUserDetails();
    setUserDetail(User);
  };
  useEffect(() => {
    GetUserDetails();
  }, []);
  return (
    <>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 7,
          alignItems: "center",
        }}
      >
        <Image
          source={{ uri: userDetail?.picture }}
          style={{ width: 45, height: 45, borderRadius: 99 }}
        />
        <View>
          <Text style={{ fontSize: 15, fontFamily: "outfit" }}>Welcome,</Text>
          <Text
            style={{
              fontSize: 19,
              color: Colors.Primary,
              fontFamily: "outfit-bold",
            }}
          >
            {userDetail?.given_name} {userDetail?.family_name}
          </Text>
        </View>
      </View>
      <View style={styles.inputSearch}>
        <Ionicons name="search" size={24} color={Colors.Gray} />
        <TextInput
          placeholder="Search"
          style={{ fontFamily: "outfit", width: "100%" }}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  inputSearch: {
    backgroundColor: Colors.White,
    padding: 10,
    borderRadius: 99,
    paddingHorizontal: 20,
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
    gap: 7,
    alignItems: "center",
    borderWidth: 0.4,
    borderColor: Colors.Primary,
  },
});
