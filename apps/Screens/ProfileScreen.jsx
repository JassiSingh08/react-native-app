import { View, Text, Button, TouchableOpacity, StyleSheet } from "react-native";
import React, { useContext } from "react";
import { client } from "../Utils/KindeConfig";
import { AuthContext } from "../../App";

export default function ProfileScreen() {
  const { setAuth } = useContext(AuthContext);

  const handleLogout = async () => {
    const loggedOut = await client.logout(true);
    if (loggedOut) {
      console.log("Logged out  -> forwarding to Login Page");
      setAuth(false);
    }
  };

  return (
    <View style={{ marginTop: 60 }}>
      <Text>ProfileScreen</Text>
      <TouchableOpacity onPress={handleLogout} style={{ marginTop: 20 }}>
        <Text style={styles.logOut}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  logOut: {
    backgroundColor: "#8efc",
    padding: 15,
    width: "50%",
    borderRadius: 99,
    textAlign: "center",
  },
});
