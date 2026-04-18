import type { AppColors } from "@/constants/colors";
import { Platform, StyleSheet } from "react-native";

export function createHomeSurfaceCard(colors: AppColors) {
  return StyleSheet.create({
    root: {
      borderRadius: 18,
      padding: 22,
      backgroundColor: colors.surfaceCard,
      borderWidth: 1,
      borderColor: colors.borderDefault,
      ...Platform.select({
        ios: {
          shadowColor: colors.shadow,
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.08,
          shadowRadius: 12,
        },
        android: {
          // Elevation shadows ignore Reanimated entering opacity on this platform.
          elevation: 0,
        },
      }),
    },
  });
}
