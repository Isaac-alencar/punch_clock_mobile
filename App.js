import { SafeAreaView, StatusBar } from "react-native";
import { ThemeProvider } from "styled-components/native";
import MainNavigator from "@navigation/main-navigator";
import theme from "@styles/theme";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider theme={theme}>
        <SafeAreaView style={{ flex: 1 }}>
          <StatusBar style="auto" />
          <MainNavigator />
        </SafeAreaView>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
