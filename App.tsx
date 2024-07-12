import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import HomeContainer from "./src/container/HomeContainer";
import { Provider } from "react-redux";
import store from "./src/services/store/Store";

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Home</Text>
        <StatusBar style="auto" />
        <HomeContainer />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    marginTop: 40,
  },
});
