import type { AppColors } from "@/constants/colors";
import { StyleSheet } from "react-native";

export function createStyles(colors: AppColors) {
  return StyleSheet.create({
    surface: {
      gap: 16,
    },
    headerBlock: {
      marginBottom: 4,
      marginHorizontal: 24,
    },
    title: {
      fontSize: 28,
      fontWeight: "700",
      color: colors.textSettingsTitle,
      lineHeight: 34,
    },
    subtitle: {
      fontSize: 15,
      marginTop: 6,
      lineHeight: 22,
      color: colors.textSettingsMuted,
    },
  });
}
