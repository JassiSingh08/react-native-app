import { View, Text, Button } from "react-native";
import React, { useContext } from "react";
import { client } from "../Utils/KindeConfig";
import { AuthContext } from "../../App";

export default function HomeScreen() {
  const { setAuth } = useContext(AuthContext);
  const handleLogout = async () => {
    const loggedOut = await client.logout(true);
    if (loggedOut) {
      console.log("Logged out  -> forwarding to Login Page");
      setAuth(false);
    }
  };
  return (
    <View>
      <Text>HomeScreen</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
}
