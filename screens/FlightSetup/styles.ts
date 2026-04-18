import type { AppColors } from "@/constants/colors";
import { PRIMARY_BUTTON_HEIGHT } from "@/constants/layout";
import { Platform, StyleSheet } from "react-native";

export function createStyles(colors: AppColors) {
  return StyleSheet.create({
    headBlock: {
      marginBottom: 8,
    },
    screenTitle: {
      fontSize: 28,
      fontWeight: "700",
      color: colors.textPrimary,
      lineHeight: 34,
    },
    screenSubtitle: {
      fontSize: 16,
      marginTop: 8,
      lineHeight: 24,
      color: colors.textSecondary,
    },
    fieldCard: {
      backgroundColor: colors.surfaceCard,
      borderRadius: 18,
      paddingHorizontal: 16,
      paddingVertical: 14,
      marginBottom: 14,
      ...Platform.select({
        ios: {
          shadowColor: colors.shadow,
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.06,
          shadowRadius: 10,
        },
        android: {
          elevation: 2,
        },
      }),
    },
    fieldLabelRow: {
      flexDirection: "row",
      alignItems: "center",
      gap: 8,
      marginBottom: 10,
    },
    fieldLabel: {
      fontSize: 13,
      color: colors.textSecondary,
      fontWeight: "500",
    },
    flightInput: {
      fontSize: 17,
      color: colors.textPrimary,
      padding: 0,
      margin: 0,
      minHeight: 24,
    },
    infoBox: {
      marginTop: 8,
      marginBottom: 8,
      padding: 16,
      borderRadius: 16,
      backgroundColor: colors.surfaceCard,
      borderWidth: 0.43,
      borderColor: colors.primary,
      overflow: "hidden",
    },
    infoTitle: {
      fontSize: 15,
      fontWeight: "700",
      color: colors.primary,
      marginBottom: 8,
    },
    infoBody: {
      fontSize: 14,
      lineHeight: 22,
      color: colors.textSecondary,
    },
    footer: {
      paddingHorizontal: 24,
      paddingTop: 8,
      paddingBottom: 12,
      gap: 14,
    },
    formError: {
      fontSize: 14,
      lineHeight: 20,
      color: colors.turbulenceHigh,
      textAlign: "center",
    },
    continueBtn: {
      width: "100%",
      minHeight: PRIMARY_BUTTON_HEIGHT,
      backgroundColor: colors.primary,
      borderRadius: 14,
      paddingVertical: 20,
      alignItems: "center",
      justifyContent: "center",
    },
    continueText: {
      color: colors.white,
      fontSize: 17,
      fontWeight: "700",
    },
    skipText: {
      fontSize: 15,
      color: colors.textSecondary,
      textAlign: "center",
    },
  });
}
