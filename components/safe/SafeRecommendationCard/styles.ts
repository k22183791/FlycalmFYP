import type { AppColors } from "@/constants/colors";
import { StyleSheet } from "react-native";

export function createStyles(colors: AppColors) {
  return StyleSheet.create({
    card: {
      borderRadius: 16,
      padding: 20,
      backgroundColor: colors.blueSoft,
      borderWidth: 1,
      borderColor: colors.blueBorderFaint,
    },
    eyebrow: {
      fontSize: 11,
      fontWeight: "600",
      letterSpacing: 0.8,
      textTransform: "uppercase",
      color: colors.blue,
      marginBottom: 6,
    },
    title: {
      fontSize: 20,
      fontWeight: "700",
      color: colors.blueDark,
      marginBottom: 10,
    },
    body: {
      fontSize: 14,
      lineHeight: 22,
      color: colors.blue,
    },
  });
}
