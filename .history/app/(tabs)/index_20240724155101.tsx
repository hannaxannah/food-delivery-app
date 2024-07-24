import { View, Text, StyleSheet, TouchableHighlight } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <TouchableHighlight onPress={onclick}>
        <Text>Home</Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
