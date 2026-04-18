import type { AppColors } from "@/constants/colors";
import { StyleSheet } from "react-native";

export function createStyles(colors: AppColors) {
  return StyleSheet.create({
    card: {
      borderRadius: 14,
      paddingVertical: 14,
      paddingHorizontal: 18,
      backgroundColor: colors.surfaceSlate,
      borderWidth: 1,
      borderColor: colors.borderSlate,
    },
    text: {
      fontSize: 13,
      lineHeight: 21,
      color: colors.textSecondary,
    },
  });
}
