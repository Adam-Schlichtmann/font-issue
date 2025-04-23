import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import * as Font from "expo-font";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.baseText}>Unstyled text</Text>
      {Font.getLoadedFonts().map((font) => {
        return (
          <Text key={font} style={[styles.baseText, { fontFamily: font }]}>
            {font}
          </Text>
        );
      })}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  baseText: {
    fontSize: 32,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
