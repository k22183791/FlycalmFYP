import { HapticTab } from "@/components/haptic-tab";
import Icons from "@/components/ui/Icons";
import type { AppColors } from "@/constants/colors";
import { useAccessibilityPreferences } from "@/contexts/AccessibilityPreferencesContext";
import { useAppColors } from "@/hooks/useAppColors";
import { scaleTextStyle } from "@/utils/scaleTextStyle";
import { Tabs } from "expo-router";
import React, { useMemo } from "react";
import { Platform, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

function tabBarStyles(
  colors: AppColors,
  textScale: number,
  bottomInset: number,
) {
  const padTop = Platform.OS === "ios" ? 8 : 6;
  const padBottom = Math.max(bottomInset, Platform.OS === "ios" ? 20 : 12);
  const contentMin = Platform.OS === "ios" ? 52 : 48;

  return StyleSheet.create({
    tabBar: {
      backgroundColor: colors.white,
      borderTopWidth: StyleSheet.hairlineWidth,
      borderTopColor: colors.borderDefault,
      paddingTop: padTop,
      paddingBottom: padBottom,
      height: contentMin + padTop + padBottom,
    },
    tabBarLabel: scaleTextStyle(
      {
        fontSize: 12,
        fontWeight: "500",
        marginTop: 2,
      },
      textScale,
    )!,
    tabBarItem: {
      paddingTop: 4,
    },
  });
}

export default function TabLayout() {
  const colors = useAppColors();
  const { textScale } = useAccessibilityPreferences();
  const { bottom: bottomInset } = useSafeAreaInsets();
  const styles = useMemo(
    () => tabBarStyles(colors, textScale, bottomInset),
    [colors, textScale, bottomInset],
  );

  return (
    <Tabs
      initialRouteName="home"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.tabInactive,
        tabBarStyle: styles.tabBar,
        tabBarLabelStyle: styles.tabBarLabel,
        tabBarItemStyle: styles.tabBarItem,
        tabBarButton: HapticTab,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <Icons family="Feather" name="home" size={23} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="calm"
        options={{
          title: "Calm Hub",
          tabBarIcon: ({ color, size }) => (
            <Icons
              family="MaterialCommunityIcons"
              name="weather-windy"
              size={size ?? 24}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="grounding"
        options={{
          title: "Grounding",
          tabBarIcon: ({ color, size }) => (
            <Icons
              family="MaterialCommunityIcons"
              name="anchor"
              size={size ?? 24}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color, size }) => (
            <Icons
              family="Feather"
              name="settings"
              size={size ?? 24}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
