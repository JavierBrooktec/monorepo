import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router/tabs";
export default function ScopeIndexLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="candidates"
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="account-group-outline"
              color={color}
              size={size}
            />
          ),
          tabBarLabel: "Candidats",
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="votes"
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="vote-outline"
              color={color}
              size={size}
            />
          ),
          tabBarLabel: "Votos",
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="territory"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="map-pin" color={color} size={size} />
          ),
          tabBarLabel: "Territorios",
          headerShown: false,
        }}
      />
    </Tabs>
  );
}
