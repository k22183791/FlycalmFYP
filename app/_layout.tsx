import { AccessibilityPreferencesProvider } from "@/contexts/AccessibilityPreferencesContext";
import { useColorScheme } from "@/hooks/use-color-scheme";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import * as Font from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [appIsReady, setAppIsReady] = useState(false);
  const colorScheme = useColorScheme();

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          "Satoshi-Regular": require("@/assets/fonts/Satoshi-Regular.otf"),
          "Satoshi-Medium": require("@/assets/fonts/Satoshi-Medium.otf"),
          "Satoshi-Bold": require("@/assets/fonts/Satoshi-Bold.otf"),
          "Satoshi-Italic": require("@/assets/fonts/Satoshi-Italic.otf"),
        });
      } catch (e) {
        console.warn("Error loading fonts:", e);
      } finally {
        setAppIsReady(true);
        await SplashScreen.hideAsync();
      }
    }

    prepare();
  }, []);

  if (!appIsReady) return null;

  return (
    <SafeAreaProvider>
      <AccessibilityPreferencesProvider>
        <ThemeProvider
          value={colorScheme === "dark" ? DarkTheme : DefaultTheme}
        >
          <Stack screenOptions={{ headerShown: false }} />
          <StatusBar style="auto" />
        </ThemeProvider>
      </AccessibilityPreferencesProvider>
    </SafeAreaProvider>
  );
}
