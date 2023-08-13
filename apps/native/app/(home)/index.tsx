import { StyleSheet } from "react-native";

import { Link } from "expo-router";
import { View } from "../../components/Themed";

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Link href="/results/0/1/2" style={styles.title}>
        IR A RESULTADOS
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#c2c",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
