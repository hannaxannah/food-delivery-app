import { Stack, Navigator } from "expo-router";
import { NavigationContainer } from "@react-navigation/native";
import index from "./index";
import detail from "./detail";

export default function RootLayout() {
  return (
    <NavigationContainer>
      <Stack
        initialRouteName="index"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#f4511e",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen name="홈화면" component={index} />
        <Stack.Screen name="explore" component={detail} />
      </Stack>
    </NavigationContainer>
  );
}
