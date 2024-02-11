import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import LoginScreen from "./apps/Screens/LoginScreen";
import { createContext, useEffect, useState } from "react";
import { client } from "./apps/Utils/KindeConfig";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigation from "./apps/Navigation/TabNavigation";
import { useFonts } from "expo-font";

export const AuthContext = createContext();
export default function App() {
  const [auth, setAuth] = useState(false);

  const [fontsLoaded, fontError] = useFonts({
    "outfit": require("./assets/fonts/Outfit-Regular.ttf"),
    "outfit-medium": require("./assets/fonts/Outfit-Medium.ttf"),
    "outfit-bold": require("./assets/fonts/Outfit-Bold.ttf"),
  });

  const checkAuthenticate = async () => {
    // Using `isAuthenticated` to check if the user is authenticated or not
    if (await client.isAuthenticated) {
      console.log("Authenticated -> forwarding to Home Page");
      setAuth(true);
    } else {
      console.log("Not Authenticated");
      setAuth(false);
    }
  };

  useEffect(() => {
    checkAuthenticate();
  }, [auth]);

  return (
    <View style={styles.container}>
      <AuthContext.Provider value={{ auth, setAuth }}>
        <NavigationContainer>
          {auth ? <TabNavigation /> : <LoginScreen />}
        </NavigationContainer>
      </AuthContext.Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
