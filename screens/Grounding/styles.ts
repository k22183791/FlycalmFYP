import type { AppColors } from "@/constants/colors";
import { Platform, StyleSheet } from "react-native";

export function createStyles(colors: AppColors) {
  return StyleSheet.create({
    title: {
      fontSize: 26,
      fontWeight: "700",
      color: colors.textPrimary,
      alignSelf: "flex-start",
    },
    subtitle: {
      fontSize: 15,
      marginTop: 8,
      lineHeight: 22,
      color: colors.textSecondary,
      alignSelf: "flex-start",
    },
    progressRow: {
      flexDirection: "row",
      gap: 8,
      marginTop: 22,
    },
    segment: {
      flex: 1,
      height: 4,
      borderRadius: 2,
      backgroundColor: colors.surfaceMuted,
    },
    segmentFilled: {
      backgroundColor: colors.primary,
    },
    cardClip: {
      marginTop: 22,
      overflow: "hidden",
    },
    card: {
      padding: 22,
      borderRadius: 20,
      backgroundColor: colors.white,
      borderWidth: 1,
      borderColor: colors.borderDefault,
      ...Platform.select({
        ios: {
          shadowColor: colors.shadow,
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.08,
          shadowRadius: 14,
        },
        android: {
          elevation: 0,
        },
      }),
    },
    stepTitle: {
      fontSize: 18,
      fontWeight: "700",
      color: colors.textPrimary,
      lineHeight: 24,
    },
    stepBody: {
      fontSize: 15,
      marginTop: 12,
      lineHeight: 23,
      color: colors.textSecondary,
    },
    navSingle: {
      marginTop: 26,
      width: "100%",
    },
    navRow: {
      flexDirection: "row",
      marginTop: 26,
      gap: 12,
    },
    navBtnFlex: {
      flex: 1,
    },
    btnPrimary: {
      backgroundColor: colors.primary,
      borderRadius: 12,
      minHeight: 54,
      justifyContent: "center",
      alignItems: "stretch",
      paddingHorizontal: 16,
      ...Platform.select({
        ios: {
          shadowColor: colors.primary,
          shadowOffset: { width: 0, height: 3 },
          shadowOpacity: 0.25,
          shadowRadius: 12,
        },
        android: {
          elevation: 3,
        },
      }),
    },
    btnPrimaryText: {
      color: colors.white,
      fontSize: 14,
      fontWeight: "700",
      textAlign: "center",
      width: "100%",
    },
    btnOutline: {
      backgroundColor: colors.white,
      borderWidth: 1,
      borderColor: colors.textPrimary,
      borderRadius: 12,
      minHeight: 54,
      justifyContent: "center",
      alignItems: "stretch",
      paddingHorizontal: 16,
    },
    btnOutlineText: {
      color: colors.textPrimary,
      fontSize: 14,
      fontWeight: "700",
      textAlign: "center",
      width: "100%",
    },
  });
}
