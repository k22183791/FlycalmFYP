import type { AppColors } from "@/constants/colors";
import { Platform, StyleSheet } from "react-native";

export function createStyles(colors: AppColors) {
  return StyleSheet.create({
    title: {
      fontSize: 24,
      fontWeight: "700",
      color: colors.textHeading,
    },
    subtitle: {
      fontSize: 16,
      marginTop: 4,
      lineHeight: 22,
      color: colors.textSecondary,
    },
    list: {
      marginTop: 20,
      gap: 12,
    },
    symptom: {
      minHeight: 72,
      borderRadius: 14,
      paddingHorizontal: 16,
      paddingVertical: 14,
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: colors.white,
      borderWidth: 1,
      borderColor: colors.borderSubtle,
    },
    symptomActive: {
      borderColor: colors.blue,
      backgroundColor: colors.blueTint,
    },
    iconCircle: {
      width: 40,
      height: 40,
      borderRadius: 20,
      alignItems: "center",
      justifyContent: "center",
    },
    iconEmoji: {
      fontSize: 18,
    },
    textBlock: {
      flex: 1,
      marginLeft: 14,
    },
    symptomLabel: {
      fontSize: 15,
      fontWeight: "600",
      color: colors.textHeading,
    },
    symptomSub: {
      fontSize: 13,
      marginTop: 2,
      color: colors.textMuted,
    },
    checkbox: {
      width: 22,
      height: 22,
      borderRadius: 6,
      borderWidth: 1.5,
      borderColor: colors.borderInput,
      backgroundColor: colors.white,
      alignItems: "center",
      justifyContent: "center",
      marginLeft: 10,
    },
    checkboxActive: {
      borderColor: colors.blue,
      backgroundColor: colors.blue,
    },
    checkboxTick: {
      fontSize: 15,
      lineHeight: 16,
      color: colors.white,
    },
    footer: {
      marginTop: 20,
    },
    continueBtn: {
      width: "100%",
      backgroundColor: colors.blue,
      borderRadius: 14,
      minHeight: 54,
      justifyContent: "center",
      paddingVertical: 16,
      paddingHorizontal: 20,
      ...Platform.select({
        ios: {
          shadowColor: colors.blueDark,
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.22,
          shadowRadius: 14,
        },
        android: {
          elevation: 0,
        },
      }),
    },
    continueBtnText: {
      color: colors.white,
      fontSize: 16,
      fontWeight: "700",
      textAlign: "center",
    },
  });
}
