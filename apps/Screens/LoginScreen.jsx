import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import Colors from "../Utils/Colors";
import { client } from "../Utils/KindeConfig";
import { AuthContext } from "../../App";

const LoginScreen = () => {
  const { setAuth } = useContext(AuthContext);

  const handleSignUp = async () => {
    const token = await client.register();
    if (token) {
      console.log("Authenticated Successfully");
    }
  };

  const handleSignIn = async () => {
    const token = await client.login();
    if (token) {
      console.log("Authenticated Successfully");

      setAuth(true);
    }
  };

  return (
    <View>
      <Image
        source={require("../../assets/images/rocket.jpg")}
        style={{ objectFit: "cover", width: "100%", height: 400 }}
      />

      <View style={{ padding: 20, alignItems: "center" }}>
        <Text style={{ fontSize: 45, fontWeight: "bold" }}>
          Welcome To <Text style={{ color: Colors.Primary }}>React Native</Text>
        </Text>

        <Text style={{ fontSize: 20, marginTop: 7, color: Colors.Gray }}>
          Learning By building REAL PROJECT
        </Text>

        <TouchableOpacity onPress={handleSignIn} style={styles.button}>
          <Text style={styles.text}> Sign In</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleSignUp}>
          <Text style={{ marginTop: 10, color: Colors.Primary, fontSize: 18 }}>
            Create An Account
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 15,
    backgroundColor: Colors.Primary,
    borderRadius: 99,
    color: "#fff",
    marginTop: 60,
    width: "100%",
    alignItems: "center",
  },
  text: {
    color: "#fff",
    fontSize: 20,
  },
});

export default LoginScreen;
