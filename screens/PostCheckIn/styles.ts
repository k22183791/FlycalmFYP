import type { AppColors } from "@/constants/colors";
import { Platform, StyleSheet } from "react-native";

export function createStyles(colors: AppColors) {
  return StyleSheet.create({
    page: {
      flex: 1,
      width: "100%",
      justifyContent: "space-between",
    },
    hero: {
      alignItems: "center",
      gap: 16,
      paddingTop: 8,
      paddingBottom: 8,
    },
    alignCenter: {
      alignItems: "center",
    },
    checkCircle: {
      width: 88,
      height: 88,
      borderRadius: 44,
      backgroundColor: colors.successMutedBg,
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 8,
    },
    title: {
      fontSize: 28,
      fontWeight: "700",
      color: colors.textPrimary,
      textAlign: "center",
    },
    subtitle: {
      fontSize: 15,
      marginTop: 6,
      color: colors.textSecondary,
      textAlign: "center",
      lineHeight: 22,
    },
    actions: {
      gap: 12,
      alignItems: "stretch",
      width: "100%",
    },
    accordionSection: {
      marginTop: 4,
    },
    accordionTrigger: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      paddingVertical: 16,
      paddingHorizontal: 18,
      borderRadius: 12,
      backgroundColor: colors.white,
      borderWidth: 1,
      borderColor: colors.blueBorderMuted,
    },
    accordionTriggerText: {
      fontSize: 16,
      fontWeight: "600",
      color: colors.blueDark,
    },
    accordionPanel: {
      marginTop: 12,
      gap: 10,
    },
    exerciseRow: {
      borderRadius: 12,
      paddingVertical: 14,
      paddingHorizontal: 16,
      backgroundColor: colors.white,
      borderWidth: 1,
      borderColor: colors.borderPanel,
    },
    exerciseRowActive: {
      backgroundColor: colors.blueTint,
      borderColor: colors.blue,
    },
    exerciseTitle: {
      fontSize: 16,
      color: colors.textPrimary,
      lineHeight: 22,
    },
    exerciseTitleSelected: {
      color: colors.blue,
    },
    exerciseSub: {
      fontSize: 13,
      marginTop: 4,
      color: colors.textSecondary,
      lineHeight: 18,
    },
    primaryBtn: {
      width: "100%",
      minHeight: 54,
      borderRadius: 14,
      backgroundColor: colors.blue,
      alignItems: "center",
      justifyContent: "center",
      ...Platform.select({
        ios: {
          shadowColor: colors.blueDark,
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.22,
          shadowRadius: 14,
        },
        android: { elevation: 0 },
      }),
    },
    primaryBtnText: {
      fontSize: 16,
      color: colors.white,
    },
    outlineBtn: {
      width: "100%",
      minHeight: 54,
      borderRadius: 14,
      borderWidth: 1.5,
      borderColor: colors.primary,
      backgroundColor: colors.white,
      alignItems: "center",
      justifyContent: "center",
    },
    outlineBtnText: {
      fontSize: 15,
      color: colors.primary,
    },
    tabReturnSection: {
      marginTop: 12,
      alignItems: "stretch",
      width: "100%",
    },
    tabReturnLinkHit: {
      width: "100%",
      paddingVertical: 12,
      alignItems: "center",
    },
    tabLink: {
      fontSize: 16,
      fontWeight: "700",
      color: colors.primary,
      textAlign: "center",
    },
  });
}
