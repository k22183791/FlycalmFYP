import type { AppColors } from "@/constants/colors";
import { StyleSheet } from "react-native";

export function createStyles(colors: AppColors) {
  return StyleSheet.create({
  title: {
    fontSize: 28,
    fontWeight: "700",
    textAlign: "center",
    color: colors.textPrimary,
    lineHeight: 36,
  },
  subtitle: {
    fontSize: 17,
    textAlign: "center",
    marginTop: 8,
    lineHeight: 24,
    color: colors.textSecondary,
    marginBottom: 16,
  },
})
};
