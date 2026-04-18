import type { AppColors } from "@/constants/colors";
import { StyleSheet } from "react-native";

export function createStyles(colors: AppColors) {
  return StyleSheet.create({
    card: {
      borderRadius: 16,
      padding: 24,
      alignItems: "center",
      backgroundColor: colors.white,
      borderWidth: 1,
      borderColor: colors.borderSubtle,
    },
    iconCircle: {
      width: 52,
      height: 52,
      borderRadius: 26,
      backgroundColor: colors.calmHintBg,
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 16,
    },
    title: {
      fontSize: 24,
      fontWeight: "700",
      color: colors.textHeading,
      textAlign: "center",
    },
    body: {
      fontSize: 14,
      marginTop: 10,
      lineHeight: 22,
      textAlign: "center",
      color: colors.textSecondary,
    },
  });
}
