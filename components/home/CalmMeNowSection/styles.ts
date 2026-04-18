import type { AppColors } from "@/constants/colors";
import { PRIMARY_BUTTON_HEIGHT } from "@/constants/layout";
import { Platform, StyleSheet } from "react-native";

export function createStyles(colors: AppColors) {
  return StyleSheet.create({
    wrap: {
      marginTop: 24,
      alignItems: "center",
      gap: 10,
    },
    calmMeLabel: {
      fontSize: 14,
      fontWeight: "600",
      color: colors.primary,
    },
    primaryCta: {
      width: "100%",
      backgroundColor: colors.primary,
      borderRadius: 16,
      minHeight: PRIMARY_BUTTON_HEIGHT,
      justifyContent: "center",
      paddingVertical: 18,
      paddingHorizontal: 20,
      ...Platform.select({
        ios: {
          shadowColor: colors.primary,
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.28,
          shadowRadius: 16,
        },
        android: {
          elevation: 0,
        },
      }),
    },
    primaryCtaText: {
      color: colors.white,
      fontSize: 16,
      fontWeight: "700",
      textAlign: "center",
    },
  });
}
