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
      fontSize: 15,
      marginTop: 4,
      lineHeight: 22,
      color: colors.textSecondary,
    },
    list: {
      marginTop: 20,
      gap: 10,
    },
    row: {
      minHeight: 72,
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: 16,
      paddingVertical: 14,
      borderRadius: 14,
      backgroundColor: colors.white,
      borderWidth: 1.5,
      borderColor: colors.borderSubtle,
    },
    rowActive: {
      borderColor: colors.blue,
      backgroundColor: colors.blueTint,
    },
    iconCircle: {
      width: 42,
      height: 42,
      borderRadius: 21,
      alignItems: "center",
      justifyContent: "center",
    },
    textBlock: {
      flex: 1,
      marginLeft: 14,
    },
    label: {
      fontSize: 15,
      fontWeight: "600",
      color: colors.textHeading,
    },
    caption: {
      fontSize: 13,
      marginTop: 2,
      color: colors.textMuted,
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
