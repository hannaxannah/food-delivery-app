import { View, Text, StyleSheet } from "react-native";

export default function HomeScreen() {
  return (
    <>
      <View style={styles.container}>
        <Text>Home</Text>
      </View>
      <View style={{ flex: 5, backgroundColor: "orange" }}>
        <Text>Second</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "yellow",
  },
});
