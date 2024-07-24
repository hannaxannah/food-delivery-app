import { View, Text, StyleSheet, TouchableHighlight } from "react-native";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const router = useRouter();

  const onClick = () => {
    router.push("/details");
  };

  return (
    <>
      <View style={styles.container}>
        <TouchableHighlight onPress={onClick}>
          <Text>Home</Text>
        </TouchableHighlight>
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
