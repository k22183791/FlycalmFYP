import type { AppColors } from "@/constants/colors";
import { StyleSheet } from "react-native";

export function createStyles(colors: AppColors) {
  return StyleSheet.create({
    card: {
      marginTop: 16,
    },
    recommendEyebrow: {
      fontSize: 12,
      fontWeight: "500",
      color: colors.textMuted,
      marginBottom: 8,
    },
    recommendTitle: {
      fontSize: 16,
      fontWeight: "700",
      color: colors.textPrimary,
      lineHeight: 22,
    },
    recommendSubtitle: {
      fontSize: 14,
      lineHeight: 20,
      color: colors.textSecondary,
      marginTop: 6,
    },
    startLink: {
      marginTop: 12,
      fontSize: 15,
      fontWeight: "700",
      color: colors.primary,
    },
  });
}
