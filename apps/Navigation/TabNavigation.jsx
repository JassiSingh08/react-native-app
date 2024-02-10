import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../Screens/HomeScreen";
import MyCourseScreen from "../Screens/MyCourseScreen";
import ProfileScreen from "../Screens/ProfileScreen";
import Colors from "../Utils/Colors";
import { Ionicons } from "@expo/vector-icons";
import { Text } from "react-native";

const Tab = createBottomTabNavigator();
export default function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.Primary,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
          tabBarLabel: ({ color, size }) => (
            <Text
              style={{
                color: color,
                fontSize: 12,
              }}
            >
              Home
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="My Course"
        component={MyCourseScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="book-sharp" size={size} color={color} />
          ),
          tabBarLabel: ({ color, size }) => (
            <Text
              style={{
                color: color,
                fontSize: 12,
              }}
            >
              My Courses
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-circle" size={size} color={color} />
          ),
          tabBarLabel: ({ color, size }) => (
            <Text
              style={{
                color: color,
                fontSize: 12,
              }}
            >
              Profile
            </Text>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
