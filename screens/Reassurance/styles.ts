import type { AppColors } from "@/constants/colors";
import { PRIMARY_BUTTON_HEIGHT } from "@/constants/layout";
import { Platform, StyleSheet } from "react-native";

export function createStyles(colors: AppColors) {
  return StyleSheet.create({
    title: {
      fontSize: 26,
      fontWeight: "700",
      color: colors.textPrimary,
      alignSelf: "flex-start",
      marginBottom: 20,
      lineHeight: 32,
    },
    list: {
      gap: 14,
      marginBottom: 28,
    },
    card: {
      borderRadius: 18,
      padding: 20,
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
          elevation: 0,
        },
      }),
    },
    cardTitle: {
      fontSize: 16,
      fontWeight: "700",
      color: colors.textPrimary,
      marginBottom: 8,
      lineHeight: 22,
    },
    cardBody: {
      fontSize: 14,
      lineHeight: 22,
      color: colors.textSecondary,
    },
    footerBtn: {
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
    footerBtnText: {
      color: colors.white,
      fontSize: 16,
      fontWeight: "700",
      textAlign: "center",
    },
  });
}
